import { FC } from 'react'
import { IconType } from 'react-icons/lib'

interface ExperienceCardProps {
	title: string
	employer: string
	icons: IconType[]
	startWork: number | string
	endWork: number | string
	responsibilites: string[]
}

export const ExperienceCard: FC<ExperienceCardProps> = ({
	title,
	employer,
	icons,
	startWork,
	endWork,
	responsibilites
}) => {
	return (
		<article className=' inline-flex overflow-hidden  rounded-l items-start space-y-7 flex-shrink-0 xs:w-[350px]  sm:w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] py-3 px-10 opacity-100 cursor-pointer transition-opacity duration-200 '>
			<div className='px-0 md:px-10'>
				<h4 className=' text-2xl md:text-4xl font-bold'>{title}</h4>
				<p className=' text-2xl mt-1'>{employer}</p>
				<div className='flex space-x-2 my-2'>
					{icons.map((Icon, index) => (
						<>
							<Icon className='h-8 w-8' key={index} />
						</>
					))}
				</div>
				<p className='uppercase py-5 text-gray-300'>
					started work: {startWork} - {endWork}
				</p>

				<ul className='list-disc space-y-4 ml-5 text-lg'>
					{responsibilites.map((resp, index) => (
						<li key={index}>{resp}</li>
					))}
				</ul>
			</div>
		</article>
	)
}
