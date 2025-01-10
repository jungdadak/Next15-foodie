// app/share/page.jsx 또는 pages/share.jsx

export default function MealSharePage() {
	return (
		<main className="min-h-screen flex flex-col items-center justify-center px-4 bg-transparent">
			<h1 className="text-4xl md:text-5xl font-montserrat text-white mb-4">
				Meal Share Page
			</h1>
			<p className="text-lg font-quicksand text-gray-300">
				Share your favorite meals with the community!
			</p>
			{/* 공유 폼이나 추가적인 기능을 원하시면 여기에 추가하세요 */}
			<button className="mt-6 px-6 py-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition duration-300 no-underline font-medium">
				Share a Meal
			</button>
		</main>
	);
}
