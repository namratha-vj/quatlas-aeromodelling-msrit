/* eslint-disable react/jsx-key */
import { useId } from 'react'

import { Container } from '@/components/Container'
const points = [
  'The collegiate level competition, initiated in 1986, is a platform for students around the globe to showcase their abilities to solve engineering challenges within a given framework.',
  'The competition aims to provide exposure to students and simulate a real life work environment.',
  'It compresses a typical aircraft development program into one calendar year.',
  'It exposes participants to the nuances of conceptual design, manufacturing,system integration, testing and sell of through demonstration.',
]

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for building a portfolio"
      className="py-8 sm:py-10 bg-primary"
    >
      <Container>
        <h2 className="text-3xl font-medium tracking-tight text-white">
          About SAE Aerodesign
        </h2>
        <p className="text-md mt-2 text-gray-200">
          SAE Aerodesign is sponsored by Boeing , Lockheed Martin , ANSYS to
          name a few.
        </p>
        <ul
          role="list"
          className="mt-8 grid max-w-2xl list-disc grid-cols-1 gap-6 px-4 text-sm sm:mt-10 md:gap-y-3"
        >
          {points.map((points) => (
            <li className="font-semibold text-gray-100">{points}</li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
