// app/meals/[slug]/page.jsx 또는 pages/meals/[slug].jsx

interface PageProps {
	params: {
		slug: string;
	};
}

export default async function MealsDetailPage({ params }: PageProps) {
	const { slug } = await params;
	return (
		<main className="min-h-screen flex flex-col items-center justify-center px-4 bg-transparent">
			<h1 className="text-4xl md:text-5xl font-montserrat text-white mb-4">
				Meal Detail Page
			</h1>
			<h2 className="text-2xl font-quicksand text-gray-300">Props: {slug}</h2>
			{/* 추가적인 내용이나 스타일링을 원하시면 여기에 추가하세요 */}
		</main>
	);
}
