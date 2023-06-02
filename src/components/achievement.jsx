import Link from 'next/link'

import { Container } from '@/components/Container'

const aerodesign2022 = [
  'Ranked 9th place overall.',
  '1st in Asia.',
  '2nd in technical design report.',
]
const aerodesign2021 = [
  'Ranked 10th in overall standings.',
  'Ranked 6th in technical design report.',
]
const aerodesign2020 = [
  '8th overall standings.',
  '4th place in technical presentation.',
]
const aerodesign2019 = ['5th overall standing.']

export function Achievement() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="bg-primary py-5 sm:py-8"
    >
      <Container>
        <div className="max-w-4xl lg:mx-0">
          <h2 className="text-3xl font-medium tracking-tight text-gray-50">
            SAE Aero Design West 2022
          </h2>
          <p className="text-md mt-2 text-gray-100"></p>
        </div>
        <ul
          role="list"
          className="mt-5 grid max-w-2xl grid-cols-1 gap-4 sm:mt-10"
        >
          {aerodesign2022.map((faq, faqIndex) => (
            <li key={faqIndex}>
              <p className="lg:text-md text-sm text-gray-100">{faq}</p>
            </li>
          ))}
        </ul>
      </Container>
      <Container>
        <div className="mt-10 max-w-4xl border-t border-gray-50 pt-10 lg:mx-0">
          <h2 className="text-3xl font-medium tracking-tight text-gray-50">
            SAE Aero Design West 2021
          </h2>
          <p className="text-md mt-2 text-gray-100"></p>
        </div>
        <ul
          role="list"
          className="mt-5 grid max-w-2xl grid-cols-1 gap-4 sm:mt-10"
        >
          {aerodesign2021.map((faq, faqIndex) => (
            <li key={faqIndex}>
              <p className="lg:text-md text-sm text-gray-100">{faq}</p>
            </li>
          ))}
        </ul>
      </Container>
      <Container>
        <div className="mt-10 max-w-4xl border-t border-gray-50 pt-10 lg:mx-0">
          <h2 className="text-3xl font-medium tracking-tight text-gray-50">
            SAE Aero Design 2020
          </h2>
          <p className="text-md mt-2 text-gray-100"></p>
        </div>
        <ul
          role="list"
          className="mt-5 grid max-w-2xl grid-cols-1 gap-4 sm:mt-10"
        >
          {aerodesign2020.map((faq, faqIndex) => (
            <li key={faqIndex}>
              <p className="lg:text-md text-sm text-gray-100">{faq}</p>
            </li>
          ))}
        </ul>
      </Container>
      <Container>
        <div className="mt-10 max-w-4xl border-t border-gray-50 pt-10 lg:mx-0">
          <h2 className="text-3xl font-medium tracking-tight text-gray-50">
            SAE Aero Design 2019
          </h2>
          <p className="text-md mt-2 text-gray-100"></p>
        </div>
        <ul
          role="list"
          className="mt-5 grid max-w-2xl grid-cols-1 gap-4 sm:mt-10"
        >
          {aerodesign2019.map((faq, faqIndex) => (
            <li key={faqIndex}>
              <p className="lg:text-md text-sm text-gray-100">{faq}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
