const Navbar = () => {
  return (
    <nav className="bg-black-800 text-white uppercase py-6 flex justify-center text-base font-semibold sticky top-0 ">
     <ul className="inline-flex gap-6">
        <li>Accueil</li>
        <li>La carte</li>
        <li>Contacts</li>
     </ul>
    </nav>
  );
};

export default Navbar;