import React, { createContext, FC, ReactNode, SetStateAction, useContext, useState } from 'react'

export type ContextType = {
  menuPanelOpen: boolean
  setMenuPanelOpen: React.Dispatch<React.SetStateAction<boolean>>
  menu: boolean,
  setMenu: React.Dispatch<React.SetStateAction<boolean>>,
  user: boolean,
  setUser: React.Dispatch<React.SetStateAction<boolean>>,
  openModal: boolean,
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>,
  likedPanel: boolean,
  setLikedPanel: React.Dispatch<React.SetStateAction<boolean>>,
  cartPanel: boolean,
  setCartPanel: React.Dispatch<React.SetStateAction<boolean>>,
}

interface Foo {
  children: ReactNode
}

const defaultValues: ContextType = {
  menuPanelOpen: false,
  setMenuPanelOpen: (): void => { },
  menu: false,
  setMenu: (): void => { },
  user: false,
  setUser: (): void => {},
  openModal: false,
  setOpenModal: (): void => { },
  likedPanel: false,
  setLikedPanel: (): void => { },
  cartPanel: false,
  setCartPanel: (): void => {}
}
export const MainContext = createContext<ContextType>(defaultValues)

export function useMainContext() {
  return useContext(MainContext)
}

export const MainContextProvider: FC<Foo> = ({children}) =>  {
  const [menuPanelOpen, setMenuPanelOpen] = useState(defaultValues.menuPanelOpen)
  const [menu, setMenu] = useState(defaultValues.menu)
  const [user, setUser] = useState(defaultValues.user)
  const [openModal, setOpenModal] = useState(defaultValues.openModal)
  const [likedPanel, setLikedPanel] = useState(defaultValues.likedPanel)
  const [cartPanel, setCartPanel] = useState(defaultValues.cartPanel)

  const value: ContextType = {
    menuPanelOpen,
    setMenuPanelOpen,
    menu,
    setMenu,
    user,
    setUser,
    openModal,
    setOpenModal,
    likedPanel, 
    setLikedPanel,
    cartPanel,
    setCartPanel
  }

  return (
    <MainContext.Provider value={value}>
      { children }
    </MainContext.Provider>
  )
}