import styled from "styled-components"

const StyledTestimonial = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  border: 1px solid var(--color-slate-300);
  border-radius: 4px;
  padding: 2.4rem;
`

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`

const Avatar = styled.img``

const UserInfo = styled.div``

const Name = styled.p`
  color: var(--color-indigo-700);
  font-weight: 700;
`

const Revenue = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--color-neutral-950);
  line-height: 1.2;
`

const Content = styled.p`
  color: var(--color-neutral-950);
`

const Button = styled.button`
  border: 1px solid var(--color-slate-300);
  border-radius: 4px;
  background-color: transparent;
  color: var(--color-indigo-700);
  font-weight: 700;
  padding: 1.6rem 1.6rem;
  margin-top: auto;
`

export default function Testimonial({ testimonial }) {
  const { avatar, name, content, revenue } = testimonial

  return (
    <StyledTestimonial>
      <UserContainer>
        <Avatar src={avatar} alt={`avatar of ${name}`} />
        <UserInfo>
          <Name>{name}</Name>
          <Revenue>${revenue} in revenue</Revenue>
        </UserInfo>
      </UserContainer>
      <Content>{content}</Content>
      <Button>View {name.split(" ")[0]}'s Portfolio</Button>
    </StyledTestimonial>
  )
}
