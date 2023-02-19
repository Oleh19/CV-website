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
			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl pl-[20px]'>
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
					Something about myself Lorem ipsum dolor sit amet consectetur,
					adipisicing elit. Facere dolorum esse rem animi inventore eos ut
					quisquam odio eveniet aliquam assumenda laborum similique, totam
					nostrum impedit quam minus culpa veniam. Lorem ipsum, dolor sit amet
					consectetur adipisicing elit. Cumque inventore voluptatum ullam quia
					alias nulla, saepe dolore voluptate quisquam amet at aut fugit ab
					recusandae voluptatibus, veniam excepturi repellendus laudantium.
				</p>
			</div>
		</motion.div>
	)
}
