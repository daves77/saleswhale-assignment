import React, { useState, useEffect } from 'react';
import {
	OfficeBuildingIcon,
	PlusIcon,
	SearchIcon,
} from '@heroicons/react/solid';

import TeamCardsContainer from '../components/TeamCards/TeamCardsContainer';
import ActivityCardsContainer from '../components/ActivityCards/ActivityCardsContainer';
import { joinClasses } from '../utils';

const response = {
	teams: [
		{
			id: 1,
			name: 'Axa',
			image:
				'https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/966/twitter/wataten-avatar.jpg?1546777130',
			description:
				'AXA is a French multinational insurance firm headquartered in the 8th random place and random time etc',
			campaigns_count: 20,
			leads_count: 1500,
			is_favorited: true,
			is_archived: false,
			created_at: '28 July 2018',
		},
		{
			id: 2,
			name: 'Indeed - US',
			image:
				'https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/970/twitter/shield-hero-avatar.jpg?1546779870',
			description:
				'Indeed is an American worldwide employment-related search engine for job stuff and other random stuff',
			campaigns_count: 15,
			leads_count: 7130,
			is_favorited: false,
			is_archived: false,
			created_at: '15 October 2018',
		},
		{
			id: 3,
			name: 'Indeed - EU',
			image:
				'https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/970/twitter/shield-hero-avatar.jpg?1546779870',
			description:
				'Indeed is an American worldwide employment-related search engine for job stuff and other random stuff',
			campaigns_count: 18,
			leads_count: 3500,
			is_favorited: false,
			is_archived: false,
			created_at: '1 October 2018',
		},
		{
			id: 4,
			name: 'Workday - US',
			image:
				'https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/908/twitter/tensura-avatar.png?1538236957',
			description:
				'Workday Inc is an on demand financial management and human capital management something とかなんとか',
			campaigns_count: 16,
			leads_count: 2000,
			is_favorited: false,
			is_archived: false,
		},
		,
		{
			id: 5,
			name: 'Workday - AU',
			image:
				'https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/908/twitter/tensura-avatar.png?1538236957',
			description:
				'Workday Inc is an on demand financial management and human capital management something とかなんとか',
			campaigns_count: 12,
			leads_count: 1500,
			is_favorited: false,
			is_archived: false,
		},
		{
			id: 6,
			name: 'Time',
			image:
				'https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/979/twitter/5-hanayome-avatar.jpg?1547281143',
			description:
				'Time is an American weekly news magazine and new website published in New York and like a bunch of other places and stuff',
			campaigns_count: 13,
			leads_count: 10000,
			is_favorited: true,
			is_archived: false,
		},
		{
			id: 7,
			name: 'Zendesk',
			image:
				'https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/924/twitter/uzamaid-avatar.png?1538475352',
			description:
				'Zendesk Inc is a customer service software company headquartered in San Francisco and they do things I guess',
			campaigns_count: 17,
			leads_count: 1200,
			is_favorited: true,
			is_archived: false,
		},
		{
			id: 8,
			name: 'Uber',
			image:
				'https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/965/twitter/kemono-friends-2-avatar.jpg?1546501240',
			description:
				'Uber is a transportation network company headquartered in San Francisco, California. They drive people around I guess',
			campaigns_count: 10,
			leads_count: 3200,
			is_favorited: false,
			is_archived: true,
		},
		{
			id: 9,
			name: 'Grab',
			image:
				'https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/895/twitter/revue-starlight-a.png?1531195655',
			description:
				'GrabTaxi Holdings Pte Ltd is a Singapore-based technology company that offers rides and other stuff but mostly rides to people',
			campaigns_count: 23,
			leads_count: 2000,
			is_favorited: false,
			is_archived: true,
		},
	],
	activities: [
		{
			id: 1,
			person: {
				id: 1,
				name: 'Julie',
				avatar:
					'https://d1bb37ap2qun5z.cloudfront.net/profiles/profile_avatars/000/000/003/display/tamako200x200b.png?1393742139',
			},
			action: 'increased_quota',
			target: 'Indeed - US',
			created_at: '2 hours ago',
		},
		{
			id: 2,
			person: {
				id: 2,
				name: 'Emily',
				avatar:
					'https://d1bb37ap2qun5z.cloudfront.net/sites/default_user_avatars/000/000/002/display/nicdesu.jpg?1394032656',
			},
			action: 'added_leads',
			target: 'Linkedin',
			created_at: '4 hours ago',
		},
		{
			id: 3,
			person: {
				id: 2,
				name: 'Emily',
				avatar:
					'https://d1bb37ap2qun5z.cloudfront.net/sites/default_user_avatars/000/000/002/display/nicdesu.jpg?1394032656',
			},
			action: 'archived_team',
			target: 'Uber',
			created_at: '2 hours ago',
		},
		{
			id: 4,
			person: {
				id: 1,
				name: 'Julie',
				avatar:
					'https://d1bb37ap2qun5z.cloudfront.net/profiles/profile_avatars/000/000/003/display/tamako200x200b.png?1393742139',
			},
			action: 'archived_team',
			target: 'Grab',
			created_at: '6 hours ago',
		},
		{
			id: 5,
			person: {
				id: 1,
				name: 'Julie',
				avatar:
					'https://d1bb37ap2qun5z.cloudfront.net/profiles/profile_avatars/000/000/003/display/tamako200x200b.png?1393742139',
			},
			action: 'added_leads',
			target: 'Workday - AU',
			created_at: '2 hours ago',
		},
	],
	current_user: {
		id: 4,
		name: 'John',
		avatar:
			'https://d1bb37ap2qun5z.cloudfront.net/profiles/profile_avatars/000/000/001/display/shimakaze-desu.jpg?1396709040',
		notifications_count: 5,
	},
};

const tabsDefault = [
	{ id: 1, name: 'All', ref: 'all' },
	{ id: 2, name: 'Favorites', ref: 'favorites' },
	{ id: 3, name: 'Archived', ref: 'archived' },
];

export default function TeamsDashboard() {
	const [currTab, setCurrTab] = useState('all');
	const [currTeams, setCurrTeams] = useState([]);

	useEffect(() => {
		let teams = response.teams;
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
	}, [currTab]);

	return (
		<div>
			<div className='bg-gray h-screen'>
				<div className='bg-white px-12'>
					<div className='flex justify-between items-center py-8'>
						<div className='flex items-center '>
							<OfficeBuildingIcon className=' text-slate-400 h-12 w-12 mr-2' />
							<h2 className='text-4xl'>Teams</h2>
						</div>
						<div>
							<button className='px-2 py-1 flex items-center text-sm text-white rounded bg-success'>
								<PlusIcon className='h-8 w-8 mr-4' />
								CREATE NEW TEAM
							</button>
						</div>
					</div>
					<div className='flex justify-between'>
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
						<div className='relative'>
							<div className='absolute -left-6 bottom-3  pointer-events-none'>
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
					<div className='grid grid-cols-1 md:grid-cols-12 gap-8 p-12'>
						<div className='col-span-9'>
							<TeamCardsContainer teams={currTeams} />
						</div>
						<div className='col-span-3'>
							<ActivityCardsContainer activities={response.activities} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
