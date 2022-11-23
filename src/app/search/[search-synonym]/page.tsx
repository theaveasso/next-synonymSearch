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
			<h3>Your Search Result</h3>
			<ul>
				{searchResult.map((w: SearchResult) => (
					<p>{w.word}</p>
				))}
			</ul>
		</div>
	);
};

export default SynonymSearchResult;
