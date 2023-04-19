import { Link } from "react-router-dom"
import Header from "./Header/Header"
import "./Home.scss"
import Body from "./Body/Body"

const Home = (props: any) => {
    return <div className="home">
        <Header />
        <Body />
    </div>
}

export default Home