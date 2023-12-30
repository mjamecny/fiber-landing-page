import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledCta = styled.section`
  padding: 6.4rem 2.4rem;
`
const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding-top: 3.2rem;
  padding-inline: 2.4rem;
  border-radius: 9px;
  background-color: var(--color-indigo-700);

  display: grid;
  grid-template-columns: 1fr;
  gap: 3.2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1.5fr 2fr;
    align-items: center;
    padding-inline: 3.2rem;
  }
`

const Heading = styled.h2`
  color: var(--color-violet-50);
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
`

const Content = styled.p`
  color: var(--color-violet-300);
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`

const Button = styled(Link)`
  font-weight: 700;
  color: var(--color-indigo-700);
  background-color: var(--color-violet-50);
  border: none;
  border-radius: 5px;
  padding: 1.6rem 3.2rem;
  text-align: center;

  @media (min-width: 768px) {
    align-self: start;
  }
`

const Image = styled.img`
  width: 100%;
`

export default function Cta() {
  return (
    <StyledCta>
      <Container>
        <ContentContainer>
          <Heading>Diversify your portfolio</Heading>
          <Content>
            Create an even more impressive portfolio by creating case studies
            for your projects. Simply follow our step-by-step guide.
          </Content>
          <Button to="/signup">Start free trial</Button>
        </ContentContainer>
        <Image src="page_img.png" alt="" />
      </Container>
    </StyledCta>
  )
}
