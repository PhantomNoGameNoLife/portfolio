import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <main className="relative bg-background flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-2">
      <div className="max-w-6xl w-full mx-auto">
        <Hero />
      </div>
    </main>
  );
}
