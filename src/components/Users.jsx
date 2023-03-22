import React, { useState } from 'react'
import Pagination from './Pagination'
import User from './User'
const Users = ({ users, ...rest }) => {
	const count = users.length
	const pegeSize = 4
	const [currentPege, setCurrentPage] = useState(1)

	const handlePageChange = (pageIndex) => {
		console.log('page :', pageIndex)
		setCurrentPage(pageIndex)
	}
	return (
		<>
			{count > 0 && (
				<table className='table'>
					<thead>
						<tr>
							<th scope='col'>Имя</th>
							<th scope='col'>Качества</th>
							<th scope='col'>Провфессия</th>
							<th scope='col'>Встретился, раз</th>
							<th scope='col'>Оценка</th>
							<th scope='col'>Избранное</th>
							<th />
						</tr>
					</thead>
					<tbody>
						{users.map((user) => (
							<User key={user._id} {...rest} {...user} />
						))}
					</tbody>
				</table>
			)}
			<Pagination
				itemsCount={count}
				pageSize={pegeSize}
				onPageChange={handlePageChange}
				currentPege={currentPege}
			/>
		</>
	)
}

export default Users
