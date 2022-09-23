import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";
import { HistoryStyles } from "../styles/HistoryStyles";
import { NoHistoryStyles } from "../styles/HistoryStyles";
import Search from "../components/Search";
import Sort from "../components/Sort";
import { calculationsList, filteredCalculations } from "../utils/history";

const History = () => {
	const [searchEntry, setSearchEntry] = useState("");
	const [sortOrder, setSortOrder] = useState("");
	const [sortedEntries, setSortedEntries] = useState([]);
	const [currentPage, setCurrentPage] = useState(1); // current page
	const [entriesPerPage] = useState(5); // no of entries per page

	// convert calculations object to array
	useEffect(() => {
		const calculations = JSON.parse(localStorage.getItem("calculations")) ??[]; // get calculations from local storage
		const calculationsArray = calculationsList(calculations);
		setSortedEntries(calculationsArray)
	}, [])

	// if no entry, return empty div with feedback
	if (sortedEntries.length === 0) {
		return (
			<NoHistoryStyles>
				<Link to='/'>Back</Link>
				<p className='no__history'>No History</p>
			</NoHistoryStyles>
		);
	}

	// sort results in different orders depending on selected option
	const handleSort = (sortEntry) => {
		setSortOrder(sortEntry);
		if (sortEntry === "Oldest To Newest") {
			const sortedResults = sortedEntries.sort((a, b) => (a > b ? 1 : -1));
			setSortedEntries(sortedResults)
		} else {
		const sortedResults = sortedEntries.sort((a, b) => (a < b ? 1 : -1));
			setSortedEntries(sortedResults);
		}
	}

	// filter results based on search entry
	const filteredResults = filteredCalculations(sortedEntries, searchEntry);

	// Get current batch of entries
	const indexOfLastEntry = currentPage * entriesPerPage; // index of last entry in a batch
	const indexOfFirstEntry = indexOfLastEntry - entriesPerPage; // index of first entry in a batch
	const pageNumbers = []; //array to store page numbers
	for (
		let i = 1;
		i <= Math.ceil(filteredResults.length / entriesPerPage);
		i++
	) {
		pageNumbers.push(i);
	}
	const currentEntries = filteredResults.slice(
		indexOfFirstEntry,
		indexOfLastEntry
	);


	return (
		<HistoryStyles>
			<Link to='/'> &#8592; Back</Link>
			<div className='search__sort'>
				<Search setSearchEntry={setSearchEntry} />
				<Sort handleSort={handleSort} />
			</div>
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
};

export default History;
