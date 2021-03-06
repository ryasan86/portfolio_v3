import React from 'react'

import './about.scss'
import SvgImage from '../svgs'

const AboutComponent: React.FC<{classNames: string}> = ({classNames}) => (
	<section className={`about ${classNames}`}>
		<div className='parallax-wrapper'>
			<div className='about__outer'>
				<div className='about__inner'>
					<div className='about__column about__column--left'>
						<h1 className='about__title'>About</h1>
						<div className='about__paragraph-container'>
							<p className='about__paragraph'>
								My name is Ryan Santos and I&apos;m a frontend developer, skater, pool player, and proud father of a
								chiweenie and french bulldog. I always aim to pursue interests that are meaningful to me and coding is
								one of the items on that list.
							</p>
							<p className='about__paragraph'>
								I haven&apos;t always been interested in software. My career background has actually been rooted in
								support and hardware. To me, it seemed like a path for the intellectually gifted and I never thought of
								myself the type.
							</p>
							<p className='about__paragraph'>
								While working as a hardware guy and as time passed, I was gradually exposed to the software side of
								things. I found development to be more my thing so I switched gears and started a new chapter in my life.
								Fast forward to today and now I&apos;m into all things development &amp; design!
							</p>
						</div>
					</div>
					<div className='about__column about__column--right'>
						<div className='about__illustration'>
							<SvgImage name='me' className='about__me' />
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
)

export default AboutComponent
