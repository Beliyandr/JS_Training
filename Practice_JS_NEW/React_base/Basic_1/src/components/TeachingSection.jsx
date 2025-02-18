import React from 'react'
import { WayToTeach } from './WayToTeach'
import { ways } from '../data'

export const TeachingSection = () => {
  return (
    <section>
      <h3>Наше преимущество</h3>
      <ul>
        {ways.map((way) => <WayToTeach key={way.title} {...way} />)}
      </ul>
    </section>
  )
}
