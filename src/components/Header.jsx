import logo from '../assets/cv.png';


function Header() {
    return (
        <div className='header'>
            <img className='logo' src={logo} alt="cv logo image" />
            <h1 className='header-title'>CV Generator</h1>
        </div>
    )
}

export default Header;