import { FC } from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { BackgroundCircles } from './BackgroundCircles'
import title from '../assets/image/title.jpg'
import { Link } from 'react-router-dom'

export const Hero: FC = () => {
	const [text, count] = useTypewriter({
		words: ["Hi, I'm Oleh", "I'm your best option"],
		loop: true,
		delaySpeed: 2000
	})

	return (
		<div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
			<BackgroundCircles />
			<img
				className='relative rounded-full h-32 w-32 mx-auto object-cover'
				src={title}
				alt='title'
			/>
			<div className='z-20'>
				<h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
					Frontend Developer
				</h2>
				<h1 className='text-5xl lg:text-6xl font-semibold px-10'>
					<span className='mr-3'>{text}</span>
					<Cursor cursorColor='red' />
				</h1>
				<div className='pt-5 content-between'>
					{/* <Link to='#about'> */}
					<button className='heroButton'>About</button>
					{/* </Link> */}
					{/* <Link to='#expirience'> */}
					<button className='heroButton'>Experience</button>
					{/* </Link> */}
					{/* <Link to='#skills'> */}
					<button className='heroButton'>Skills</button>
					{/* </Link>
					<Link to='#projects'> */}
					<button className='heroButton'>Projects</button>
					{/* </Link> */}
				</div>
			</div>
		</div>
	)
}
