import React from 'react';

import images from '../assets/images';
import {
	BellIcon,
	CalendarIcon,
	ChartBarIcon,
	FolderIcon,
	HomeIcon,
	InboxIcon,
	MenuAlt2Icon,
	UsersIcon,
	XIcon,
} from '@heroicons/react/solid';

const navigation = [
	{ name: 'message', icon: HomeIcon, current: false },
	{ name: 'teams', icon: UsersIcon, current: true },
	{ name: 'user', icon: InboxIcon, current: false },
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
					<div className='flex flex-col flex-1 mt-8'>
						<nav className=''>
							{navigation.map((el) => (
								<div className='hover:bg-secondary p-6'>
									<a href='/'>
										<el.icon className='h-8 w-8 text-white mx-auto' />
									</a>
								</div>
							))}
						</nav>
					</div>
				</div>
			</div>

			<div className='md:pl-20 flex flex-col flex-1'>{children}</div>
		</>
	);
}
