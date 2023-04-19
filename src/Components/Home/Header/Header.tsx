import { Link } from 'react-router-dom'
import './Header.scss'

const Header = (props: any) => {
    return <header data-aos="fade-down" data-aos-duration="1000" className="home-header">
        <Link  className="header-logo" to='/'>SimpleFeedBack</Link>
        <div className="header-menu">
            <Link to='#'>About</Link>
            <Link to='#'>Contacts</Link>
        </div>
        <div className="header-create">
            <Link to='/generator'>Create New Form</Link>
            <Link to='/log'>Your Forms</Link>
        </div>
    </header>
}

export default Header