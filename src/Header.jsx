import { useState } from "react"
import { Link } from "react-router-dom"
import styled, { css } from "styled-components"

const StyledHeader = styled.header`
  background-color: var(--color-violet-200);
`

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 2.4rem;
  padding-top: 2.4rem;
`

const Logo = styled.p`
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-neutral-950);
`

const Hamburger = styled.img`
  cursor: pointer;
  z-index: 20;

  @media (min-width: 768px) {
    display: none;
  }
`

const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--color-violet-200);
  width: 100%;
  height: 100vh;
  ${({ isOpen }) => css`
    display: ${isOpen ? "flex" : "none"};
  `}
  flex-direction: column;
  align-items: center;
  gap: 4.8rem;
  padding-top: 9.6rem;

  @media (min-width: 768px) {
    display: flex;
    position: static;
    flex-direction: row;
    height: auto;
    width: auto;
    padding-top: 0;
  }
`

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const NavItem = styled.li``

const NavLink = styled.a`
  color: var(--color-neutral-950);
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 1.2rem;
`

const Button = styled(Link)`
  font-size: 1.4rem;
  font-weight: 500;
  border: none;
  border-radius: 4px;
  padding: 1.2rem 1.6rem;
  background-color: var(--color-indigo-700);
  color: var(--color-violet-50);

  ${({ type }) =>
    type === "transparent" &&
    `
    font-weight: 700;
    background-color: transparent;
    color: var(--color-neutral-950);
  `}
`

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <StyledHeader>
      <Container>
        <Logo>Fiber</Logo>
        <Nav isOpen={isOpen}>
          <NavList>
            <NavItem>
              <NavLink href="#">Community</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Pricing</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Features</NavLink>
            </NavItem>
          </NavList>
          <ButtonContainer>
            <Button type="transparent">Sign in</Button>
            <Button to="/signup">Sign up</Button>
          </ButtonContainer>
        </Nav>
        <Hamburger
          onClick={() => setIsOpen((prev) => !prev)}
          on
          src="hamburger.svg"
          alt="hamburger menu"
        />
      </Container>
    </StyledHeader>
  )
}
