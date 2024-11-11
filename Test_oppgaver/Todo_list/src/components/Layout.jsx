import {Outlet, Link} from "react-router-dom"

export default function Layout(){

    return(
        <>

            <nav id="Layout-nav">
                <ul id="Layout-ul">
                    <li id="Layout-li">
                        <Link to="/">Home</Link>
                    </li>
                    <li id="Layout-li">
                        <Link to="/About">About</Link>
                    </li>
                    <li id="Layout-li">
                        <Link to="/Classlist">Classlist</Link>
                    </li>
                </ul>
            </nav>




            <Outlet />
        </>
    )
}