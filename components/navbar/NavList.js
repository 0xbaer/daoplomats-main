import NavItem from "./NavItem";

const NavList = () => {
  const navHrefs = ["#home", "#about", "#services", "#contact"];

  return (
    <nav className="hidden md:block">
      <ul className="flex gap-2 lg:gap-2.5">
        {navHrefs.map((href, index) => (
          <li
            key={index}
            className="hover:scale-105 active:scale-100 font-medium transition-transform"
          >
            <NavItem href={href} label={href.substring(1)} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavList;
