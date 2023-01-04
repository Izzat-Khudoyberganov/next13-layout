import styled from "styled-components"
import Link from "next/link"
import { colors, variables } from "@/assets/style"

const DropdownMenuWraper = styled.ul`
    width: 250px;
    padding-block: 10px;
    background-color: ${colors.white};
    ${variables.borderRadius};
    border: 1px solid ${colors.yellow};
    position: absolute;
    left: 0;
    top: 65px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    &::before {
        content: "";
        width: 38px;
        height: 38px;
        background-color: ${colors.white};
        position: absolute;
        top: -15px;
        left: 25px;
        transform: rotate(45deg);
        z-index: -1;
        border: 1px solid ${colors.yellow};
        border-radius: 6px;
    }

    &::after {
        content: '';
        width: 40px;
        position: absolute;
        top: -1px;
        left: 24px;
        border: 1px solid #fff;
    }
`

const DropdownItems = styled.li`
    padding-block: 14.5px;
    padding-inline: 25px;
    transition: 0.3s ease;

    &:hover {
        background-color: #fffee8;
    }
`

const DropdownID = styled(Link)`
    display: flex;
    gap: 10px;
    align-items: center;
    cursor: pointer;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: ${colors.titleColor};
`

const DropdownLink = styled(Link)`
    display: flex;
    gap: 10px;
    align-items: center;
    cursor: pointer;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: ${colors.titleColor};
`
export { DropdownMenuWraper, DropdownItems, DropdownID, DropdownLink }
