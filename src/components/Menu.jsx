const Menu = () => {
  const menuLinks = [
    { id: '#home', name: 'Home' },
    { id: '#about', name: 'About' },
    { id: '#projects', name: 'Projects' },
    { id: '#skills', name: 'Skills' },
    { id: '#contact', name: 'Contact Me' },
  ];

  return (
    <section className="navigation">
      <div className="title-name">
        <a href="index.html" className="menu-link">
          Oleksandr Dzygansky
        </a>
      </div>

      <div className="menu">
        {menuLinks.map((menuLink) => (
          <div key={menuLink.id} className="nav-link active">
            <a href={menuLink.id} className="menu-link">
              {menuLink.name}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
