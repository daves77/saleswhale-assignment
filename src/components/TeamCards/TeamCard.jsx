import React, { useContext } from 'react';
import { StarIcon, DotsVerticalIcon } from '@heroicons/react/outline';
import { ChatAlt2Icon, UsersIcon } from '@heroicons/react/solid';

import {
	Context,
	toggleFavoriteTeamAction,
	toggleArchiveTeamAction,
} from '../../store';
import {
	formatNumber,
	truncateDescriptionText,
	joinClasses,
} from '../../utils';
import useClickOutside from '../hooks/useClickOutside';

export default function TeamCards({ team }) {
	const { store, dispatch } = useContext(Context);
	const [isOpen, setIsOpen, dropdownRef] = useClickOutside();

	const handleToggleFavorite = (team) => {
		team.is_favorited = !team.is_favorited;
		dispatch(toggleFavoriteTeamAction(team));
	};

	const handleToggleArchive = (team) => {
		team.is_archived = !team.is_archived;
		dispatch(toggleArchiveTeamAction(team));
	};

	return (
		<div className='col-span-1'>
			<div
				className={joinClasses(
					'border rounded border-slate-200 h-full  cursor-pointer',
					team.is_archived ? 'bg-slate-100 ' : 'bg-white hover:border-primary'
				)}>
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
						<div className='ml-auto flex items-start'>
							<button onClick={() => handleToggleFavorite(team)}>
								<StarIcon
									className={joinClasses(
										'h-4 w-4 mt-0.5',
										team.is_favorited
											? 'fill-current text-yellow-400'
											: 'hover:fill-current text-slate-300 hover:text-yellow-400'
									)}
								/>
							</button>
							<div className='relative'>
								<button onClick={() => setIsOpen(!isOpen)}>
									<DotsVerticalIcon className='h-4 w-4 text-slate-300 hover:text-slate-500' />
								</button>
								{isOpen && (
									<div className='absolute right-0' ref={dropdownRef}>
										<div
											className='bg-white shadow-lg p-2 px-6 rounded hover:bg-slate-50'
											onClick={() => handleToggleArchive(team)}>
											<div className='text-slate-700'>
												{team.is_archived ? 'Unarchive' : 'Archive'}
											</div>
										</div>
									</div>
								)}
							</div>
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
