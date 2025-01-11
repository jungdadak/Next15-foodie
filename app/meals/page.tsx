import MealsGrid from '@/components/meals/meals-grid';
import Link from 'next/link';
import { Meal } from '@/components/meals/meals-items';

export default function MealsPage() {
  // TODO: Replace with actual data fetching
  const meals: Meal[] = [];
  return (
    <>
      <header className="flex flex-col items-center gap-4 p-8 text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
          Delicious meals, created{' '}
          <span className="text-orange-300">by you</span>
        </h1>
        <p className="text-xl text-gray-200">
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className="mt-4">
          <Link
            href="/meals/share"
            className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white font-bold no-underline hover:from-[#fd4715] hover:to-[#f9b241] hover:shadow-[0_0_12px_rgba(242,100,18,0.8)] transition-all duration-300"
          >
            Share Your Favorite Recipe
          </Link>
        </p>
      </header>
      <main className="w-full max-w-7xl mx-auto px-4">
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}
