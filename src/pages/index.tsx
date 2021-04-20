import React, { useState, createRef } from 'react'
import { throttle, delay } from 'lodash'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Loader from '../components/loader'
import Hero from '../components/hero'
import About from '../components/about'
import Skills from '../components/skills/index'
import Work from '../components/work'
import Contact from '../components/contact'
import Navbar from '../components/navbar'
import IconComponent from '../components/icons'
import { classList } from '../utils'
import '../home.scss'

interface ComponentInterface {
    component: React.ReactType
    componentRef?: React.RefObject<HTMLDivElement>
}

const googleMapsRef: React.RefObject<HTMLDivElement> = createRef()

export const sections = [
    { component: Hero },
    { component: About },
    { component: Skills },
    { component: Work },
    { component: Contact, componentRef: googleMapsRef }
]

const IndexPage: React.FC = () => {
    const [isTicking, setIsTicking] = useState(false)
    const [pageIdx, setPageIdx] = useState<number>(0)
    const totalSlideNumber = sections.length

    const parallaxScroll = throttle((e: any) => {
        if (googleMapsRef?.current?.contains(e.target)) return
        const isWheelingDown = -e.deltaY <= 0

        if (isWheelingDown && !isTicking) {
            setIsTicking(true)
            if (pageIdx !== totalSlideNumber - 1) scrollDown()
            delay(setIsTicking, 600, false)
        }

        if (!isWheelingDown && !isTicking) {
            setIsTicking(true)
            if (pageIdx !== 0) scrollUp()
            delay(setIsTicking, 600, false)
        }
    })

    const scrollDown = (pages: number = 1): void => {
        setPageIdx((prevIdx) => Math.min(totalSlideNumber - 1, prevIdx + pages))
    }

    const scrollUp = (pages: number = 1): void => {
        setPageIdx((prevIdx) => Math.max(0, prevIdx - pages))
    }

    const handleNavItemClick = (idx: number) => {
        if (idx > pageIdx) scrollDown(idx - pageIdx)
        if (idx < pageIdx) scrollUp(pageIdx - idx)
    }

    // prettier-ignore
    return (
        <Layout>
            <SEO title='Ryan Santos - Frontend Developer' />
            <Navbar
                scrollDown={scrollDown}
                scrollUp={scrollUp}
                pageIdx={pageIdx}
                handleNavItemClick={handleNavItemClick}
            />
            <Loader />
            <div className='sections-container' onWheel={parallaxScroll}>
                {sections.map((props: ComponentInterface, i) => (
                    <props.component
                        key={i}
                        componentRef={props.componentRef}
                        handlePageClick={handleNavItemClick}
                        classNames={classList({
                            'section': true,
                            'down-scroll': i <= pageIdx - 1,
                            'up-scroll': (i !== totalSlideNumber - 1) && (i >= pageIdx)
                        })}
                    />
                ))}
            </div>
            <div className='mobile-btn-group'>
                <button className='mobile-btn' onClick={() => scrollUp()}>
                    <IconComponent name='chevron-up' />
                </button>
                <button className='mobile-btn' onClick={() => scrollDown()}>
                    <IconComponent name='chevron-down' />
                </button>
            </div>
        </Layout>
    )
}

export default IndexPage
