import Link from "next/link";

export default function Home() {
	return (
		<main className="min-h-screen flex flex-col items-center justify-center text-center px-4">
			<h1 className="text-white text-4xl md:text-5xl font-montserrat mb-8">
				Time to get started!
			</h1>
			<Link
				href="/meals"
				className="px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-400 text-white rounded-full shadow-lg hover:from-orange-600 hover:to-yellow-500 transition-colors duration-300 no-underline font-medium"
			>
				음식페이지 고고
			</Link>
		</main>
	);
}
