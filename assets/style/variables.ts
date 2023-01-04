import { css } from "styled-components"
import { colors } from "./colors"

const borderRadiusCircle = css`
    border-radius: 50%;
`

const buttonPadding = css`
    padding: 12px 30px;
`

const borderRadius = css`
    border-radius: 12px;
`

const textStyle = css`
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: ${colors.titleColor};
`
const variables = { borderRadius, borderRadiusCircle, buttonPadding, textStyle }

export {variables}