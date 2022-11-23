'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

const SynonymSearch = () => {
	const [word, setWord] = useState('');
	const router = useRouter();

	const handleWordSearch = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setWord('');
		router.push(`/search/${word}`);
	};
	return (
		<form onSubmit={handleWordSearch}>
			<label htmlFor='word-search'></label>
			<input
				className='px-4 py-2 bg-gray-50 border rounded-l-2xl'
				id='word-search'
				placeholder='Your Word'
				type='text'
				value={word}
				onChange={(e) => setWord(e.target.value)}
			/>
			<button
				className='px-4 py-2 bg-gray-100 border rounded-r-2xl'
				type='submit'
			>
				Search
			</button>
		</form>
	);
};

export default SynonymSearch;
