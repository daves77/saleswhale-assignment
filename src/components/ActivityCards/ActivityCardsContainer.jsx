import React from 'react';
import ActivityCard from './ActivityCard';

export default function ActivityCardsContainer({ activities }) {
	return (
		<div className='bg-white'>
			<div className='flex justify-between items-center border-b border-slate-100 p-8 py-6'>
				<div>
					<h2 className='font-medium text-lg'>Activity</h2>
				</div>
			</div>
			<div className='flex flex-col p-8 py-6'>
				{activities.map((activity) => (
					<ActivityCard key={activity.id} activity={activity} />
				))}
			</div>
		</div>
	);
}
