import Link from "next/link";
import { Test } from "./Test";

const HomePage = () => {
  console.log("window s", typeof window);

  return (
    <section className="flex flex-1 justify-center items-center">
      <h1 className="text-6xl font-semibold">Welcome to neurchis!</h1>
      {/* @ts-ignore */}
      <Test />

      <Link href="/caca" className="text-4xl text-blue-600">
        coucou go caca
      </Link>
    </section>
  );
};

export default HomePage;
