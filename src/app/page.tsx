'use client';

import Image from 'next/image';
import { useRouter } from "next/navigation";
import { useRef } from 'react';
import Aurora from './(component)/Aurora';
import VariableProximity from './(component)/VariableProximity';

export default function Home() {
  const containerRef = useRef(null);
  const router = useRouter();

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      
      {/* Aurora Background */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center px-4 min-h-screen">
        <div className="max-w-sm rounded-lg shadow-2xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80"
            width={400}
            height={300}
            alt="Books"
            className="rounded-lg"
          />
        </div>

        <div ref={containerRef} className="mt-8 lg:mt-0 lg:ml-10 text-center lg:text-left">
          <VariableProximity
            label="Quotely"
            className="text-5xl font-bold mb-4"
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={120}
            falloff="linear"
          />
          <p className="py-4 max-w-md text-lg">
            Discover powerful quotes that ignite your thoughts. Quotely curates inspiring words from timeless authors and thinkers—one quote at a time.
          </p>
          <button
            className="btn btn-primary mt-2"
            onClick={() => router.push("/quotes")}
          >
            Generate a Quote
          </button>
        </div>
      </div>
    </div>
  );
}
