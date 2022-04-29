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
import useClickOutside from '../components/hooks/useClickOutside';

const navigation = [
	{ name: 'Messages', icon: ChatAlt2Icon, current: false },
	{ name: 'Teams', icon: OfficeBuildingIcon, current: true },
	{ name: 'User', icon: UsersIcon, current: false },
	{ name: 'Projects', icon: GlobeAltIcon, current: false },
];

export default function SidebarLayout({ children }) {
	const [isOpen, setIsOpen, sidebarRef] = useClickOutside();

	return (
		<>
			{/* mobile view of sidebar layout */}
			{isOpen && (
				<div ref={sidebarRef} className='inset-y-0 fixed bg-primary w-1/2 z-10'>
					<div className='p-6 '>
						<div className='flex items-center mb-8'>
							<img
								className='h-8 w-auto mr-3'
								src={images.NarwhaleIcon}
								alt='Narwhal'
							/>
							<h2 className='text-white text-2xl font-semibold'>Narhwal</h2>
						</div>
						<div className='flex flex-col'>
							<nav className=''>
								{navigation.map((el) => (
									<div
										key={el.name}
										className={joinClasses(
											'p-4 text-white rounded',
											el.current
												? 'bg-secondary'
												: 'hover:bg-secondary cursor-pointer'
										)}>
										<a href='/' className='flex items-center'>
											<el.icon
												className={joinClasses(
													'h-8 w-8 mr-2',
													el.current ? 'cursor-default' : 'opacity-30 '
												)}
											/>
											{el.name}
										</a>
									</div>
								))}
							</nav>
						</div>
					</div>
				</div>
			)}

			{/* desktop view of sidebar layout */}
			<div className='hidden md:flex md:w-20 md:flex-col md:fixed md:inset-y-0'>
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
			<Navbar setIsOpen={setIsOpen} />
			<div className='md:pl-20 flex flex-col flex-1'>{children}</div>
		</>
	);
}
