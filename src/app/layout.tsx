import '../styles/globals.css';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<title>Synonym Search</title>
			<head />
			<body>{children}</body>
		</html>
	);
}
