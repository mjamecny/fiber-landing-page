import { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledSignup = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  padding-block: 6.4rem;
  height: 100vh;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding-block: 0;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding-inline: 2.4rem;

  @media (min-width: 768px) {
    justify-self: center;
    align-self: center;
  }
`

const Logo = styled.p`
  font-weight: 700;
  color: var(--color-neutral-950);
`

const Heading = styled.h2`
  ${({ type }) =>
    type === "white"
      ? `color: var(--color-indigo-50);`
      : `color: var(--color-neutral-950);`}

  font-size: 3rem;
  line-height: 1.2;

  ${({ type }) => type === "white" && `text-align: center;`}
`

const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  ${({ type }) =>
    type === "horizontal" &&
    `flex-direction: row; gap: 0.8rem; align-items: flex-start;`}
`

const Label = styled.label`
  font-size: 1.4rem;
  font-weight: 700;
  ${({ type }) => type === "thin" && `font-weight: 400;`}
  color: var(--color-neutral-950);
`

const Input = styled.input`
  border: 1px solid var(--color-slate-300);
  border-radius: 4px;
  padding: 0.8rem;
  width: 100%;

  &::placeholder {
    color: var(--color-slate-300);
  }

  &:focus {
    outline: 1px solid var(--color-indigo-700);
  }
`

const InputContainer = styled.div`
  position: relative;
`

const EyeIcon = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  cursor: pointer;
`

const StyledLink = styled(Link)`
  font-weight: 700;
  text-decoration: underline;
  color: var(--color-indigo-700);
  text-align: center;

  ${({ type }) => type === "thin" && `font-weight: 400 text-decoration: none;`}
`

const Button = styled.button`
  font-weight: 700;
  border: none;
  border-radius: 5px;
  padding: 1.6rem 3.2rem;
  background-color: var(--color-indigo-700);
  color: var(--color-violet-50);
`

const Text = styled.p`
  font-size: 1.4rem;
  color: var(--color-neutral-950);
  text-align: center;
`

const IllustrationDiv = styled.div`
  display: none;
  background-color: var(--color-indigo-700);

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

const IllustrationContainer = styled.div`
  padding-inline: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @media (min-width: 768px) {
    padding-inline: 8rem;
  }
`

const Illustration = styled.img`
  width: 100%;
`

const IllustrationText = styled.p`
  color: var(--color-indigo-50);
  text-align: center;
  font-weight: 400;
`

const IllustrationContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <StyledSignup>
      <Form>
        <Logo>Fiber</Logo>
        <Heading>Create your Fiber account</Heading>
        <FormRow>
          <Label htmlFor="">Your Name</Label>
          <Input type="text" placeholder="John Doe" />
        </FormRow>
        <FormRow>
          <Label htmlFor="">E-mail</Label>
          <Input type="email" placeholder="john@example.com" />
        </FormRow>
        <FormRow>
          <Label htmlFor="">Password</Label>
          <InputContainer>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="At least 8 characters"
              minLength="8"
            />
            <EyeIcon
              onClick={() => setShowPassword((prev) => !prev)}
              src="hide-password.svg"
              alt="eye icon"
            />
          </InputContainer>
        </FormRow>
        <FormRow type="horizontal">
          <input type="checkbox" />
          <Label type="thin" htmlFor="">
            By creating an account on Fiber, you agree to the{" "}
            <StyledLink href="#">Terms & Conditions</StyledLink>
          </Label>
        </FormRow>
        <Button>Create Fiber Account</Button>
        <Text>
          Already have an account?{" "}
          <StyledLink type="thin" href="#">
            Sign in
          </StyledLink>
        </Text>
        <StyledLink to="/">Back to Home</StyledLink>
      </Form>
      <IllustrationDiv>
        <IllustrationContainer>
          <Illustration src="sign-up.png" alt="sign up illustration" />
          <IllustrationContent>
            <Heading type="white">Unparalleled Templates</Heading>
            <IllustrationText>
              Crafted by a team of professional designers, our templates are
              eunparalleled in the market.
            </IllustrationText>
          </IllustrationContent>
        </IllustrationContainer>
      </IllustrationDiv>
    </StyledSignup>
  )
}
