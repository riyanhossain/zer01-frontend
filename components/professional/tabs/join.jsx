import Codeofethics from '@/components/about/codeofethics'
import React from 'react'
import Contact from './join/contact'
import Intro from './join/intro'
import Postion from './join/postion'

export default function Join() {
  return (
    <React.Fragment>
        <Intro />

        <Postion />

        <Codeofethics />

        <Contact />

    </React.Fragment>
  )
}
