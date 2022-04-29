import React from 'react';

import TeamCard from './TeamCard';

export default function TeamCardsContainer({ teams }) {
	return (
		<div className='bg-white shadow-lg'>
			<div className='flex justify-between items-center border-b border-slate-100 p-3 md:p-8 py-6'>
				<div>
					<h2 className='font-medium text-lg'>All Teams</h2>
				</div>
				<div className='text-xs font-light text-slate-400'>
					Showing {teams.length} out of {teams.length} teams
				</div>
			</div>
			<div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  p-3 md:p-8 gap-4'>
				{/* cards */}
				{teams.map((team) => (
					<TeamCard key={team.name} team={team} />
				))}
			</div>
		</div>
	);
}
