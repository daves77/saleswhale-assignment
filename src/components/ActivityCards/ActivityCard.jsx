import React from 'react';

export default function ActivityCard({ activity }) {
	// format activity description based on activity type
	const formatActionDescription = (action) => {
		switch (action) {
			case 'increased_quota':
				return `increased quota for`;
			case 'added_leads':
				return `added new leads to`;
			case 'archived_team':
				return `archived the team`;
			default:
				return;
		}
	};

	return (
		<div className='h-14 min-h-full'>
			<div className='flex mb-4'>
				<div className='mr-2 flex-shrink-0'>
					<img
						src={activity.person.avatar}
						className='rounded-full h-8 w-auto inline-block'
						alt=''
					/>
				</div>
				<div className='font-light text-xs'>
					<p>
						<span className='font-normal'>{activity.person.name} </span>
						<span className='text-slate-600'>
							{formatActionDescription(activity.action)}
						</span>
						<span className='font-normal'> {activity.target}</span>
					</p>
					<p className='text-slate-400'>{activity.created_at}</p>
				</div>
			</div>
		</div>
	);
}
