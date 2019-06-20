/** @jsx jsx */

import * as React from "react";
import { Grid, TextField } from "@material-ui/core";
import { jsx } from "@emotion/core";
import { ISpecificPuzzleProps } from "entities";

export const NumericAnswerPuzzle: React.FC<ISpecificPuzzleProps> = () => {
    return (
        <Grid container alignItems="flex-end">
            <Grid item xs={12}>
                <TextField type="number" fullWidth label="Числовой ответ" disabled />
            </Grid>
        </Grid>
    );
};