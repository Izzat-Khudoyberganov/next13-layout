import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { useMainContext } from '@/context/MenuContext'

const DeviceLogoIcon = styled(Link)`
  width: 146px;
  height: 19px;
  display: block;

  &:hover {
    cursor: pointer;
  }

  @media(max-width: 993px){
       width: 100px; 
  }
 &>svg{
  @media(max-width: 993px){
       width: 100%; 
  }
 }
`

const DeviceLogo = () => {
const {menuPanelOpen, setMenuPanelOpen} = useMainContext()

  const NavbarToggler = () => {
    return setMenuPanelOpen(!menuPanelOpen)
  }
  return (
    <DeviceLogoIcon href='/' onClick={() => setMenuPanelOpen(false)}>
      <svg xmlns="http://www.w3.org/2000/svg" width="145" height="19" viewBox="0 0 145 19" fill="none">
        <path d="M5.65909 18H0.545455L6.30682 0.545454H12.7841L18.5455 18H13.4318L9.61364 5.35227H9.47727L5.65909 18ZM4.70455 11.1136H14.3182V14.6591H4.70455V11.1136ZM26.9425 18H20.2266V0.545454H26.8743C28.6697 0.545454 30.2209 0.894886 31.5277 1.59375C32.8402 2.28693 33.8516 3.28693 34.5618 4.59375C35.2777 5.89489 35.6357 7.45455 35.6357 9.27273C35.6357 11.0909 35.2805 12.6534 34.5703 13.9602C33.8601 15.2614 32.8544 16.2614 31.5533 16.9602C30.2521 17.6534 28.7152 18 26.9425 18ZM24.9652 13.9773H26.772C27.6357 13.9773 28.3714 13.8381 28.9794 13.5597C29.593 13.2812 30.0589 12.8011 30.3771 12.1193C30.701 11.4375 30.8629 10.4886 30.8629 9.27273C30.8629 8.05682 30.6982 7.10795 30.3686 6.42614C30.0447 5.74432 29.5675 5.2642 28.9368 4.98579C28.3118 4.70739 27.5447 4.56818 26.6357 4.56818H24.9652V13.9773ZM41.2607 18H36.147L41.9084 0.545454H48.3857L54.147 18H49.0334L45.2152 5.35227H45.0788L41.2607 18ZM40.3061 11.1136H49.9197V14.6591H40.3061V11.1136ZM55.8281 18V0.545454H63.3622C64.6577 0.545454 65.7912 0.801136 66.7628 1.3125C67.7344 1.82386 68.4901 2.54261 69.0298 3.46875C69.5696 4.39489 69.8395 5.47727 69.8395 6.71591C69.8395 7.96591 69.5611 9.0483 69.0043 9.96307C68.4531 10.8778 67.6776 11.5824 66.6776 12.0767C65.6832 12.571 64.5213 12.8182 63.1918 12.8182H58.6918V9.13636H62.2372C62.794 9.13636 63.2685 9.03977 63.6605 8.84659C64.0582 8.64773 64.3622 8.36648 64.5724 8.00284C64.7884 7.6392 64.8963 7.21023 64.8963 6.71591C64.8963 6.21591 64.7884 5.78977 64.5724 5.4375C64.3622 5.07955 64.0582 4.80682 63.6605 4.61932C63.2685 4.42614 62.794 4.32954 62.2372 4.32954H60.5668V18H55.8281ZM71.1009 4.36364V0.545454H86.2713V4.36364H81.0213V18H76.3509V4.36364H71.1009ZM90.3857 18H85.272L91.0334 0.545454H97.5107L103.272 18H98.1584L94.3402 5.35227H94.2038L90.3857 18ZM89.4311 11.1136H99.0447V14.6591H89.4311V11.1136Z" fill="#1B4C39" />
        <path d="M107.578 18.2727C106.919 18.2727 106.354 18.0426 105.882 17.5824C105.416 17.1165 105.186 16.5511 105.192 15.8864C105.186 15.2386 105.416 14.6847 105.882 14.2244C106.354 13.7642 106.919 13.5341 107.578 13.5341C108.203 13.5341 108.754 13.7642 109.232 14.2244C109.714 14.6847 109.959 15.2386 109.964 15.8864C109.959 16.3295 109.842 16.733 109.615 17.0966C109.393 17.4545 109.104 17.7415 108.746 17.9574C108.388 18.1676 107.999 18.2727 107.578 18.2727ZM122.783 0.545454H127.521V11.7273C127.521 13.0568 127.203 14.2074 126.567 15.179C125.936 16.1449 125.055 16.892 123.925 17.4205C122.794 17.9432 121.482 18.2045 119.987 18.2045C118.482 18.2045 117.163 17.9432 116.033 17.4205C114.902 16.892 114.021 16.1449 113.391 15.179C112.766 14.2074 112.453 13.0568 112.453 11.7273V0.545454H117.192V11.3182C117.192 11.858 117.311 12.3409 117.55 12.767C117.788 13.1875 118.118 13.517 118.538 13.7557C118.964 13.9943 119.447 14.1136 119.987 14.1136C120.533 14.1136 121.016 13.9943 121.436 13.7557C121.857 13.517 122.186 13.1875 122.425 12.767C122.663 12.3409 122.783 11.858 122.783 11.3182V0.545454ZM129.842 18V15.375L138.092 4.36364H129.876V0.545454H144.126V3.17045L135.876 14.1818H144.092V18H129.842Z" fill="#FAB327" />
      </svg>
    </DeviceLogoIcon>

  )
}

export default DeviceLogo