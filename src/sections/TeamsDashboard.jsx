import React, { useState, useEffect, useContext } from 'react';
import {
	OfficeBuildingIcon,
	PlusIcon,
	SearchIcon,
} from '@heroicons/react/solid';

import TeamCardsContainer from '../components/TeamCards/TeamCardsContainer';
import ActivityCardsContainer from '../components/ActivityCards/ActivityCardsContainer';
import { joinClasses } from '../utils';
import { Context } from '../store';

const tabsDefault = [
	{ id: 1, name: 'All', ref: 'all' },
	{ id: 2, name: 'Favorites', ref: 'favorites' },
	{ id: 3, name: 'Archived', ref: 'archived' },
];

export default function TeamsDashboard() {
	const [currTab, setCurrTab] = useState('all');
	const [currTeams, setCurrTeams] = useState([]);

	const { store } = useContext(Context);
	useEffect(() => {
		let teams = store.teams;
		switch (currTab) {
			case 'all':
				break;
			case 'favorites':
				teams = teams.filter((team) => team.is_favorited);
				break;
			case 'archived':
				teams = teams.filter((team) => team.is_archived);
				break;
			default:
				break;
		}
		setCurrTeams(teams);
	}, [currTab, store.teams]);

	return (
		<>
			<div className='bg-white px-4 md:px-12'>
				<div className='flex justify-between items-center py-8'>
					<div className='flex items-center justify-between'>
						<OfficeBuildingIcon className=' text-slate-400 sm:h-12 sm:w-12 h-8 w-8' />
						<h2 className='text-2xl sm:text-4xl'>Teams</h2>
					</div>
					<div>
						<button className='p-2 flex items-center text-xs sm:text-sm text-white rounded bg-success hover:bg-teal-700'>
							<PlusIcon className='h-4 w-4 sm:h-6 sm:w-6 sm:mr-4 mr-1' />
							CREATE NEW TEAM
						</button>
					</div>
				</div>
				<div className='flex items-center md:justify-between flex-col md:flex-row'>
					<div className='flex'>
						{tabsDefault.map((tab) => (
							<div
								key={tab.id}
								onClick={() => setCurrTab(tab.ref)}
								className={joinClasses(
									'px-3 py-1 border-b-2 mr-1',
									tab.ref === currTab
										? 'text-secondary border-secondary'
										: 'hover:border-secondary hover:text-secondary border-transparent cursor-pointer'
								)}>
								{tab.name}
							</div>
						))}
					</div>
					<div className='relative my-6 md:my-0'>
						<div className='absolute -left-6 bottom-0.5  pointer-events-none'>
							<SearchIcon className='h-5 w-5 text-slate-400' />
						</div>
						<input
							type='text'
							placeholder='Search team name'
							className='focus:outline-none'
						/>
					</div>
				</div>
			</div>
			<div className=''>
				<div className='grid grid-cols-1 xl:grid-cols-12 gap-8 p-4 md:p-12'>
					<div className='col-span-1 xl:col-span-9'>
						<TeamCardsContainer teams={currTeams} />
					</div>
					<div className='col-span-1 xl:col-span-3'>
						<ActivityCardsContainer activities={store.activities} />
					</div>
				</div>
			</div>
		</>
	);
}
