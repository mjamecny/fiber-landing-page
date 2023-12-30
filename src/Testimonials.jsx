import styled from "styled-components"

import Testimonial from "./Testimonial"

const StyledTestimonials = styled.section`
  padding-bottom: 6.4rem;
`

const Container = styled.div`
  padding-inline: 2.4rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.4rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    padding-inline: 0;
  }
`

const testimonials = [
  {
    id: 1,
    avatar: "user-avatar-2.svg",
    name: "Sarah Andrews",
    content:
      "Setting up my portfolio with Fiber took no more than 10 minutes. Since then, my portfolio has attracted a lot of clients and made me more than $100k.",
    revenue: "100k",
  },
  {
    id: 2,
    avatar: "user-avatar.svg",
    name: "Matthew Higgins",
    content:
      "I have been getting A LOT of leads ever since I used Fiber's premade templates, now I just need to work on my case studies and I'll be ready to go!",
    revenue: "20k",
  },
  {
    id: 3,
    avatar: "user-avatar-3.svg",
    name: "Janice Dave",
    content:
      "I only just started freelancing this year and I have already made more than I ever made in my full-time job. The templates are just so amazing.",
    revenue: "30k",
  },
]

export default function Testimonials() {
  return (
    <StyledTestimonials>
      <Container>
        {testimonials.map((testimonial) => (
          <Testimonial key={testimonial.id} testimonial={testimonial} />
        ))}
      </Container>
    </StyledTestimonials>
  )
}
