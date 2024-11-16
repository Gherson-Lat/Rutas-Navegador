import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink  to="/">
                        About for me
                    </NavLink>
                </li>

                <li>
                    <NavLink  to="/">
                        Proyects
                    </NavLink>
                </li>

                <li>
                    <NavLink  to="/">
                        Git-Hub
                    </NavLink>
                </li>

                <li>
                    <NavLink  to="/">
                        Model social
                    </NavLink>
                </li>

                <li>
                    <NavLink  to="/">
                        Skils
                    </NavLink>
                </li>
            </ul>
        </nav>

    )
}


export default Navbar;


