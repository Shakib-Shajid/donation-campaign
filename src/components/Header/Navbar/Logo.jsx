import logo from './Logo.png';

const Logo = () => {
    return (
        <div className="hidden lg:block">
            <img src={logo} alt="" className='w-40 ' />
        </div>
    );
};

export default Logo;