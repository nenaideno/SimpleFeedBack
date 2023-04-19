import { Link } from 'react-router-dom'
import './Body.scss'

const Body = (props: any) => {
    return <div data-aos="fade-up" data-aos-duration="1000" className="home-body">
        <h1>simple feedback</h1>
        <p> <b>Simple feedback</b> - service for quickly generating feedback
            forms <br /> that will allow you to receive up-to-date feedback about
            your platform
        </p>
        <Link className="body-button" to="/generator">try it</Link>
    </div>
}

export default Body