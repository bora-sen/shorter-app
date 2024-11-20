import React from 'react'
import * as Section from './Components'

function HomePage() {
  return (
    <Section.Layout>
      <Section.Hero />
      <Section.LinkShorten />
      <Section.Features />
      <Section.Band />
    </Section.Layout>
  )
}

export default HomePage