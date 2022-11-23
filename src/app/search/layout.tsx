import SynonymSearch from './search-input';

export default function SearchLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<title>Synonym Search</title>
			<head />
			<body className='flex flex-col w-screen h-screen items-center justify-center space-y-6'>
				<SynonymSearch />
				{children}
			</body>
		</html>
	);
}
