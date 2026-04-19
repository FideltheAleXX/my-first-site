import { useState } from 'react';

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuLinks = [
    { id: '#home', name: 'Home' },
    { id: '#about', name: 'About' },
    { id: '#skills', name: 'Skills' },
    { id: '#projects', name: 'Projects' },
    { id: '#contact', name: 'Contact Me' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <section className="navigation">
      <div className="title-name">Oleksandr Dzygansky</div>

      <button className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`menu ${isMenuOpen ? 'active' : ''}`}>
        {menuLinks.map((menuLink) => (
          <div key={menuLink.id} className="nav-link active">
            <a
              href={menuLink.id}
              className="menu-link"
              onClick={handleMenuLinkClick}
            >
              {menuLink.name}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
