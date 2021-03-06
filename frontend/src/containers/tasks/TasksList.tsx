/** @jsx jsx */

import { jsx } from "@emotion/core";
import {
    Button,
    Dialog,
    IColumn,
    InputField,
    ITab,
    SelectField,
    Table,
    TabsWrapper,
} from "@magnit/components";
import { ETaskStatus } from "@magnit/entities";
import { AddIcon, ReturnIcon, SendIcon } from "@magnit/icons";
import { getFriendlyDate } from "@magnit/services";
import { Grid, MenuItem, Paper, Typography } from "@material-ui/core";
import { Link, Redirect, RouteComponentProps } from "@reach/router";
import { EmptyList } from "components/list";
import { SectionLayout } from "components/section-layout";
import { SectionTitle } from "components/section-title";
import { AppContext } from "context";
import _ from "lodash";
import * as React from "react";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import {
    getAllRegions,
    getCitiesForRegion,
    getTasksExtended,
    IExtendedTask,
    TExtendedTaskSortKeys,
    updateTask,
} from "services/api";

const tabs: ITab[] = [
    { value: ETaskStatus.IN_PROGRESS.replace("_", "-"), label: "В работе" },
    { value: ETaskStatus.ON_CHECK.replace("_", "-"), label: "На проверке" },
    { value: ETaskStatus.EXPIRED, label: "Просроченные" },
    { value: ETaskStatus.DRAFT, label: "Черновики" },
    { value: ETaskStatus.COMPLETED, label: "Завершенные" },
];

const columns: IColumn[] = [
    { key: "title", label: "Название задания", sortable: true },
    { key: "region", label: "Регион", sortable: true },
    { key: "city", label: "Филиал", sortable: true },
    { key: "format", label: "Формат", sortable: true },
    { key: "stageTitle", label: "Этап", sortable: true },
    { key: "deadline", label: "Срок выполнения", sortable: true },
];

type TRouteProps = { "*": string };

type TTask = IExtendedTask & { selected: boolean };

interface IUpdateTaskListOptions {
    sort?: "asc" | "desc";
    sortBy?: TExtendedTaskSortKeys;
    title?: string;
    region?: string;
    city?: string;
}

type TSelectChangeEvent = React.ChangeEvent<{ name?: string; value: unknown }>;

export interface ITaskListProps extends RouteComponentProps<TRouteProps> {}

