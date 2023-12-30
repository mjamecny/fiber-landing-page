import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledHero = styled.section`
  background-color: var(--color-violet-200);
  padding-bottom: 6.4rem;

  @media (min-width: 768px) {
    padding-top: 6.4rem;
  }
`

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding-inline: 2.4rem;

  display: grid;
  grid-template-columns: 1fr;
  gap: 2.4rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`

const Image = styled.img`
  width: 100%;

  @media (min-width: 768px) {
    grid-column: 2 / -1;
  }
`

const Content = styled.div`
  @media (min-width: 768px) {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }
`

const RatingContainer = styled.div`
  display: none;
  align-items: center;
  gap: 1.2rem;

  @media (min-width: 768px) {
    display: flex;
  }
`

const StarContainer = styled.div`
  display: flex;
  gap: 0.4rem;
`

const Heading = styled.h1`
  font-size: 3.6rem;
  color: var(--color-neutral-950);
  line-height: 1.2;
  margin-top: 1.2rem;

  @media (min-width: 768px) {
    width: 70%;
  }
`

const Description = styled.p`
  margin-top: 1.2rem;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-top: 1.2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 2.4rem;
  }
`

const Button = styled(Link)`
  font-weight: 700;
  border: none;
  border-radius: 5px;
  padding: 1.6rem 3.2rem;
  background-color: var(--color-indigo-700);
  color: var(--color-violet-50);
  text-align: center;
`

const ButtonLink = styled.a`
  font-weight: 700;
  text-align: center;
  color: var(--color-indigo-700);
  text-decoration: underline;
`

const RegisterList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 1.6rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const ListItem = styled.li`
  display: flex;
  gap: 0.8rem;
`

const ItemText = styled.p``

const CheckIcon = styled.img``

export default function Hero() {
  return (
    <StyledHero>
      <Container>
        <Image src="hero.png" alt="hero illustration" />
        <Content>
          <RatingContainer>
            <StarContainer>
              <img src="star.svg" alt="star icon" />
              <img src="star.svg" alt="star icon" />
              <img src="star.svg" alt="star icon" />
              <img src="star.svg" alt="star icon" />
              <img src="star.svg" alt="star icon" />
            </StarContainer>
            <p>Rated 4.8/5 (243 reviews)</p>
          </RatingContainer>
          <Heading>Create your portfolio in minutes</Heading>
          <Description>
            With Fiber, you can setup your own personal portfolio in minutes
            with dozens of premade, beautiful templates.
          </Description>
          <ButtonContainer>
            <Button to="/signup">Start free trial</Button>
            <ButtonLink href="#">View Examples</ButtonLink>
          </ButtonContainer>
          <RegisterList>
            <ListItem>
              <CheckIcon src="checkmark.svg" alt="checkmark icon" />
              <ItemText>No Credit Card Required</ItemText>
            </ListItem>
            <ListItem>
              <CheckIcon src="checkmark.svg" alt="checkmark icon" />
              <ItemText>10 Free Templates</ItemText>
            </ListItem>
          </RegisterList>
        </Content>
      </Container>
    </StyledHero>
  )
}
