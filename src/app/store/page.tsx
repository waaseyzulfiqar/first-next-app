import Image from "next/image";
import Link from "next/link";

export default async function Store() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products: any = await response.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700  after:dark:from-sky-900 after:dark:via-[#0141ff] sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px] text-black text-3xl font-semibold">
        Store
      </div>

      <div className="mb-32 grid text-center mt-16 lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        {products.map((item: any) => {
          return (
            <Link
              href={`/detail/${item.id}`}
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              rel="noopener noreferrer"
            >
              <img src={item.image} alt="" className="w-28" />
              <h2 className="mb-3 text-2xl font-semibold">
                {item.title}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                {item.price}
              </p>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
