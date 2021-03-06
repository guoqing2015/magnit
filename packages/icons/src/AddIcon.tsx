/** @jsx jsx */

import { css, jsx } from "@emotion/core";
import * as React from "react";
import { SvgIcon } from "@material-ui/core";
import { IIconProps } from "./IIconProps";

export const AddIcon: React.FC<IIconProps> = ({ size = 24, ...props }) => {
    return (
        <SvgIcon
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            css={css`
                fill: none;
                width: ${size}px;
                height: ${size}px;
            `}
            {...props}
        >
            <rect x="11" y="7" width="2" height="10" rx="1" fill="currentColor" />
            <rect
                x="7"
                y="13"
                width="2"
                height="10"
                rx="1"
                transform="rotate(-90 7 13)"
                fill="currentColor"
            />
        </SvgIcon>
    );
};
