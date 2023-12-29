import styled from "styled-components"

const StyledFooter = styled.footer`
  background-color: var(--color-violet-200);
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.4rem;
  max-width: 120rem;
  margin: 0 auto;
  padding: 6.4rem 2.4rem;

  @media (min-width: 768px) {
    grid-template-columns: 2fr repeat(4, 1fr);
  }
`

const Heading = styled.h3`
  color: var(--color-neutral-950);
`

const Content = styled.p``

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

const NavItem = styled.li``

const NavLink = styled.a`
  color: var(--color-neutral-600);
`

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <div>
          <Heading>Fiber</Heading>
          <Content>
            With Fiber, you can setup your own personal portfolio in minutes
            with dozens of premade, beautiful templates.
            <br />
            <br />
            Made with ❤️ in the Netherlands.
          </Content>
        </div>
        <Nav>
          <Heading>Sitemap</Heading>
          <NavList>
            <NavItem>
              <NavLink href="#">Homepage</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Pricing</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Testimonials</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Features</NavLink>
            </NavItem>
          </NavList>
        </Nav>
        <Nav>
          <Heading>Resources</Heading>
          <NavList>
            <NavItem>
              <NavLink href="#">Support</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">FAQ</NavLink>
            </NavItem>
          </NavList>
        </Nav>
        <Nav>
          <Heading>Company</Heading>
          <NavList>
            <NavItem>
              <NavLink href="#">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Customers</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Blog</NavLink>
            </NavItem>
          </NavList>
        </Nav>
        <Nav>
          <Heading>Portfolios</Heading>
          <NavList>
            <NavItem>
              <NavLink href="#">Sarah Andrews</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Mathew Higgins</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Janice Dave</NavLink>
            </NavItem>
          </NavList>
        </Nav>
      </Container>
    </StyledFooter>
  )
}
