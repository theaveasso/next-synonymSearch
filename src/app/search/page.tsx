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
				id='word-search'
				placeholder='Your Word'
				type='text'
				value={word}
				onChange={(e) => setWord(e.target.value)}
			/>
			<button type='submit'>Search</button>
		</form>
	);
};

export default SynonymSearch;
