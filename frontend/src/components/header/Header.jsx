export default function Header({
  title,
  buttonLeft,
  buttonMiddle,
  buttonRigth,
}) {
  return (
    <header className="bg-blue-500 p-4 text-white">
      <h1 className="text-2xl text-center font-semibold">{title}</h1>
      <nav>
        <ul className="flex space-x-4 mt-2">
          <li>
            <a href="#" className="hover:text-gray-300">
              {buttonLeft}
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              {buttonMiddle}
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              {buttonRigth}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
