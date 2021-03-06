import React, {useState} from 'react'

import Maps from './maps'
import Icon from '../icons'
import {classList} from '../../utils'
import './contact.scss'

interface FieldProps {
	El: React.JSXElementConstructor<HTMLInputElement | HTMLTextAreaElement> | string
	props?: any
}

const fields: FieldProps[] = [
	{El: 'input', props: {name: 'name', placeholder: 'Name'}},
	{El: 'input', props: {name: 'email', placeholder: 'Email'}},
	{El: 'input', props: {name: 'subject', placeholder: 'Subject'}},
	{El: 'textarea', props: {name: 'message', placeholder: 'Message', rows: 3}}
]

interface Props {
	classNames: string
	sectionRef: React.RefObject<HTMLDivElement>
}

const ContactComponent: React.FC<Props> = (props) => {
	const [activeIdx, setActiveIdx] = useState<number | null>(null)
	const [state, setState] = useState<{[name: string]: string}>({name: '', email: '', subject: '', message: ''})

	const handleChange = (e: React.FormEvent): void => {
		e.persist()
		const target = e.target as HTMLInputElement | HTMLTextAreaElement

		setState((prev) => ({...prev, [target.name]: target.value}))
	}

	return (
		<section className={`contact ${props.classNames}`}>
			<div className='parallax-wrapper'>
				<div className='contact__inner'>
					<div className='contact__column contact__column--left'>
						<h1 className='contact__title'>Contact Me</h1>
						<p className='contact__paragraph'>
							I am interested in freelance, contract, and full time opportunities. I love being an active participant in
							cool and ambitious projects. But please feel free to contact me about whatever!
						</p>
						<form action='mailto:ryansantos86@gmail.com' method='post' encType='text/plain' className='contact__form'>
							{fields.map(({El, props}, i) => (
								<div
									key={i}
									className={classList({
										contact__field: true,
										active: i === activeIdx
									})}>
									<El
										{...props}
										type='text'
										value={state[props.name]}
										onFocus={() => setActiveIdx(i)}
										onBlur={() => setActiveIdx(null)}
										onChange={handleChange}
									/>
								</div>
							))}
							<button type='submit' className='contact__submit-btn'>
								<Icon name='send' />
							</button>
						</form>
					</div>
					<div className='contact__column contact__column--right'>
						<div className='contact__maps' ref={props.sectionRef}>
							<Maps markerIsShowing />
							<div className='contact__info'>
								<div className='contact__name'>Ryan Santos</div>
								<div className='contact__city'>Los Angeles</div>
								<div className='contact__email'>
									<span>@</span> ryansantos86@gmail.com
								</div>
								<Icon name='light-bulb' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ContactComponent
