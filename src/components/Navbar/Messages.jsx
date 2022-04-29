import React from 'react';
import { InboxInIcon } from '@heroicons/react/outline';

export default function Messages({ notifications }) {
	return (
		<div className='mr-5 relative'>
			<button className='flex items-center'>
				<InboxInIcon className='h-6 w-6 text-slate-500' />
			</button>
			<div className='absolute -top-1 -right-1  h-3 w-3 rounded-full ring-2 ring-white bg-secondary flex items-center justify-center'>
				<span className='text-white z-20 text-xxs'>{notifications}</span>
			</div>
		</div>
	);
}
