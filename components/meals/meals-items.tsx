// MealItem.tsx
import Link from 'next/link';
import Image from 'next/image';

export interface Meal {
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
}

export default function MealItem({
  title,
  slug,
  image,
  summary,
  creator,
}: Meal) {
  return (
    <article className="flex flex-col justify-between h-full rounded bg-gradient-to-r from-[#2c1e19] to-[#25200f] shadow-lg overflow-hidden transition-all duration-300 ease-in-out text-[#ddd6cb]">
      <header>
        <div className="relative h-60">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <div className="p-2 pt-0">
          <h2 className="m-0 text-2xl font-montserrat">{title}</h2>
          <p className="text-xs text-[#cfa69b] italic">by {creator}</p>
        </div>
      </header>
      <div className="flex flex-col justify-between h-full">
        <p className="p-4 pt-0">{summary}</p>
        <div className="p-4 text-right">
          <Link
            href={`/meals/${slug}`}
            className="inline-block mt-4 px-4 py-2 rounded-lg bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white font-bold no-underline hover:from-[#fd4715] hover:to-[#f9b241] hover:shadow-[0_0_12px_rgba(242,100,18,0.8)]"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}