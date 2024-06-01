import Navbar from "./components/Navbar";
import Widget from "./components/Widget";
import BtnShowMenu from "./components/BtnShowMenu";

const Header = () => {
    return (
        <header className="flex-col h-screen justify-center content-center">
            
            <Navbar />

            <div className="flex-col justify-center">
                <h1 className="text-white uppercase text-center text-2xl font-bold text-4xl beabas-text">La belle assiette</h1>
                <h2 className="text-white text-center text-3xl seaweed-text py-6">Restaurant traditionnel</h2>
                <div className='flex justify-center content-center gap-3'> <BtnShowMenu /> <Widget /> </div>
            </div>
        </header>
    );
};

export default Header;
