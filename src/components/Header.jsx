function Header() {
  return (
    <>
      <nav className="blue-grey darken-3 nav">
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">
            React Movies
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down ">
            <li>
              <a href="https://github.com/PavelMelnik94/food-project">Repo</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export { Header };
