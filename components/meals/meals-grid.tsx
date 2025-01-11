// MealsGrid.tsx
import MealItem from './meals-items';
import { Meal } from './meals-items';

interface PageProps {
  meals: Meal[];
}

export default function MealsGrid({ meals }: PageProps) {
  return (
    <ul className="w-[90%] max-w-[90rem] grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-20 mx-auto my-8 list-none p-0">
      {meals.map((meal) => (
        <li key={meal.title}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
