import * as React from "react"
import { SVGProps } from "react"

const ProfileIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={18}
    fill="none"
    {...props}
  >
    <path
      d="M8.5.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5ZM4.5 10.25A3.75 3.75 0 0 0 .75 14v1.188c0 .753.546 1.396 1.29 1.517 4.278.699 8.642.699 12.92 0a1.537 1.537 0 0 0 1.29-1.517V14a3.75 3.75 0 0 0-3.75-3.75h-.34c-.185 0-.369.03-.544.086l-.866.283a7.251 7.251 0 0 1-4.5 0l-.866-.283a1.752 1.752 0 0 0-.543-.086H4.5Z"
      fill="#D1D1D6"
    />
  </svg>
)

export default ProfileIcon
