import Link from 'next/link'

import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'How do I know the tips are good?',
      answer:
        'Our whole business depends on our tips being good, so it’s in our best interest that they are. The results of our customers speak for themselves, just trust us.',
    },
    {
      question: 'Isn’t this insider trading?',
      answer:
        'Yes exactly. But at scale! Historically you could only make insider trades with knowledge from your direct network. Pocket brings you insider trading tips from people you don’t even know.',
    },
    {
      question: 'But isn’t insider trading illegal?',
      answer:
        'Here’s the thing: you’re the one doing the insider trading, not us. We’re just giving you the tips and some tools to make trades. We’re not doing anything wrong here.',
    },
  ],
  [
    {
      question: 'Do the people giving you tips realize what they are doing?',
      answer:
        'Again I would argue this isn’t really our responsibility. People make their own choices. If they don’t research the consequences that’s on them, not on us.',
    },
    {
      question: 'Where is Pocket based?',
      answer:
        'Let’s just say it’s not somewhere where the SEC is going to find us.',
    },
    {
      question: 'Is there any age limit to trading on Pocket?',
      answer:
        'For our free plan, the age limit is based on the minimum age to trade in your country of residence. Our VIP plan uses advanced transaction anonymization though, so you can use that plan even if you’re 9 years old. Or a dog.',
    },
  ],
  [
    {
      question: 'How did you get this on the App Store?',
      answer:
        'Honestly we were surprised too, but eventually we found out that the app reviewer found the app so compelling they approved it just so they could use it themselves.',
    },
    {
      question: 'How do I explain the money I withdraw from Pocket to the IRS?',
      answer:
        'This feels like one-hundred percent a you problem. Pocket is not responsible in any way for your tax returns.',
    },
    {
      question: 'How do I become an insider?',
      answer:
        'Contact us with some details about your industry and the type of access you have to apply for an insider account. Once approved, we’ll send you a guide on collecting insider information without being detected at work.',
    },
  ],
]

const aerodesign2018 = [
  'Ranked 7th in the flight rounds, with the first ever successful flight round in the history of the team.',
  'Total payload lifted - 7.25kgs / 16lbs, highest in Asia for the third round.',
  'Ranked 10th in the Oral Presentation.',
  'Bonus points in presentation for innovative fuselage design.',
]
const aerodesign2017 = [
  'Ranked 12th in the competition.',
  'Achieved second position in Asia.',
  'Implemented an elliptical wing for better performance.',
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="bg-primary py-5 sm:py-8"
    >
      <Container>
        <div className="max-w-4xl lg:mx-0">
          <h2 className="text-3xl font-medium tracking-tight text-gray-50">
            SAE Aerodesign 2018
          </h2>
          <p className="text-md mt-2 text-gray-100">
            The team consisted of 14 members from the branches of mechanical and
            electronics engineering. The aircraft was designed and built from
            scratch by the team members without any external guidance. The
            competiton was held at Van Nuys,CA,USA.
          </p>
        </div>
        <ul
          role="list"
          className="mt-5 grid max-w-2xl grid-cols-1 gap-4 sm:mt-10"
        >
          {aerodesign2018.map((faq, faqIndex) => (
            <li key={faqIndex}>
              <p className="lg:text-md text-sm text-gray-100">{faq}</p>
            </li>
          ))}
        </ul>
      </Container>
      <Container>
        <div className="mt-10 max-w-4xl border-t border-gray-50 pt-10 lg:mx-0">
          <h2 className="text-3xl font-medium tracking-tight text-gray-50">
            SAE Aerodesign 2017
          </h2>
          <p className="text-md mt-2 text-gray-100">
            The team consisted of 14 members from the branches of mechanical and
            electronics engineering. The aircraft was designed and built from
            scratch by the team members without any external guidance. The
            competiton was held at Van Nuys,CA,USA.
          </p>
        </div>
        <ul
          role="list"
          className="mt-5 grid max-w-2xl grid-cols-1 gap-4 sm:mt-10"
        >
          {aerodesign2017.map((faq, faqIndex) => (
            <li key={faqIndex}>
              <p className="lg:text-md text-sm text-gray-100">{faq}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
