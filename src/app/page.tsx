import Link from 'next/link';

const HomePage = () => {
	return (
		<div className='flex flex-col w-screen h-screen justify-center items-center space-y-8'>
			<Link href={'/search'} className='font-bold text-3xl'>
				Synonym Finder
			</Link>
		</div>
	);
};

export default HomePage;
