import { AvatarEditor } from "./components/AvatarEditor";

export default function Home() {
  return (
    <main className="min-h-screen py-8">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-2">
          Avataaars Generator
        </h1>
        <p className="text-gray-500 text-center mb-8">
          Create your own custom avatar
        </p>
        <AvatarEditor />
      </div>
    </main>
  );
}
