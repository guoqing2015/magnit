/** @jsx jsx */

import * as React from "react";
import { jsx } from "@emotion/core";
import { Grid, Typography } from "@material-ui/core";

export const Group: React.FC = () => {
    return (
        <Grid container direction="column">
            <Grid item css={theme => ({ marginRight: theme.spacing(2) })}>
                <Typography css={theme => ({ color: theme.colors.primary })} variant="h6">
                    Группа связанных вопросов
                </Typography>
            </Grid>
        </Grid>
    );
};
