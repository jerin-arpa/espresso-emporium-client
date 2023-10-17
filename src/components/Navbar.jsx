import navbarBg from '../../src/assets/images/more/15.jpg';
import logo from '../../src/assets/images/more/logo1.png';


const Navbar = () => {
    return (
        <div className="hero" style={{ backgroundImage: `url(${navbarBg})` }}>
            <div className="hero-overlay bg-opacity-0"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="flex gap-5">
                    <div className='flex items-center'>
                        <img className='w-20' src={logo} alt="" />
                    </div>
                    <div className='flex items-center mt-7'>
                        <h1 className="mb-5 text-5xl font-bold text-white font-Rancho">Expresso Emporium</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;