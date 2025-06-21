import logo from './flipkart-plus_8d85f4.png'
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div>
            <header className="head">
                <div className='logo'>
                    <img alt="images" className="img" src={logo} height="25" />
                </div>
                <div className="nav-bar">
                    <Link to='/home' className={props.active == 'home' ? 'active' : 'nav-item'} onClick={(e) => { props.clickHandler('home', props.showFashion()) }}>Home</Link>
                    <a className={props.active == 'fashion' ? 'active' : 'nav-item'} onClick={(e) => { props.clickHandler('fashion', props.showFashionn()) }}>Fashion</a>
                    <Link to='/about' className={props.active == 'about' ? 'active' : 'nav-item'} onClick={(e) => { props.clickHandler('about', props.showFashion()) }}>About</Link>
                    <Link to='/contact' className={props.active == 'contact' ? 'active' : 'nav-item'} onClick={(e) => { props.clickHandler('contact', props.showFashion()) }}>Contact</Link>
                </div>
                <div className="search">
                    <input type="text" className={props.search === true ? "searchs" : "search-his"} onClick={(e) => { props.showSearch() }} placeholder='Search Here' />
                    <button className="btn">Search</button>
                    <button className="btnl" onMouseUp={(e) => props.setTrigger(true)}>Login</button>
                </div>
            </header>
        </div>
    )
}

export default Navbar
