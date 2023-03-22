import React from 'react'
import _ from 'lodash'

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPege }) => {
	const pageCount = Math.ceil(itemsCount / pageSize)
	if (pageCount === 1) return null
	const page = _.range(1, pageCount + 1)
	return (
		<nav>
			<ul className='pagination'>
				{page?.map((page) => (
					<li
						className={
							'page-item' +
							(page === currentPege ? ' active' : '')
						}
						key={'page_' + page}
					>
						<button
							className='page-link'
							onClick={() => onPageChange(page)}
						>
							{page}
						</button>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Pagination
