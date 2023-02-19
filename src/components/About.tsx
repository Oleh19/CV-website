import { motion } from 'framer-motion'
import { FC } from 'react'
import generalImg from '../assets/image/title.jpg'

export const About: FC = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className=' h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
		>
			<h3 className=' xs:opacity-0 sm:opacity-100 absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl pl-[20px]'>
				About
			</h3>

			<motion.img
				initial={{
					x: -200
				}}
				transition={{
					duration: 1.2
				}}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true }}
				src={generalImg}
				alt='title'
				className='-mb-20  md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[500px] mt-7'
			/>

			<div className='space-y-5 px-0 md:px-10 xs:pt-10 sm:pt-0 '>
				<h4 className='text-4xl font-semibold'>
					Here Is A <span className='underline decoration-red-500'>Little</span>{' '}
					Background
				</h4>
				<p className='sm:text-base xs:text-xs'>
					Frontend Developer with a ability to collaborate effectively with
					senior developers . Enjoy working closely with team members to enshure
					workloads are effectively redirected to bottleneck and personally
					picking up the sluck when nessesary. With a passion for both personal
					growth and for software development, I spend time for coding to learn
					new technology while sharpening existing skills. Ready to apply my
					passion for coding to a talanted engineering team to develop quality
					solutions.
				</p>
			</div>
		</motion.div>
	)
}
