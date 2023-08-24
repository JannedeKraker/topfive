export default function Header({ title }) {
  return (
    <header className="bg-blue-500 p-4 text-white mb-4">
      <h1 className="text-2xl text-center font-semibold">{title}</h1>
    </header>
  );
}
