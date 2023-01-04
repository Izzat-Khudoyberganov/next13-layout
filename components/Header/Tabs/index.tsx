import React, { useState } from "react"
import Image from "next/image"
import { useMainContext } from "@/context/MenuContext"
import Button from "@/components/Button"
import * as S from "./style"

import closeIcon from "@/assets/images/icons/close-icon.png"

const initialState = {
  name: "",
  number: "+998",
}

const Tabs = () => {

  const { openModal, setOpenModal } = useMainContext()
  const [toggleState, setToggleState] = useState(1)
  const [jsonData, setJsonData] = useState(initialState)
  const [inputError, setInputError] = useState({ name: false, tell: false })

  const toggleTab = (index: React.SetStateAction<number>) => {
    setToggleState(index)
  }

  const changeJsonData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJsonData({ ...jsonData, [e.target.name]: e.target.value })
  }

  const changeTell = (e: any) => {
    const value = e.target.value

    const x = value
        .replace(/\D/g, "")
        .match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/)
    const result = `${x[1] !== "" ? "+" + x[1] : ""}${
        x[2] !== "" ? " (" + x[2] : ""
    }${x[3] !== "" ? ")_" + x[3] : ""}${x[4] !== "" ? "_" + x[4] : ""}${
        x[5] !== "" ? "_" + x[5] : ""
    }`

    setJsonData({ ...jsonData, number: result })
  }

  const closeModal = () => {
    return setOpenModal(false)
  }

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()

    const result = {
        name: jsonData?.name.length < 3,
        tell: jsonData?.number.length !== 19,
    }

    setInputError(result)
    const sent = `Ism: ${jsonData.name}, Tell number:${jsonData.number}`
    if (jsonData?.name.length >= 3 && jsonData?.number.length === 19) {
       console.log("ok")
    }
}

  return (
    <>
      <S.BlockTabs>
        <S.BlockTabsItems>
          <S.ToggleBtn
            className={toggleState === 1 ? " active-tabs" : ""}
            onClick={() => toggleTab(1)}
          >
            Ro`yxatdan o`tish
          </S.ToggleBtn>
          <S.ToggleBtn
            className={toggleState === 2 ? "active-tabs" : ""}
            onClick={() => toggleTab(2)}
          >
            Kirish
          </S.ToggleBtn>
        </S.BlockTabsItems>
        <S.CloseBtnModal>
          <Image
            src={closeIcon}
            alt="close-icon"
            onClick={() => closeModal()}
          />
        </S.CloseBtnModal>
      </S.BlockTabs>
      <S.ContentTabs>
        <S.Content
          className={toggleState === 1 ? "active-content" : ""}
        >
          <S.ModalForm action="#" onSubmit={onSubmit}>
            <S.ModalLabel
              htmlFor="modalName"
            >
              Ism familiyangiz
            </S.ModalLabel>
            <S.ModalInput
              id='modalName'
              name='name'
              className='form__input'
              type='text'
              placeholder=' '
              value={jsonData?.name}
              onChange={(e) => changeJsonData(e)}
            />
            <small>{ inputError.name && "error"}</small>
            <S.ModalLabel
              htmlFor="modalNumber"
            >
              Telefon raqam
            </S.ModalLabel>
            <S.ModalInput 
              id='modalNumber'
              name='number'
              className='form__input'
              type='text'
              placeholder=' '
              value={jsonData?.number}
              onChange={(e) => changeTell(e)}
            />
            <small>{ inputError.tell && "error"}</small>
            <Button
              type="submit"
            >
              SMS kod yuborish
            </Button>
          </S.ModalForm>
        </S.Content>

        <S.Content
          className={toggleState === 2 ?
            "active-content" : ""
          }
        >
          <S.ModalForm action="">
            <S.ModalLabel htmlFor="modalNumber">Telefon raqam</S.ModalLabel>
            <S.ModalInput type="number" id="modalNumber" placeholder="+998" />
            <Button
              type="submit"
            >
              SMS kod yuborish
            </Button>
          </S.ModalForm>
        </S.Content>
      </S.ContentTabs>
    </>
  )
}

export default Tabs