import React from 'react';
import SynonymSearch from './synonymSearch';
import SynonymSearchResult from './[search-synonym]/page';

const HomePage = () => {
	return (
		<div className='flex flex-col w-screen h-screen justify-center items-center space-y-8'>
			<h1 className='font-bold text-3xl'>Synonym Finder</h1>
			<SynonymSearch />
			<SynonymSearchResult />
		</div>
	);
};

export default HomePage;
