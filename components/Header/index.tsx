import React, { FC, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useMainContext } from '@/context/MenuContext'
// import { getLikedItemsCount } from '@/redux/favorite'
// import { getItemsCount } from '@/redux/Cart'
// import { useSelector } from "react-redux"
import { MenuItemData } from './data'
import Container from '@/Layout/Container'
import DropdownMenu from './DropdownMenu'
import MobileMenu from './MobileMenu'
// import MobilaNavbar from '@/components/MobileNavbar'
// import { Portal } from '../Portal/Modal'
import Tabs from './Tabs'
import * as S from "./style"

import DeviceLogo from '@/components/Logo/DeviceLogo'
import LeftIcon from '@/assets/images/MobileNavIcons/leftIcon'
import User from '@/assets/images/MobileNavIcons/user'
import likeIcon from "@/assets/images/icons/likeIcon.png"
import cartIcon from "@/assets/images/icons/shopping-cart.png"
// import CartItems from '../CartItems'


const Header: FC = () => {
  const { menu, setMenu } = useMainContext()
  const { user, setUser } = useMainContext()
  const { openModal, setOpenModal } = useMainContext()
  const  {cartPanel, setCartPanel} = useMainContext()
  const dropdownRef = useRef<HTMLDivElement>(null)
  // const likedItems: any = useSelector(getLikedItemsCount)
  // const cardItemsCount: any = useSelector(getItemsCount)

  const BurgerMenu = (e: any) => {
    e.stopPropagation()
    return setMenu(!menu)
  }

  const handleClickOutsideDropdown = (e: any) => {
    if (menu && !dropdownRef.current?.contains(e.target as Node)) {
      setMenu(!menu)
    }
  }

  if (typeof window !== 'undefined') {
    window.addEventListener("click", handleClickOutsideDropdown)
  }

  return (
    <S.HeaderWraper>
      <Container>
        <S.HeaderContent>
          <S.MenuWraper>
            <S.MenuBtn onClick={(e) => BurgerMenu(e)} >
              <S.BurgerMenu className={menu ? 'active' : ''}>
                <div></div>
                <div></div>
                <div></div>
              </S.BurgerMenu>
              Menu
            </S.MenuBtn>
            <DeviceLogo />
            {menu && <DropdownMenu />}
          </S.MenuWraper>
          <>
            <S.Menu>
              {MenuItemData.map((el) => (
                <S.MenuItem key={el.id}>
                  <Image src={el.image} width={24} height={24} alt="time" />
                  <S.ItemList href={el?.href}>
                    <S.ItemListTitle>{el.title}</S.ItemListTitle>
                    <S.ItemListText>{el.text}</S.ItemListText>
                  </S.ItemList>
                </S.MenuItem>
              ))}
            </S.Menu>
            <S.UserActions>
                <S.UserLinks>
                  <Image src={likeIcon} alt='like-box' />
                  {/* {likedItems >=1 && (<S.Badge>{likedItems}</S.Badge>)} */}
                </S.UserLinks>
                <S.UserLinks onClick={() => setCartPanel(true)}>
                  <Image src={cartIcon} alt='cart-box' width={24} height={24} />
                  {/* {cardItemsCount >=1 && (<S.Badge>{cardItemsCount}</S.Badge>)} */}
                </S.UserLinks>
            </S.UserActions>
            {user ? (
              <S.UserBtn href='/user'>
                <User />
                Shaxsiy kabinet
                <LeftIcon style={{ marginRight: '10px' }} />
              </S.UserBtn>
            ) : (
              <S.LoginBtn onClick={() => setOpenModal(true)}>
                Kirish
              </S.LoginBtn>
            )}
          </>
          {/* {openModal ? (
            <Portal openModal={false} >
              <S.Modal>
                <Tabs />
              </S.Modal>
            </Portal>
          ) : ''} */}
          <MobileMenu />
          {/* <CartItems/> */}
        </S.HeaderContent>
      </Container>
      {/* <MobilaNavbar /> */}
    </S.HeaderWraper>
  )
}

export default Header