import { colors, variables } from "@/assets/style"
import { flex } from "@/assets/style"
import Link from "next/link"
import styled from "styled-components"

interface Foo {
    active: boolean
}

const MenuOverlay = styled.div<Foo>`
    display: ${({ active }) => (active ? "block" : "none")};
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1002;
    transition: all 0.5s linear;
`
const Menu = styled.div`
    flex-direction: column;
    gap: 4.5px;
    display: none;

    & > div {
        height: 1.5px;
        background-color: ${colors.green};
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

const MenuWraper = styled.div<Foo>`
    position: absolute;
    width: 300px;
    top: 0;
    left: 0;
    z-index: 1001;
    height: 100vh;
    background-color: ${colors.white};
    transition: transform 0.2s linear;
    transform: ${({ active }) =>
        active ? "translateX(0)" : "translateX(-120%)"};
    ${flex.justFlex}
    flex-direction: column;
    align-items: flex-start;
`

const MenuHeader = styled.div`
    ${flex.spaceBetween}
    padding:30px 30px 23px;
    width: 100%;
    border-bottom: 1px solid #f2f1db;
    position: fixed;
`

const CloseBtn = styled.button`
    width: 32px;
    height: 32px;
    ${flex.center}
    background-color: #fffee8;
    border-radius: 50%;
`

const MenuBody = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
    ${flex.spaceBetween};
    align-items: flex-start;
    flex-direction: column;
    overflow: auto;
    margin-top: 100px;
`

const MenuLinks = styled.ul`
    ${flex.justFlex}
    gap: 30px;
    flex-direction: column;
`

const LinkBox = styled.div`
    margin-top: 30px;
    ${flex.justFlex}
    flex-direction: column;
`

const MenuNavLinks = styled(Link)`
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #a7a7a7;
    padding-block: 10px;
`

const AboutUsLink = styled(Link)`
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #a7a7a7;
    padding-block: 10px;
`

const SocialLinkBox = styled.div`
    margin-top: auto;
    ${flex.alignCenter}
    gap: 19px;
`

const SocialLinks = styled.a`
    display: block;
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

const LoginBtn = styled.button`
    ${variables.buttonPadding};
    border: 1px solid ${colors.yellow};
    ${variables.borderRadius};
    margin-left: 15px;
    transition: all 0.4s ease;

    @media (max-width: 993px) {
        margin-left: 0px;
    }

    &:hover {
        background-color: ${colors.yellow};
        color: ${colors.white};
    }
`

export {
    MenuOverlay,
    Menu,
    MenuWraper,
    MenuHeader,
    CloseBtn,
    MenuBody,
    MenuLinks,
    LinkBox,
    MenuNavLinks,
    AboutUsLink,
    SocialLinkBox,
    SocialLinks,
    UserBtn,
    LoginBtn
}
