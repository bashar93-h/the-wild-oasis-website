import Image from "next/image";
import Link from "next/link";

// staticaly import the img(when we don't want to set the image width & height)
import bg from "@/public/bg.png";
import bgM from "@/public/bgM1.png";

export default function App() {
  return (
    <div className="mt-72 sm:mt-24">
      <picture>
        <source srcSet={bgM.src} media="(max-width: 640px)" />
        <source srcSet={bg.src} media="(min-width: 641px)" />
        <Image
          src={bgM}
          fill
          placeholder="blur"
          quality={80}
          className="object-cover object-top"
          alt="Mountains and forests with two cabins"
        />
      </picture>

      <div className="relative z-10 text-center">
        <h1 className="text-6xl sm:text-8xl mb-10 tracking-tight font-normal">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-6 py-4 sm:px-8 sm:py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxury cabins
        </Link>
      </div>
    </div>
  );
}
