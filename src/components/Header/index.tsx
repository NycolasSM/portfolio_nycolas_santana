import "./style.css";

const Header = () => {
  return (
    <>
      <header className="portfolio__header">
        <div className="portfolio__header___nav__container">
          <h3 className="portfolio__header__name"></h3>
          <nav className="portfolio__header__navigation">
            <ul>
              <li>Inicio</li>
              <li>Sobre Mim</li>
              <li>Projetos</li>
            </ul>
          </nav>
          <h2 className="portfolio__header__contact__me"></h2>
        </div>
        <div className="portfolio__header__divider__line"></div>
      </header>
    </>
  );
};

export default Header;
