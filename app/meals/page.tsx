// app/meals/page.jsx 또는 pages/meals.jsx

import Link from "next/link";

export default function MealPage() {
	return (
		<main className="min-h-screen flex flex-col items-center justify-center px-4 bg-transparent">
			<h1 className="text-4xl md:text-5xl font-montserrat text-white mb-12">
				Meals
			</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
				<Link
					href="/meals/meal-1"
					className="flex items-center justify-center p-6 bg-gradient-to-r from-orange-500 to-yellow-400 text-white rounded-lg shadow-lg hover:from-orange-600 hover:to-yellow-500 transition-colors duration-300 no-underline font-medium text-center"
				>
					Meal 1
				</Link>
				<Link
					href="/meals/meal-2"
					className="flex items-center justify-center p-6 bg-gradient-to-r from-orange-500 to-yellow-400 text-white rounded-lg shadow-lg hover:from-orange-600 hover:to-yellow-500 transition-colors duration-300 no-underline font-medium text-center"
				>
					Meal 2
				</Link>
				<Link
					href="/meals/meal-3"
					className="flex items-center justify-center p-6 bg-gradient-to-r from-orange-500 to-yellow-400 text-white rounded-lg shadow-lg hover:from-orange-600 hover:to-yellow-500 transition-colors duration-300 no-underline font-medium text-center"
				>
					Meal 3
				</Link>
				<Link
					href="/meals/share"
					className="flex items-center justify-center p-6 bg-gradient-to-r from-green-500 to-teal-400 text-white rounded-lg shadow-lg hover:from-green-600 hover:to-teal-500 transition-colors duration-300 no-underline font-medium text-center col-span-1 sm:col-span-2 md:col-span-3"
				>
					Share Page
				</Link>
				<Link
					href="/community"
					className="flex items-center justify-center p-6 bg-gradient-to-r from-green-500 to-teal-400 text-white rounded-lg shadow-lg hover:from-green-600 hover:to-teal-500 transition-colors duration-300 no-underline font-medium text-center col-span-1 sm:col-span-2 md:col-span-3"
				>
					community
				</Link>
			</div>
		</main>
	);
}
