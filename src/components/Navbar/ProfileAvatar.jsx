import React from 'react';

import useClickOutside from '../hooks/useClickOutside';

const menu = [
	{ name: 'Profile', href: '#' },
	{ name: 'Settings', href: '#' },
	{ name: 'Sign Out', href: '#' },
];

export default function ProfileAvatar({ user }) {
	const [isOpen, setIsOpen, dropdownRef] = useClickOutside();

	return (
		<div ref={dropdownRef} className='relative'>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className='bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary'>
				<img src={user.avatar} className='h-10 w-10 rounded-full' alt='' />
			</button>

			{isOpen && (
				<div className='absolute  right-0 z-10'>
					<div className='rounded-lg w-44 flex flex-col shadow-lg bg-white mt-2 '>
						{menu.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className='text-slate-500 w-full hover:bg-gray py-2 px-4 rounded-lg'>
								{item.name}
							</a>
						))}
					</div>
				</div>
			)}
		</div>
	);
}
