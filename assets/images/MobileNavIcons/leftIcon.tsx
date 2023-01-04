import * as React from "react"
import { SVGProps } from "react"

const LeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={14}
    fill="none"
    {...props}
  >
    <path d="m1 1 6 6-6 6" stroke="#101828" />
  </svg>
)

export default LeftIcon
