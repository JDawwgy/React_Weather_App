import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
import { GEO_API_URL, geoApiOptions } from '../../api';

const Search = ({onSearchChange}) => {
	
	const [search, setSearch] = useState(null);
	
	const loadOptions = async (inputValue) => {
		try {
			const response = await fetch(`${GEO_API_URL}/cities?minPopulation=23000&namePrefix=${inputValue}`, geoApiOptions);
			const result = await response.json();
			console.log(result);
			
			const options = result.data.map(city => ({
				value: `${city.latitude} ${city.longitude}`,
				label: `${city.name}, ${city.regionCode}, ${city.country}`,
			}));
			
			return { options };
		} catch (error) {
			console.error(error);
			return { options: [] }; 
		}
	}
	
	const handleOnChange = (searchData) => {
		setSearch(searchData);
		onSearchChange(searchData);
	}
	
	return (
		<AsyncPaginate
			placeholder="Search for City"
			debounceTimeout={600}
			value={search}	
			onChange={handleOnChange}
			loadOptions={loadOptions}
			className="mt-6"
		/>
	);
}

export default Search;