import * as React from "react"
import { SVGProps } from "react"

const CartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={19}
    fill="none"
    {...props}
  >
    <path
      d="M7.373 1.26A.838.838 0 1 0 5.921.42L4.066 3.638h-1.33A2.237 2.237 0 0 0 .5 5.876c0 .801.42 1.504 1.053 1.9.064.04.14.059.215.059h16.464a.405.405 0 0 0 .215-.06A2.237 2.237 0 0 0 19.5 5.877c0-1.236-1-2.238-2.235-2.238h-1.331L14.079.42a.838.838 0 1 0-1.452.84l1.371 2.378H6.002l1.371-2.379Z"
      fill="#D1D1D6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.977 9.513c.14 0 .245.126.22.263l-1.117 6.378a3.102 3.102 0 0 1-2.626 2.537 32.276 32.276 0 0 1-8.908 0 3.101 3.101 0 0 1-2.626-2.537L1.802 9.776a.224.224 0 0 1 .22-.263h15.955ZM9.162 10.96c.402.01.703.264.703.54v3.064l1.995 1.065c.293.145.41.595.197.931-.215.337-.804.237-1.096.07l-2.214-1.154a.492.492 0 0 1-.262-.424v-3.6c0-.277.275-.5.677-.492Z"
      fill="#D1D1D6"
    />
  </svg>
)

export default CartIcon
