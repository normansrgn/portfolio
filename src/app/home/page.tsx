import Me from "@/components/me/me";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <main className=" text-white py-10">
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="grid grid-cols-1 gap-12">
          <Me />
          <Projects />
        </div>
      </div>
    </main>
  );
}