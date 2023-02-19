import { motion } from 'framer-motion'
import  { FC } from 'react'

export const BackgroundCircles: FC = () => {
	return (
		<motion.div
			initial={{
				opacity: 0
			}}
			animate={{
				scale: [1, 2, 2, 3, 1],
				opacity: ['20%', '20%', '50%', '80%', '20%']
			}}
			transition={{
				duration: 2.5
			}}
			className='relative flex justify-center items-center'
		>
			<div className='absolute rounded-full border-2 border-white h-[650px] w-[650px] mt-52 animate-pulse' />
		</motion.div>
	)
}
