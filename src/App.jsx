import styled from "styled-components"

import Footer from "./Footer"
import Cta from "./Cta"
import Features from "./Features"

const StyledApp = styled.div``

export default function App() {
  return (
    <StyledApp>
      <Features />
      <Cta />
      <Footer />
    </StyledApp>
  )
}
