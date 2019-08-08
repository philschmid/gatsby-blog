import React, { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import Sticky from 'react-stickynode'
import { DrawerProvider } from '../components/common/DrawerContext'
import { portfolioTheme } from '../assets/theme/index'
import { ResetCSS } from '../assets/css/style'
import { GlobalStyle, ContentWrapper } from '../container/container.style'

import BannerSection from '../container/Banner'
import Navbar from '../container/Navbar'
import AwardsSection from '../container/Awards'
import PortfolioShowcase from '../container/PortfolioShowcase'
import ProcessSection from '../container/Process'
import SkillSection from '../container/Skill'
import CallToAction from '../container/CallToAction'
import TestimonialSection from '../container/Testimonial'
import ClientsSection from '../container/Clients'
import ContactSection from '../container/Contact'
import Footer from '../container/Footer'
import SEO from '../container/seo'

export default () => {
  return (
    <ThemeProvider theme={portfolioTheme}>
      <Fragment>
        <SEO title="Portfolio | A react next landing page" />
        <ResetCSS />
        <GlobalStyle />

        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSection />
          <PortfolioShowcase />
          <AwardsSection />
          <ProcessSection />
          <SkillSection />
          <CallToAction />
          <TestimonialSection />
          <ClientsSection />
          <ContactSection />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  )
}
