import * as React from "react"
import { SVGProps } from "react"

const LikedIcons = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    fill="none"
    {...props}
  >
    <path
      d="M11.365.996a1 1 0 0 0-1.73 0L6.921 5.673a1.25 1.25 0 0 1-.894.61L.94 7.05C.086 7.18-.214 8.258.452 8.81l3.789 3.138c.35.29.515.75.43 1.197L3.68 18.35a1 1 0 0 0 1.448 1.072l4.79-2.522a1.25 1.25 0 0 1 1.165 0l4.789 2.522a1 1 0 0 0 1.448-1.072l-.991-5.205a1.25 1.25 0 0 1 .43-1.197l3.79-3.139c.665-.551.365-1.63-.49-1.759l-5.085-.768a1.25 1.25 0 0 1-.895-.609L11.365.996Z"
      fill="#D1D1D6"
    />
  </svg>
)

export default LikedIcons
