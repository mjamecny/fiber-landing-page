import styled from "styled-components"

import Footer from "./Footer"
import Cta from "./Cta"
import Features from "./Features"
import Hero from "./Hero"

const StyledApp = styled.div``

export default function App() {
  return (
    <StyledApp>
      <Hero />
      <Features />
      <Cta />
      <Footer />
    </StyledApp>
  )
}
