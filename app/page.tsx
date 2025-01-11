import Link from 'next/link';
import ImageSlideshow from '@/components/ui/images/image-slideshow';

export default function Home() {
  return (
    <>
      <header className="flex gap-12 my-12 mx-auto w-11/12 max-w-5xl">
        <div className="w-1/2 h-[40vh]">
          <ImageSlideshow />
        </div>
        <div className="w-1/2 flex flex-col justify-center items-start">
          <div className="text-left">
            <h1 className="text-transparent text-4xl font-bold uppercase tracking-wide bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-400">
              NextLevel Food for NextLevel Foodies
            </h1>
            <p className="text-lg text-gray-300 mt-4">
              Taste & share food from all over the world.
            </p>
          </div>
          <div className="flex gap-4 mt-6 items-center">
            <Link
              href={'/community'}
              className="text-lg text-yellow-500 hover:text-yellow-400"
            >
              Join the Community
            </Link>
            <Link
              href={'/meals'}
              className="inline-block px-4 py-2 rounded-md bg-gradient-to-r from-orange-600 to-orange-400 text-white font-bold hover:from-orange-700 hover:to-orange-500"
            >
              Explore Meals
            </Link>
          </div>
        </div>
      </header>
      <main className="w-11/12 mx-auto">
        <section className="flex flex-col text-center text-gray-300 max-w-3xl mx-auto my-8">
          <h2 className="text-3xl font-bold text-white">How it works</h2>
          <p className="text-lg mt-4">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p className="text-lg mt-4">
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
        <section className="flex flex-col text-center text-gray-300 max-w-3xl mx-auto my-8">
          <h2 className="text-3xl font-bold text-white">Why NextLevel Food?</h2>
          <p className="text-lg mt-4">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p className="text-lg mt-4">
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
