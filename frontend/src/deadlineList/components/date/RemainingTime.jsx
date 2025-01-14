import React from 'react'
import Date from './Date'

const RemainingTime = () => {
	const props = {
		dateTopic: 'Time:',
		date: '05:00 pm',
		icon: (
			<img
				src={'@assets/img/svg/remaining.svg'}
				className="h-full"
				alt="time-icon"
			/>
		),
		iconColor: 'bg-brand-avatar-green bg-opacity-25',
	}

	return <Date {...props} />
}

export default RemainingTime
