function Header() {
  return (
    <header className="h-22 flex items-center justify-center">
      <nav>
        <ul className="flex gap-6 justify-center uppercase font-medium text-gray-500 opacity-75 text-sm">
          <li className="hover:text-gray-700">
            <a href="">Home</a>
          </li>
          <li className="hover:text-gray-700">
            <a href="">Projects</a>
          </li>
          <li className="hover:text-gray-700">
            <a href="">Skills</a>
          </li>
          <li className="hover:text-gray-700">
            <a href="">Experience</a>
          </li>
          <li className="hover:text-gray-700">
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
