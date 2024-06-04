const Navbar = () => {
  return (
    <nav className="z-50 bg-black/90 text-white uppercase py-6 flex justify-center text-sm font-semibold sticky top-0 ">
     <ul className="inline-flex gap-6">
        <li><a href="#">Le restaurant</a></li>
        <li><a href="#menu">La carte</a></li>
        <li><a href="#contact">Contact</a></li>
     </ul>
    </nav>
  );
};

export default Navbar;