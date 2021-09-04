import React from 'react'
import DueDate from './components/date/DueDate'
import RemainingTime from './components/date/RemainingTime'
import StartDate from './components/date/StartDate'
import DeadlineTitle from './components/DeadlineTitle'

const ListCard = () => {
	return (
		<div className="flex mb-3 mx-3">
			<div className="w-3/7">
				<DeadlineTitle title="Designing Zuri's Dashboard" />
			</div>
			<div className="w-4/7 flex justify-between">
				<StartDate />
				<div id="divider" className="h-full border-l-1/2" />
				<DueDate />
				<div id="divider" className="h-full border-l-1/2" />
				<RemainingTime />
			</div>
		</div>
	)
}

export default ListCard