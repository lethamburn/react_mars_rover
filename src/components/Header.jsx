import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Mars Rover Photos</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rover">Rover Gallery</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <div className="social">
        <a href="https://github.com/lethamburn" target="_blank">
          <img src="/github.png" />
        </a>
      </div>
    </header>
  );
};

export default Header;
