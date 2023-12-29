import styled from "styled-components"

const StyledFeature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
`

const Icon = styled.img``

const Heading = styled.h3`
  font-size: 1.4rem;
`

const Description = styled.p``

export default function Feature({ feature }) {
  const { icon, title, description } = feature

  return (
    <StyledFeature>
      <Icon src={icon} alt={`${icon.split(".")[0]} icon`} />
      <Heading>{title}</Heading>
      <Description>{description}</Description>
    </StyledFeature>
  )
}
