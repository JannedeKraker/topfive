export default function Header({ title, subTitle }) {
  return (
    <header className="bg-blue-500 p-4 text-white mb-4">
      <h1 className="text-4xl text-center font-semibold">{title}</h1>
      <h6 className="text-xs text-center font-semibold">{subTitle}</h6>
    </header>
  );
}
