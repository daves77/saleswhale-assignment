import React, { useState } from 'react';

import { MenuAlt2Icon } from '@heroicons/react/outline';

import ProfileAvatar from './ProfileAvatar';
import Messages from './Messages';

const user = {
	id: 4,
	name: 'John',
	avatar:
		'https://d1bb37ap2qun5z.cloudfront.net/profiles/profile_avatars/000/000/001/display/shimakaze-desu.jpg?1396709040',
	notifications_count: 5,
};

export default function Navbar({ setIsOpen }) {
	return (
		<div className='md:pl-20 border-b border-b-slate-200'>
			<div className='flex justify-between px-4 md:px-12 '>
				<div className='flex'>
					<div className=' border-r border-r-slate-200 flex justify-center items-center pr-4 md:pr-12 text-slate-500 text-lg'>
						<div className='hidden md:block'>NARWHAL</div>
						<button className='block md:hidden' onClick={() => setIsOpen(true)}>
							<MenuAlt2Icon className='h-8 w-8 text-slate-500 ' />
						</button>
					</div>
				</div>
				<div className='flex items-center justify-center py-4'>
					<Messages notifications={user.notifications_count} />
					<div className='mr-3'>
						<p className='text-slate-500 text-sm'>Hello, {user.name}</p>
					</div>
					<ProfileAvatar user={user} />
				</div>
			</div>
		</div>
	);
}
