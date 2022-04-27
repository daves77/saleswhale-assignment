import React from 'react';
import { StarIcon } from '@heroicons/react/outline';
import { ChatAlt2Icon, UsersIcon } from '@heroicons/react/solid';

import { formatNumber, truncateDescriptionText } from '../../utils';

export default function TeamCards({ team }) {
	return (
		<div className='col-span-1'>
			<div className='border rounded border-slate-200 h-full'>
				<div className='border-b-slate-200 border-b p-4'>
					<div className='flex gap-3 h-full'>
						<div className=' h-9 w-9'>
							<img className='rounded' src={team.image} alt={team.name} />
						</div>
						<div className='flex flex-col'>
							{team.name}
							<div className='text-xs leading-none text-slate-400 font-light'>
								Created {team.created_at}
							</div>
						</div>
						<div className='ml-auto'>
							<StarIcon className='h-4 w-4 hover:fill-current text-slate-300 hover:text-yellow-400' />
						</div>
					</div>
					<div className='mt-4'>
						<p className='text-slate-500 text-sm'>
							{truncateDescriptionText(team.description)}
						</p>
					</div>
				</div>
				<div className='flex p-4 gap-4 items-center text-xs text-slate-400 font-light max-h-14'>
					<div className='flex items-center'>
						<ChatAlt2Icon className='h-5 w-5 mr-1' />
						<p>{team.campaigns_count} Campaigns</p>
					</div>
					<div className='flex items-center '>
						<UsersIcon className='h-5 w-5 mr-1' />
						<p>{formatNumber(team.leads_count)} Leads</p>
					</div>
				</div>
			</div>
		</div>
	);
}
