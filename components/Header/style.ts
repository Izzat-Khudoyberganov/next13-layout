import styled from "styled-components"
import Link from "next/link"
import { colors, variables } from "@/assets/style"
import { flex } from "@/assets/style"

const HeaderWraper = styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 11;
    background: ${colors.white};
    box-shadow: 0px 4px 20px rgba(27, 76, 57, 0.06);
    padding: 22px 0;
`

const HeaderContent = styled.div`
    width: 100%;
    ${flex.spaceBetween}
`

const MenuWraper = styled.div`
    ${flex.alignCenter}
    gap: 35px;
    position: relative;

    @media (max-width: 993px) {
        gap: 15px;
    }
`

const MenuBtn = styled.button`
    width: 115px;
    padding: 11px 30px;
    border: 1px solid ${colors.yellow};
    ${variables.borderRadius};
    ${flex.center};
    gap: 10px;
    transition: 0.4s ease;

    &:hover {
        cursor: pointer;
    }

    @media (max-width: 993px) {
        width: 100px;
        justify-content: space-between;
        padding: 11px 15px;
        gap: 5px;
    }

    @media (max-width: 768px) {
        display: none;
    }
`

const BurgerMenu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4.5px;
    position: relative;

    &.active div:nth-child(1) {
        transform: rotate(45deg);
        position: absolute;
        top: 0px;
        left: -15px;
        
    }
    &.active div:nth-child(2) {
        display: none;
    }
    &.active div:nth-child(3) {
        transform: rotate(-45deg);
        position: absolute;
        width: 17px;
        top: 0px;
        left: -15px;
    }

    & > div {
        height: 1.5px;
        background-color: ${colors.green};
        transition: 0.3s;
    }

    & > div:nth-child(1) {
        width: 17px;
    }

    & > div:nth-child(2) {
        width: 12px;
    }

    & > div:nth-child(3) {
        width: 15px;
    }
`
const MobileBurgerMenu = styled(BurgerMenu)`
    display: none;

    @media (max-width: 768px) {
        ${flex.justFlex}
    }
`
const Menu = styled.ul`
    ${flex.alignCenter};
    gap: 60px;

    @media (max-width: 993px) {
        gap: 20px;
    }

    @media (max-width: 768px) {
        display: none;
    }
`

const MenuItem = styled.li`
    ${flex.alignCenter};
    gap: 12px;

    @media (max-width: 993px) {
        gap: 6px;
    }
`

const ItemList = styled.a`
    ${flex.justFlex}
    flex-direction: column;
    gap: 5px;
`

const ItemListTitle = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: ${colors.titleColor};

    @media (max-width: 993px) {
        font-size: 14px;
        line-height: 16px;
    }
`

const ItemListText = styled.small`
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: ${colors.textColor};

    @media (max-width: 993px) {
        font-size: 12px;
        line-height: 14px;
    }
`

const UserActions = styled.div`
    ${flex.justFlex}
    gap: 15px;

    @media (max-width: 993px) {
        gap: 5px;
    }
`

const UserLinks = styled.button`
    position: relative;
    ${flex.center}
    width: 54px;
    height: 48px;
    background: #fffee8;
    ${variables.borderRadius};
    ${flex.center}

    &:hover {
        cursor: pointer;
    }

    @media(max-width: 993px) {
        padding: 8px 10px;
    }

    @media (max-width: 768px) {
        display: none;
    }
`

const LoginBtn = styled.button`
    ${variables.buttonPadding};
    border: 1px solid ${colors.yellow};
    ${variables.borderRadius};
    margin-left: 15px;
    transition: all 0.4s ease;

    @media (max-width: 993px) {
        margin-left: 5px;
    }

    &:hover {
        background-color: ${colors.yellow};
        color: ${colors.white};
    }

    @media (max-width: 768px) {
        display: none;
    }
`
const Badge = styled.span`
    position: absolute;
    top: 5px;
    right: 7px;
    width: 20px;
    height: 20px;
    ${flex.center}
    border-radius: 50%;
    font-size: 8px;
    background-color: ${colors.yellow};
    color: ${colors.white};
`
const UserBtn = styled(Link)`
    border: 1px solid ${colors.yellow};
    ${variables.borderRadius};
    margin-left: 15px;
    transition: all 0.4s ease;
    ${flex.spaceBetween}
    gap: 10px;
    padding: 12px 10px;
    color: ${colors.dark};

    @media (max-width: 993px) {
        margin-left: 5px;
    }

    &:hover {
        background-color: ${colors.yellow};
        color: ${colors.white};
    }

    & > svg path {
        transition: all 0.5s ease;
    }

    &:hover path {
        transition: all 0.5s ease;
        stroke: ${colors.white};
    }
`

const Modal = styled.div`
    max-width: 450px;
    width: 100%;
    padding: 50px;
    background-color: ${colors.white};
    border-radius: 16px !important;
    position: fixed;
    left: 50%;
    transform: translate(-50%, 120px);
    z-index: 1011;
    overflow: hidden;
`

export {
    HeaderWraper,
    HeaderContent,
    MenuBtn,
    Menu,
    MenuItem,
    MenuWraper,
    ItemList,
    ItemListText,
    ItemListTitle,
    UserActions,
    MobileBurgerMenu,
    UserLinks,
    Badge,
    LoginBtn,
    BurgerMenu,
    UserBtn,
    Modal,
}
