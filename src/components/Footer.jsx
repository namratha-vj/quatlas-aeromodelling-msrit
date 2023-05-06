/* eslint-disable @next/next/no-img-element */
import Image from 'next/future/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { TextField } from '@/components/Fields'
import { Logomark } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
import qrCode from '@/images/qr-code.svg'

function QrCodeBorder(props) {
  return (
    <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
      <path
        d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-primary">
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pt-8 pb-6 lg:items-center lg:py-8">
          <div>
            <div className="flex items-center text-gray-900 justify-center">
              <img
                src="https://user-images.githubusercontent.com/94772842/236621312-1ea77d1c-c541-4a08-9264-10f3cf78c7ed.png"
                className="flex h-20 w-auto object-contain lg:h-16"
                alt="Quatlas Logo"
              />
              {/* <div className="ml-4">
                <p className="text-base font-semibold text-white">Quatlas</p>
                <p className="mt-1 text-sm text-white">Aeromodelling</p>
              </div> */}
            </div>
            <nav className="mt-11 flex gap-8">
              <NavLinks />
            </nav>
          </div>
        </div>
        <div className="flex flex-col items-center border-t border-gray-200 pt-8 pb-12 md:justify-between md:pt-6">
          <p className="mt-6 text-sm text-gray-400 md:mt-0">
            &copy; Copyright {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
