import React, { useState } from 'react';

import ProfileAvatar from './ProfileAvatar';

export default function Navbar() {
	return (
		<div className='pl-20'>
			<div className='flex justify-between px-12 py-4'>
				<div>teams</div>
				<ProfileAvatar />
			</div>
		</div>
	);
}
