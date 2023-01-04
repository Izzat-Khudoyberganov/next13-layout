import React, { FC } from 'react'
import Image from 'next/image'
import * as S from "./style"

import furniture from "@/assets/images/icons/furniture-icon.png"
import about from "@/assets/images/icons/about-us-icon.png"
import phone from "@/assets/images/icons/phone-icon.png"

const DropdownMenu: FC = () => {
  return (
    <S.DropdownMenuWraper>
      <S.DropdownItems>
        <S.DropdownLink href='/products'>
          <Image src={furniture} alt='alt' />
          Mebellar
        </S.DropdownLink>
      </S.DropdownItems>
      <S.DropdownItems>
        <S.DropdownLink href='/home/#aboutUs'>
          <Image src={about} alt='alt' />
          Biz haqimizda
        </S.DropdownLink>
      </S.DropdownItems>
      <S.DropdownItems>
        <S.DropdownID href='/home/#contactUs'>
          <Image src={phone} alt='alt' />
          Aloqa
        </S.DropdownID>
      </S.DropdownItems>
    </S.DropdownMenuWraper>
  )
}

export default DropdownMenu