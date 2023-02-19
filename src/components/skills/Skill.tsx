import { motion } from 'framer-motion'
import { FC } from 'react'


type Props = {
	directionLeft?: boolean
	img: string
}

export const Skill: FC<Props> = ({directionLeft, img}) => {
	return (
		<div className='group relative flex cursor-pointer '>
			<motion.img
				initial={{
					x: directionLeft ? -200 : 200
				}}
				transition={{ duration: 1 }}
				whileInView={{ opacity: 1, x: 0 }}
				src={img}
				className=' rounded-full border border-gray-500 object-cover xs:w-16 xs:h-16 sm:w-24 sm:h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out  '
			/>
		</div>
	)
}
