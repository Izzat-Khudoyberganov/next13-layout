import React, { ReactNode } from "react"
import styled from "styled-components"

const StyledContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  padding-right: 20px;
  padding-left: 20px;
  margin-right: auto;
  margin-left: auto;
`

interface ContainerInterface {
  children: ReactNode
}

const Container: React.FC<ContainerInterface> = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
)

export default Container