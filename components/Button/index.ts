import styled from "styled-components"
import { colors, variables } from "@/assets/style"
import { flex } from "@/assets/style"

const Button = styled.button`
    ${variables.buttonPadding};
    background-color: ${colors.yellow};
    ${variables.borderRadius};
    ${flex.center};
    gap: 5px;
    border: none;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: ${colors.white};
    transition: all 0.5s ease;

    &:hover {
        background-color: ${colors.darkYellow};
    }
`
export default Button