export const TasksList: React.FC<ITaskListProps> = props => {
    const tab = props["*"]!;

    const context = useContext(AppContext);

    const [dialogOpen, setDialogOpen] = useState(false);

    // set task on click to redirect ot it
    const [tasks, setTasks] = useState<TTask[]>([]);

    // selection
    const [selectedTasks, setSelectedTasks] = useState<Map<number, TTask>>(new Map());

    // full text search
    const [searchQuery, setSearchQuery] = useState("");

    // total count of tasks
    const [total, setTotal] = useState(0);

    // choose region + city selects
    const [selectedRegion, setSelectedRegion] = useState<string>("");
    const [selectedCity, setSelectedCity] = useState<string>("");
    const [marketplaceRegions, setMarketplaceRegions] = useState<string[]>([]);
    const [regionCities, setRegionCities] = useState<string[]>([]);

    // table
    const [page, setPage] = useState(0);
    const [order, setOrder] = useState<"asc" | "desc">("asc");
    const [orderBy, setOrderBy] = useState<TExtendedTaskSortKeys>("");

    const fetchRegionsAndUpdateState = useCallback(() => {
        getAllRegions(context.courier)
            .then(response => setMarketplaceRegions(response.regions))
            .catch(console.error);
    }, [context.courier]);

    const fetchCitiesAndUpdateState = useCallback(
        (region: string) => {
            getCitiesForRegion(context.courier, region)
                .then(response => setRegionCities(response.cities))
                .catch(console.error);
        },
        [context.courier],
    );

    const clearSelectedTasks = useCallback(() => {
        selectedTasks.clear();
        setSelectedTasks(new Map(selectedTasks));
    }, [selectedTasks]);

    const transformTaskDateToFriendly = useCallback(
        (task: IExtendedTask) => ({
            ...task,
            selected: false,
            createdAt: getFriendlyDate(new Date(task.createdAt!), true),
            updatedAt: getFriendlyDate(new Date(task.updatedAt!), true),
            deadline: getFriendlyDate(new Date(task.updatedAt!), true),
        }),
        [],
    );

    const fetchTasksAndUpdateState = useCallback(
        ({ sort, sortBy, title, region, city }: IUpdateTaskListOptions = {}) => {
            clearSelectedTasks();
            // get task by current status
            // also apply queries
            const upperCaseSort = (sort || "ASC").toUpperCase() as "ASC" | "DESC";
            getTasksExtended(
                context.courier,
                getTaskStatusByTab(tab),
                upperCaseSort,
                sortBy,
                title,
                region,
                city,
            )
                .then(response => {
                    setTasks(response.tasks.map(transformTaskDateToFriendly));
                    setTotal(response.all);
                })
                .catch(console.error);
        },
        [clearSelectedTasks, context.courier, transformTaskDateToFriendly, tab],
    );

    const prevTab = useRef<string | null>(null);
    useEffect(() => {
        if (prevTab.current !== tab) {
            prevTab.current = tab;
            // reset table
            setPage(0);
            setOrder("asc");
            setOrderBy("");
            // reset search query
            setSearchQuery("");
            // reset selected state
            setSelectedRegion("");
            setSelectedCity("");
            // fetch tasks
            fetchTasksAndUpdateState();
            // fetch marketplaces
            fetchRegionsAndUpdateState();
        }
    }, [tab, fetchTasksAndUpdateState, fetchRegionsAndUpdateState]);

    const prevTaskRegion = useRef(selectedRegion);
    useEffect(() => {
        if (!(selectedRegion && prevTaskRegion.current !== selectedRegion)) {
            return;
        }
        fetchCitiesAndUpdateState(selectedRegion);
    }, [fetchCitiesAndUpdateState, selectedRegion]);

    const [redirect, setRedirect] = useState({ redirect: false, to: "" });

    function onRowClick(row: object) {
        if (!_.isObject(row) || !_.has(row, "id")) {
            return;
        }
        setRedirect({ redirect: true, to: _.get(row, "id") });
    }

    const onRowSelectToggleCallback = useCallback(
        (row: object, selected: boolean) => {
            if (!_.isObject(row) || !_.has(row, "id")) {
                return;
            }
            // select or un-select tasks for rejecting
            const id = _.get(row, "id")!;
            if (selected) {
                selectedTasks.set(id, row as TTask);
            } else {
                selectedTasks.delete(id);
            }
            setSelectedTasks(new Map(selectedTasks));
            // update actual task
            const taskIndex = tasks.findIndex(task => task.id === id);
            if (taskIndex !== -1) {
                tasks[taskIndex].selected = selected;
                setTasks([...tasks]);
            }
        },
        [selectedTasks, tasks],
    );

    const setTaskToOnCheck = useCallback(
        async (task: TTask) =>
            updateTask(context.courier, Number(task.id), { status: ETaskStatus.ON_CHECK }),
        [context.courier],
    );

    const onBulkRejectClickCallback = useCallback(() => {
        const tasksToUpdate = [...selectedTasks.values()];

        const isNotInProgress = (task: TTask) => task.status !== ETaskStatus.IN_PROGRESS;

        // allow reject only tasks in IN_PROGRESS state
        if (tasksToUpdate.some(isNotInProgress)) {
            return;
        }

        // TODO: perform one request
        // https://github.com/DavidArutiunian/magnit/issues/88
        Promise.all(tasksToUpdate.map(setTaskToOnCheck))
            .then(() => fetchTasksAndUpdateState())
            .catch(console.error)
            .finally(onDialogClose);
    }, [selectedTasks, setTaskToOnCheck, fetchTasksAndUpdateState]);

    const setTaskToInProgress = useCallback(
        async (task: TTask) =>
            updateTask(context.courier, Number(task.id), { status: ETaskStatus.IN_PROGRESS }),
        [context.courier],
    );

    const onBulkCompleteClickCallback = useCallback(() => {
        const tasksToUpdate = [...selectedTasks.values()];

        const isNotDraftOrOnCheck = (task: TTask) =>
            ![ETaskStatus.DRAFT, ETaskStatus.ON_CHECK].includes(task.status);

        // allow complete only tasks in DRAFT & ON_CHECK states
        if (tasksToUpdate.some(isNotDraftOrOnCheck)) {
            return;
        }

        // TODO: perform one request
        // https://github.com/DavidArutiunian/magnit/issues/88
        Promise.all(tasksToUpdate.map(setTaskToInProgress))
            .then(() => fetchTasksAndUpdateState())
            .then(() => clearSelectedTasks())
            .catch(console.error);
    }, [clearSelectedTasks, selectedTasks, setTaskToInProgress, fetchTasksAndUpdateState]);

    const onSelectToggleCallback = useCallback(
        (selected: boolean) => {
            const nextTasks = tasks.map(task => ({ ...task, selected }));
            setTasks(nextTasks);
            if (selected) {
                nextTasks.forEach(task => task.id && selectedTasks.set(task.id, task));
                setSelectedTasks(new Map(selectedTasks));
            } else {
                clearSelectedTasks();
            }
        },
        [clearSelectedTasks, selectedTasks, tasks],
    );

    const updateTaskListDebounced = _.debounce(fetchTasksAndUpdateState, 150);

    const onSearchQueryChangeCallback = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const value = event.target.value;
            setSearchQuery(value);
            updateTaskListDebounced({
                title: value,
                region: selectedRegion,
                city: selectedCity,
                sortBy: orderBy,
                sort: order,
            });
        },
        [order, orderBy, selectedCity, selectedRegion, updateTaskListDebounced],
    );

    const onRequestSortCallback = useCallback(
        (sort: "asc" | "desc", sortBy: TExtendedTaskSortKeys) => {
            setOrder(sort);
            setOrderBy(sortBy);
            fetchTasksAndUpdateState({
                title: searchQuery,
                region: selectedRegion,
                city: selectedCity,
                sortBy,
                sort,
            });
        },
        [fetchTasksAndUpdateState, searchQuery, selectedCity, selectedRegion],
    );

    function onDialogOpen() {
        setDialogOpen(true);
    }

    function onDialogClose() {
        setDialogOpen(false);
    }

    const onRegionChangeCallback = useCallback(
        (event: TSelectChangeEvent) => {
            const value = event.target.value as string;
            setSelectedRegion(value);
            setSelectedCity("");
            // empty cities if selected nothing
            if (!value) {
                setRegionCities([]);
            }
            updateTaskListDebounced({
                title: searchQuery,
                region: value,
                sort: order,
                sortBy: orderBy,
            });
        },
        [order, orderBy, searchQuery, updateTaskListDebounced],
    );

    const onCityChangeCallback = useCallback(
        (event: TSelectChangeEvent) => {
            const value = event.target.value as string;
            setSelectedCity(value);
            updateTaskListDebounced({
                title: searchQuery,
                region: selectedRegion,
                city: value,
                sort: order,
                sortBy: orderBy,
            });
        },
        [order, orderBy, searchQuery, selectedRegion, updateTaskListDebounced],
    );

    function onChangePage(nextPage: number) {
        setPage(nextPage);
    }

    const empty = !total;

    return (
        <SectionLayout>
            <Dialog open={dialogOpen} onClose={onDialogClose} onSuccess={onBulkRejectClickCallback}>
                Вы действительно хотите отозвать задания?
            </Dialog>
            {redirect.redirect && <Redirect to={`tasks/view/${redirect.to}`} noThrow />}
            <SectionTitle title="Список заданий">
                {process.env.REACT_APP_ALLOW_CREATE_TASK && (
                    <Grid item hidden={empty}>
                        <Button component={Link} to="create" variant="contained" scheme="blue">
                            <AddIcon />
                            <Typography>Создать задание</Typography>
                        </Button>
                    </Grid>
                )}
            </SectionTitle>
            {empty && (
                <EmptyList
                    title="Заданий нет"
                    button={
                        <React.Fragment>
                            {process.env.REACT_APP_ALLOW_CREATE_TASK && (
                                <Grid item>
                                    <Button
                                        component={Link}
                                        to="create"
                                        variant="contained"
                                        scheme="blue"
                                    >
                                        <AddIcon />
                                        <Typography>Создать задание</Typography>
                                    </Button>
                                </Grid>
                            )}
                        </React.Fragment>
                    }
                >
                    {process.env.REACT_APP_ALLOW_CREATE_TASK && (
                        <React.Fragment>
                            <div>Для создания задания нажмите кнопку</div>
                            <div>Создать задание</div>
                        </React.Fragment>
                    )}
                </EmptyList>
            )}
            {!empty && (
                <Paper
                    square={true}
                    css={({ spacing, boxShadow }) => ({
                        margin: spacing(3),
                        boxShadow: boxShadow.paper,
                    })}
                >
                    <Grid container direction="row" css={theme => ({ padding: theme.spacing(2) })}>
                        <Grid item xs={12}>
                            <TabsWrapper tabs={tabs}>
                                <Grid
                                    container
                                    direction="column"
                                    css={theme => ({ padding: theme.spacing(4) })}
                                >
                                    <Grid item xs={12}>
                                        <Grid container direction="row" spacing={2}>
                                            <Grid item xs>
                                                <InputField
                                                    placeholder="Поиск ..."
                                                    fullWidth
                                                    value={searchQuery}
                                                    onChange={onSearchQueryChangeCallback}
                                                    css={({ spacing, radius, colors }) => ({
                                                        borderRadius: radius(5),
                                                        background: colors.white,
                                                        border: `1px solid ${colors.lightGray}`,
                                                        transition: "border 0.25s ease-in-out",
                                                        cursor: "pointer",
                                                        ":hover, :active": {
                                                            border: `1px solid ${colors.primary}`,
                                                        },
                                                        div: {
                                                            ":before, :after": {
                                                                border: "none !important",
                                                            },
                                                        },
                                                        input: {
                                                            padding: `${spacing(2)} ${spacing(4)}`,
                                                        },
                                                    })}
                                                />
                                            </Grid>
                                            <Grid item xs={2}>
                                                <SelectField
                                                    placeholderDisabled={false}
                                                    value={selectedRegion}
                                                    placeholder="Выберите регион"
                                                    fullWidth
                                                    onChange={onRegionChangeCallback}
                                                >
                                                    {(marketplaceRegions || []).map(region => (
                                                        <MenuItem key={region} value={region}>
                                                            {region}
                                                        </MenuItem>
                                                    ))}
                                                </SelectField>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <SelectField
                                                    placeholderDisabled={false}
                                                    value={selectedCity}
                                                    placeholder="Выберите филиал"
                                                    fullWidth
                                                    onChange={onCityChangeCallback}
                                                >
                                                    {(regionCities || []).map(city => (
                                                        <MenuItem key={city} value={city}>
                                                            {city}
                                                        </MenuItem>
                                                    ))}
                                                </SelectField>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        xs={12}
                                        item
                                        css={theme => ({
                                            padding: theme.spacing(3),
                                            paddingLeft: 0,
                                            paddingRight: 0,
                                        })}
                                    >
                                        <Table
                                            css={theme => ({
                                                marginLeft: theme.spacing(-2),
                                                width: `calc(100% + ${theme.spacing(4)})`,
                                            })}
                                            page={page}
                                            order={order}
                                            orderBy={orderBy}
                                            selectable
                                            columns={columns}
                                            data={tasks}
                                            onRowClick={onRowClick}
                                            onRowSelectToggle={onRowSelectToggleCallback}
                                            onSelectToggle={onSelectToggleCallback}
                                            onRequestSort={onRequestSortCallback}
                                            onChangePage={onChangePage}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        {(tab === ETaskStatus.IN_PROGRESS.replace("_", "-") ||
                                            !tab) && (
                                            <Button
                                                variant="contained"
                                                scheme="blue"
                                                onClick={onDialogOpen}
                                            >
                                                <ReturnIcon />
                                                <Typography>Отозвать</Typography>
                                            </Button>
                                        )}
                                        {tab &&
                                            tab !== ETaskStatus.IN_PROGRESS.replace("_", "-") &&
                                            tab !== ETaskStatus.COMPLETED && (
                                                <Button
                                                    variant="contained"
                                                    scheme="blue"
                                                    onClick={onBulkCompleteClickCallback}
                                                >
                                                    <SendIcon />
                                                    <Typography>Отправить</Typography>
                                                </Button>
                                            )}
                                    </Grid>
                                </Grid>
                            </TabsWrapper>
                        </Grid>
                    </Grid>
                </Paper>
            )}
        </SectionLayout>
    );
};

TasksList.displayName = "TasksList";

function getTaskStatusByTab(tab?: string): ETaskStatus {
    if (!tab) {
        return ETaskStatus.IN_PROGRESS;
    }
    return ((tab as unknown) as string).replace("-", "_") as ETaskStatus;
}
