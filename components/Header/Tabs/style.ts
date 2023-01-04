import { colors, variables } from "@/assets/style"
import { AboutInput } from "@/components/AboutUs/style"
import { flex } from "@/utils/flex"
import styled from "styled-components"
import { CloseBtn } from "../MobileMenu/style"

const BlockTabs = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 60px;
    border: 1px solid #dae0eb;
`
const BlockTabsItems = styled.div`
    max-width: 350px;
    width: 100%;
    ${flex.spaceBetween}
    padding: 4px;
    overflow: hidden;
`
const ToggleBtn = styled.button`
    padding: 19px 26px;
    font-size: 1rem;
    line-height: 1.25rem;
    font-weight: 500;
    text-align: center;
    color: ${colors.titleColor};
    overflow: hidden;
    cursor: pointer;
    font-size: 1.2rem;
    line-height: 1.4rem;
    position: relative;
    outline: none;
    border-radius: 60px;

    &.active-tabs {
        background: #f6f8f9;
    }
`

const CloseBtnModal = styled(CloseBtn)`
    width: 32px;
    height: 32px;
    ${flex.center}
    position: absolute;
    top: 15px;
    right: 15px;
`

const ContentTabs = styled.div`
    flex-grow: 1;
`
const Content = styled.div`
    background: ${colors.white};
    width: 100%;
    height: 100%;
    display: none;

    &.active-content {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
`

const ModalForm = styled.form`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
`

const ModalLabel = styled.label`
    ${variables.textStyle};
    color: ${colors.labelTextColor};
    margin-bottom: 12px;
`
const ModalInput = styled(AboutInput)`
    width: 100%;
    margin-bottom: 25px;
`


export {
    BlockTabs,
    BlockTabsItems,
    ToggleBtn,
    CloseBtnModal,
    ContentTabs,
    Content,
    ModalForm,
    ModalLabel,
    ModalInput
}
