import { Link } from 'react-router-dom'


function Header() {
  return (
    <>
      <nav className="blue-grey darken-3 nav">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            React Food
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down ">
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <a href="https://github.com/PavelMelnik94/food-project" >Repo</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export { Header };
