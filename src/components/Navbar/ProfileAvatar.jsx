import React from 'react';

import useClickOutside from '../hooks/useClickOutside';

const user = {
	id: 4,
	name: 'John',
	avatar:
		'https://d1bb37ap2qun5z.cloudfront.net/profiles/profile_avatars/000/000/001/display/shimakaze-desu.jpg?1396709040',
	notifications_count: 5,
};

const menu = [
	{ name: 'Profile', href: '#' },
	{ name: 'Settings', href: '#' },
	{ name: 'Sign Out', href: '#' },
];

export default function ProfileAvatar() {
	const [open, setOpen, dropdownRef] = useClickOutside();

	return (
		<div ref={dropdownRef} className='relative'>
			<button
				onClick={() => setOpen(!open)}
				className='bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary'>
				<img src={user.avatar} className='h-10 w-10 rounded-full' alt='' />
			</button>

			{open && (
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
