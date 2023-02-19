import { FC } from 'react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Header } from './components/Header'
import { Hero } from './components/hero/Hero'
import { Projects } from './components/Projects'
import { Skills } from './components/skills/Skills'
import { WorkExperience } from './components/workExperience/WorkExperience'
import { SlArrowUp } from 'react-icons/sl'

export const App: FC = () => {
	return (
		<div className='bg-main text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-red-500 '>
			<Header />
			<section id='hero' className='snap-center'>
				<Hero />
			</section>
			<section id='about' className='snap-center'>
				<About />
			</section>
			<section id='experience' className='snap-center'>
				<WorkExperience />
			</section>
			<section id='skills' className='snap-start'>
				<Skills />
			</section>
			<section id='projects' className='snap-start'>
				<Projects />
			</section>
			<section id='contact' className='snap-start'>
				<Contact />
			</section>

			<a href='#hero'>
				<footer className='sticky bottom-5 w-full cursor-pointer'>
					<div className='flex items-center justify-center'>
						<SlArrowUp className=' h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer ' />
					</div>
				</footer>
			</a>
		</div>
	)
}
