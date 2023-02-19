import { motion } from 'framer-motion'
import { FC } from 'react'
import { Skill } from './Skill'
import react from '../../assets/image/React-icon.png'
import ts from '../../assets/image/ts.svg'
import js from '../../assets/image/js.png'
import tailwind from '../../assets/image/tailwind.png'
import redux from '../../assets/image/redux.png'
import sass from '../../assets/image/sass.png'
import html from '../../assets/image/html.webp'
import css from '../../assets/image/css.webp'

const icons = [react, ts, js, tailwind, redux, sass, html, css]

export const Skills: FC = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className=' flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center '
		>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl '>
				Skills
			</h3>

			<div className='grid xs:grid-cols-3 xs:gap-3 sm:grid-cols-4 sm:gap-5 '>
				{icons.map((icon, index) => (
					<Skill img={icon} key={index} />
				))}
			</div>
		</motion.div>
	)
}
