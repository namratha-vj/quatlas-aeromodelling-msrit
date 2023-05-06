import { Fragment, useEffect, useId, useRef, useState } from 'react'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useDebouncedCallback } from 'use-debounce'

import { AppScreen } from '@/components/AppScreen'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'

export function PrimaryFeatures() {
  return (
    <section
      id="about"
      aria-label="Features for investing all your money"
      className="bg-primary py-10 sm:py-16"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
          <h2 className="text-3xl font-medium tracking-tight text-white">
            Introduction
          </h2>
          <p className="mt-2 text-lg text-gray-200">
            Quatlas is an official aeromodelling team of RIT. We participate in
            the SAE Aero Design Competition held at the USA annually. We are
            looking for motivated & talented students to recruit to the team &
            successfully represent our college in the competition. Come join us
            and learn more about what we do!
          </p>
        </div>
      </Container>
    </section>
  )
}
