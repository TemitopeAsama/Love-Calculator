import React, {useState} from 'react'
import { Link } from "react-router-dom";
import Pagination from '../utils/Pagination';
import { HistoryStyles } from '../styles/HistoryStyles';
import { NoHistoryStyles } from '../styles/HistoryStyles';
import Search from '../components/Search';
import Sort from '../components/Sort';

const History = () => {
	const [searchEntry, setSearchEntry] = useState("");
	const [sortedEntries, setSortedEntries] = useState([]);
	const [currentPage, setCurrentPage] = useState(1); // current page
	const [entriesPerPage] = useState(5); // no of entries per page
	const calculations = JSON.parse(localStorage.getItem("calculations")); // get calculations from local storage
	if (calculations === null) {
		// if no calculations, return empty div
		return (
			<NoHistoryStyles>
				<Link to='/'>Back</Link>
				<p className='no__history'>No History</p>
			</NoHistoryStyles>
		);
	}

	// convert calculations object to array
	const calculationsList = Object.entries(calculations).map(([key, value]) => {
		const [firstName, secondName] = key.split("|");
		const capitalizedFirstName =
			firstName.charAt(0).toUpperCase() + firstName.slice(1);
		const capitalizedSecondName =
			secondName.charAt(0).toUpperCase() + secondName.slice(1);
		return {
			capitalizedFirstName,
			capitalizedSecondName,
			score: value.score,
			message: value.message,
			key: key,
		};
	});

	// Sort entries
	const handleSort = (sortEntry) => {
		if (sortEntry === "Newest To Oldest") {
			const sortedEntries = filteredCalculations.sort((a, b) =>
				a > b ? 1 : -1
			);
			setSortedEntries(sortedEntries);
		} else {
			setSortedEntries(calculationsList);
		}
	};

	// TODO: Show message when searchTerm does not match any entry
	const filteredCalculations = sortedEntries.filter((val) => {
		if (searchEntry === "") {
			return val;
		} else if (
			val.capitalizedFirstName
				.toLowerCase()
				.includes(searchEntry.toLowerCase()) ||
			val.capitalizedSecondName
				.toLowerCase()
				.includes(searchEntry.toLowerCase())
		) {
			return val;
		}
	});

	// Get current batch of entries
	const indexOfLastEntry = currentPage * entriesPerPage; // index of last entry in a batch
	const indexOfFirstEntry = indexOfLastEntry - entriesPerPage; // index of first entry in a batch
	const pageNumbers = []; //array to store page numbers
	for (
		let i = 1;
		i <= Math.ceil(filteredCalculations.length / entriesPerPage);
		i++
	) {
		pageNumbers.push(i);
	}
	const currentEntries = filteredCalculations.slice(
		indexOfFirstEntry,
		indexOfLastEntry
	);

	return (
		<HistoryStyles>
			<Link to='/'>Back</Link>
			<Search setSearchEntry={setSearchEntry} />
			<Sort handleSort={handleSort} />
			<>
				{currentEntries.map((calc) => {
					return (
						<div key={calc.key} className='entry__card'>
							<div className='names__score'>
								<span>
									{calc.capitalizedFirstName} & {calc.capitalizedSecondName}
								</span>
								<span>{calc.score}%</span>
							</div>
							<div className='message'>{calc.message}</div>
						</div>
					);
				})}
			</>

			{pageNumbers.length > 1 && (
				<Pagination
					pageNumbers={pageNumbers}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				/>
			)}
		</HistoryStyles>
	);
}

export default History