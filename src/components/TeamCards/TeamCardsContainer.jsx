import React from 'react';

import TeamCard from './TeamCard';

export default function TeamCardsContainer({ teams }) {
	return (
		<div className='bg-white'>
			<div className='flex justify-between items-center border-b border-slate-100 p-4'>
				<div>
					<h2 className='font-medium text-lg'>All Teams</h2>
				</div>
				<div className='text-xs font-light text-slate-400'>
					Showing 65 out of 65 teams
				</div>
			</div>
			<div className='grid grid-cols-3 p-4 gap-4'>
				{/* cards */}
				{teams.map((team) => (
					<TeamCard key={team.name} team={team} />
				))}
			</div>
		</div>
	);
}
