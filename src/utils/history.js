// convert calculations object to array
export const calculationsList = (calculations) => {
	return Object.entries(calculations).map(([key, value]) => {
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
})
};

export const filteredCalculations = (sortedEntries, searchEntry) => {
	return sortedEntries.filter((val) => {
	if (
			val.capitalizedFirstName
				.toLowerCase()
				.includes(searchEntry.toLowerCase()) ||
			val.capitalizedSecondName
				.toLowerCase()
				.includes(searchEntry.toLowerCase())
		) {
			return val;
		}
})};

// useEffect(() => {
// 	if (searchEntry !== "") {
// 		setSortedEntries((prev) => filteredCalculations(prev, searchEntry));
// 	}
// }, [searchEntry]);

// useEffect(() => {
// 	if (sortOrder === "Newest To Oldest") {
// 		const sortedResults = sortedEntries.sort((a, b) => (a > b ? 1 : -1));
// 		setSortedEntries(sortedResults);
// 	} else {
// 		setSortedEntries(sortedEntries);
// 	}
// }, [sortOrder, sortedEntries]);

