import React from 'react';

import {
	OfficeBuildingIcon,
	UsersIcon,
	ChatAlt2Icon,
	GlobeAltIcon,
	QuestionMarkCircleIcon,
} from '@heroicons/react/solid';

import images from '../assets/images';
import Navbar from '../components/Navbar/Navbar';

import { joinClasses } from '../utils';

const navigation = [
	{ name: 'message', icon: ChatAlt2Icon, current: false },
	{ name: 'teams', icon: OfficeBuildingIcon, current: true },
	{ name: 'user', icon: UsersIcon, current: false },
	{ name: 'globe', icon: GlobeAltIcon, current: false },
];

export default function SidebarLayout({ children }) {
	return (
		<>
			<div className='md:flex md:w-20 md:flex-col md:fixed md:inset-y-0'>
				<div className='flex flex-col flex-grow pt-5 bg-primary overflow-y-auto'>
					<div className='px-4'>
						<img
							className='h-8 w-auto mx-auto'
							src={images.NarwhaleIcon}
							alt='Narwhal'
						/>
					</div>
					<div className='flex flex-col justify-between flex-1 mt-8'>
						<nav className=''>
							{navigation.map((el) => (
								<div
									key={el.name}
									className={joinClasses(
										'p-6 text-white',
										el.current
											? 'bg-secondary'
											: 'hover:bg-secondary cursor-pointer'
									)}>
									<a href='/'>
										<el.icon
											className={joinClasses(
												'h-8 w-8  mx-auto',
												el.current ? 'cursor-default' : 'opacity-30 '
											)}
										/>
									</a>
								</div>
							))}
						</nav>
						<a href='/' className='mb-8'>
							<QuestionMarkCircleIcon className='h-8 w-8 text-white opacity-30 mx-auto' />
						</a>
					</div>
				</div>
			</div>
			<Navbar />
			<div className='md:pl-20 flex flex-col flex-1'>{children}</div>
		</>
	);
}
