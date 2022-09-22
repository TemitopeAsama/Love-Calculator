import { PaginationStyles } from '../styles/PaginationStyles';
// import { PaginationButtonStyles } from '../styles/PaginationStyles';

const Pagination = ({pageNumbers, currentPage, setCurrentPage}) => {
	// A function that facilitates navigation to the active page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	// A function that facilitates navigation to the previous page
	const handlePrev = () => {
		if (currentPage <= 1) {
			return;
		} else {
			paginate(currentPage - 1);
		}
	};
	// A function that handles pagination with number**
	const handleActivePage = (pageNumber) => {
		paginate(pageNumber);
	};

	// A function that facilitates navigation to the next page
	const handleNext = () => {
		if (currentPage < pageNumbers.length) {
			paginate(currentPage + 1);
		}
	};

	// TODO: Show active page with styles


	return (
		<PaginationStyles>
			<ul className='pagination'>
				<li className='previous'>
					<button onClick={handlePrev}>Prev</button>
				</li>
				{pageNumbers.map((pageNumber) => (
					<li key={pageNumber} className='page-item'>
						<button
							onClick={() => handleActivePage(pageNumber)}
							role='link'
							className={pageNumber === currentPage ?  'page-link is-active':'page-link'}
						>
							{pageNumber}
						</button>
					</li>
				))}
				<li className='next'>
					<button onClick={handleNext}>Next</button>
				</li>
			</ul>
		</PaginationStyles>
	);
}

export default Pagination
