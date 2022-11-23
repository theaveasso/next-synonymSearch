import Link from 'next/link';

type PageProps = {
	params: {
		wordSearch: string;
	};
};

type SearchResult = {
	word: string;
	count: number;
};

async function synonymSearch(word: string) {
	const res = await fetch(`https://api.datamuse.com/words?rel_syn=${word}`);

	return await res.json();
}

const SynonymSearchResult = async ({ params: { wordSearch } }: PageProps) => {
	console.log(wordSearch);
	const searchResult = await synonymSearch(wordSearch);
	return (
		<div>
			<h3 className='text-xl'>
				Your Search Result of{' '}
				<span className=' italic font-bold underline'>{wordSearch}</span>
			</h3>
			<ul className='flex flex-col pt-10 mt-5 rounded-xl bg-green-50 p-5'>
				{searchResult.map((w: SearchResult) => (
					<Link className='px-4' href={`/search/${w.word}`} key={w.count}>
						{w.word}
					</Link>
				))}
			</ul>
		</div>
	);
};

export default SynonymSearchResult;
