import React, { FC, useEffect, useRef } from 'react'
import Image from 'next/image'
import { MenuItemData } from '../data'
import { useMainContext } from '@/context/MenuContext'
import { ItemList, ItemListText, ItemListTitle, MenuItem } from '../style'
import * as S from "./style"

import closeIcon from "assets/images/icons/close-icon.png"
import instagram from "assets/images/icons/instagram.png"
import youtube from "assets/images/icons/youtube.png"
import telegram from "assets/images/icons/telegram.png"
import DeviceLogo from '@/components/Logo/DeviceLogo'
import User from '@/assets/images/MobileNavIcons/user'
import LeftIcon from '@/assets/images/MobileNavIcons/leftIcon'

const MobileMenu: FC = () => {
  const { menuPanelOpen, setMenuPanelOpen } = useMainContext()
  const { user, setUser } = useMainContext()
  const { openModal, setOpenModal } = useMainContext()
  const dropdownRef = useRef<HTMLDivElement>(null)


  const NavbarToggler = (e: any) => {
    e.stopPropagation()
    return setMenuPanelOpen(!menuPanelOpen)
  }

  const handleClickOutsideDropdown = (e: any) => {
    if (menuPanelOpen && !dropdownRef.current?.contains(e.target as Node)) {
      setMenuPanelOpen(!menuPanelOpen)
    }
  }

  if (typeof window !== 'undefined') {
    window.addEventListener("click", handleClickOutsideDropdown)
  }

  useEffect(() => {
    if (menuPanelOpen || openModal) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [openModal, menuPanelOpen])

  return (
    <>
      <S.Menu onClick={(e) => NavbarToggler(e)}>
        <div></div>
        <div></div>
        <div></div>
      </S.Menu>
      <S.MenuWraper active={menuPanelOpen}>
            <S.MenuHeader>
              <DeviceLogo />
              <S.CloseBtn>
                <Image src={closeIcon} alt='close-icon' onClick={(e) => NavbarToggler(e)} />
              </S.CloseBtn>
            </S.MenuHeader>
            <S.MenuBody>
              <>
                <S.MenuLinks>
                  {MenuItemData.map((el) => (
                    <MenuItem key={el.id}>
                      <Image src={el.image} alt={el.title} width={24} height={24} />
                      <ItemList href={el?.href}>
                        <ItemListTitle>{el.title}</ItemListTitle>
                        <ItemListText>{el.text}</ItemListText>
                      </ItemList>
                    </MenuItem>
                  ))}
                </S.MenuLinks>
                <S.LinkBox>
                  {user ? (
                    <S.UserBtn href='/user'>
                      <User />
                      Shaxsiy kabinet
                      <LeftIcon style={{ marginRight: '10px' }} />
                    </S.UserBtn>
                  ) : (
                    <S.LoginBtn style={{ marginBlock: '10px' }} onClick={() => setOpenModal(true)}>
                      Kirish
                    </S.LoginBtn>
                  )}
                  <S.MenuNavLinks href='/products' onClick={(e) => NavbarToggler(e)}>Mebellarimiz</S.MenuNavLinks>
                  <S.AboutUsLink href='/home/#aboutUs'>Biz haqimizda</S.AboutUsLink>
                  <S.AboutUsLink href='/home/#contactUs'>Bog`lanish</S.AboutUsLink>
                </S.LinkBox>
              </>
              <>
                <S.SocialLinkBox>
                  <S.SocialLinks href='https://instagram.com' target='_blank'>
                    <Image src={instagram} alt='instagram-icon' />
                  </S.SocialLinks>
                  <S.SocialLinks href='https://youtube.com' target='_blank'>
                    <Image src={youtube} alt='youtube-icon' />
                  </S.SocialLinks>
                  <S.SocialLinks href='https://telegram.org' target='_blank'>
                    <Image src={telegram} alt='telegram-icon' />
                  </S.SocialLinks>
                </S.SocialLinkBox>
              </>
            </S.MenuBody>
          </S.MenuWraper>
    </>
  )
}

export default MobileMenu