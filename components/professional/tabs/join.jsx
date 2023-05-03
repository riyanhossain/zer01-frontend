import Codeofethics from '@/components/about/codeofethics'
import React from 'react'
import Contact from './join/contact'
import Intro from './join/intro'
import Position from './join/position'

export default function Join() {
  return (
    <React.Fragment>
        <Intro />

        <Position />

        <Codeofethics />

        <Contact />

    </React.Fragment>
  )
}
