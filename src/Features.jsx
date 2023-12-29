import styled from "styled-components"

import Feature from "./Feature"

const StyledFeatures = styled.section``

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 6.4rem 2.4rem;
`

const SubHeading = styled.h3`
  font-size: 1.6rem;
  color: var(--color-indigo-700);
`

const Heading = styled.h2`
  font-size: 3.2rem;
  line-height: 1.3;

  @media (min-width: 768px) {
    width: 50%;
  }
`

const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3.2rem;
  margin-top: 4.8rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const features = [
  {
    icon: "time.svg",
    title: "Build in minutes",
    description:
      "With a selection of premade templates, you can build out a portfolio in less than 10 minutes.",
  },
  {
    icon: "code.svg",
    title: "Add custom CSS",
    description:
      "Customize your personal portfolio even more with the ability to add your own custom CSS styles.",
  },
  {
    icon: "responsive.svg",
    title: "Responsive",
    description:
      "All Fiber templates are fully responsive to ensure the experience is seemless across all devices.",
  },
]

export default function Features() {
  return (
    <StyledFeatures>
      <Container>
        <SubHeading>Why Fiber?</SubHeading>
        <Heading>A good portfolio means good employability</Heading>
        <FeaturesContainer>
          {features.map((feature, index) => (
            <Feature key={index} feature={feature} />
          ))}
        </FeaturesContainer>
      </Container>
    </StyledFeatures>
  )
}
