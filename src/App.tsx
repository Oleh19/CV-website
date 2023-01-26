import { FC } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'

export const App: FC = () => {
	return (
		<div className='bg-main text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
			<Header />
			<section id='hero' className='snap-center'>
				<Hero />
			</section>
		</div>
	)
}
