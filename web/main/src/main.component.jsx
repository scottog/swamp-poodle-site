import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'

import AboutUs from './about/about.component'
import WhatWeDo from './whatWeDo/what-we-do.component'
const MainWrapper = (props) => {
  return (
    <>
      <CssBaseline />
      <Main props={props} />
    </>
  )
}

const Main = (props) => (
  <>
    <header></header>
    <div>
      <AboutUs />
      <WhatWeDo />
    </div>
  </>
)

export default MainWrapper
