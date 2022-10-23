import "./style.css";

const Header = () => {
  return (
    <header className="portfolio__header">
      <div className="portfolio__header___nav__container">
        <h3 className="portfolio__header__name"></h3>
        <nav className="portfolio__header__navigation">
          <ul>
            <li>
              <a href="#start">Inicio</a>
            </li>
            <li>
              <a href="#aboutMe">Sobre Mim</a>
            </li>
            <li>
              <a href="#projects">Projetos</a>
            </li>
          </ul>
        </nav>
        <a
          className="portfolio__header__contact__me"
          href="mailto:nycolassantana00@gmail.com?subject=Contato pelo portfólio"
        ></a>
      </div>
      <div className="portfolio__header__divider__line"></div>
    </header>
  );
};

export default Header;
