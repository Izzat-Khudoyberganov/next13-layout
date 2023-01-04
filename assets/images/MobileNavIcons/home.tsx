import * as React from "react"
import { SVGProps } from "react"

const HomeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={19}
    fill="none"
    {...props}
  >
    <path
      d="M9.796 1.136a2.5 2.5 0 0 0-3.592 0L1.405 6.092c-.275.284-.46.644-.532 1.034a28.756 28.756 0 0 0-.127 9.624l.176 1.13c.056.357.364.62.725.62H5a.5.5 0 0 0 .5-.5v-7h5v7a.5.5 0 0 0 .5.5h3.353a.733.733 0 0 0 .724-.62l.177-1.13a28.759 28.759 0 0 0-.127-9.624 2.007 2.007 0 0 0-.533-1.034L9.796 1.136Z"
      fill="#B8B8D2"
    />
  </svg>
)

export default HomeIcon