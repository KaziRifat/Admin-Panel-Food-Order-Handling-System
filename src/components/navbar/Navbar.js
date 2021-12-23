import "./Navbar.css";
import avatar from "../../assets/avatar.svg";
import { FaBars,FaRegClock,FaSearch } from "react-icons/fa";

const Navbar = ({ sidebarOpen, openSidebar }) => {
    return (
        <nav className="navbar">
            <div className="nav-icon" onClick={() => openSidebar()}>
                <i className="fa-2x"><FaBars/></i>
            </div>
            <div className="navbar__left">
                <a href="#">Order List</a>
                <a href="#">Kitchen Dashboard</a>
                <a href="#">Counter Dashboard</a>
                <a className="active_link" href="#">Admin</a>
            </div>
            <div className="navbar__right">
                <a href="#">
                    <i className="fa-2x"><FaSearch/></i>
                </a>
                <a href="#">
                    <i className="fa-2x"><FaRegClock/></i>
                </a>
                <a href="#">
                    <img width="30" src={avatar} alt="avatar" />
                </a>
            </div>
        </nav>

    );
};

export default Navbar;
