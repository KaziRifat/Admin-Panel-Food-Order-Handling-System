import "./Sidebar.css";
import logo from "../../assets/logo.png";
import { FaTimes,FaHome,FaFirstOrder,FaMoneyBillWave,FaClipboardList,FaFileInvoice,FaProductHunt } from "react-icons/fa";
import { MdOutlinePendingActions,MdOutlineIncompleteCircle,MdCancelPresentation,MdRestaurant,MdBook,MdSettings,MdLibraryAdd,MdOutlineAssignmentReturn,MdCategory,MdOutlineProductionQuantityLimits,MdAddShoppingCart } from "react-icons/md";
import { CgUnavailable,CgLogOff } from "react-icons/cg";
import { BiPurchaseTagAlt,BiAddToQueue,BiFoodMenu,BiUser } from "react-icons/bi";
import { GiTable } from "react-icons/gi";
import { BsFillPeopleFill } from "react-icons/bs";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return (
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src={logo} alt="logo" />
                    <h1>BHOJON</h1>
                </div>
                <i className="fa-2x" id="sidebarIcon" onClick={() => closeSidebar()}><FaTimes /></i>
            </div>

            <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link">
                    <i className="fa-2x"><FaHome /></i>
                    <a href="#">Dashboard</a>
                </div>
                <h2>MANAGE ORDER</h2>
                <div className="sidebar__link">
                    <i className="fa-2x"><FaFirstOrder /></i>
                    <a href="#">Order List</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa-2x"><MdOutlinePendingActions /></i>
                    <a href="#">Pending Order</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa-2x"><MdOutlineIncompleteCircle /></i>
                    <a href="#">Complete Order</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa-2x"><MdCancelPresentation /></i>
                    <a href="#">Cancle Order</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa-2x"><FaClipboardList /></i>
                    <a href="#">Counter List</a>
                </div>
                <h2>RESERVATION</h2>
                <div className="sidebar__link">
                    <i className="fa-2x"><MdRestaurant /></i>
                    <a href="#">Reservation</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa-2x"><MdBook /></i>
                    <a href="#">Add Booking</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa-2x"><CgUnavailable /></i>
                    <a href="#">Unavailable Day</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa-2x"><MdSettings /></i>
                    <a href="#">Reservation Setting</a>
                </div>
                <h2>PURCHASE MANAGE</h2>
                <div className="sidebar__link">
                    <i className="fa-2x"><BiPurchaseTagAlt /></i>
                    <a href="#">Purchase Item</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa-2x"><MdLibraryAdd /></i>
                    <a href="#">Add Purchase</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa-2x"><MdOutlineAssignmentReturn /></i>
                    <a href="#">Purchase Return</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa-2x"><FaFileInvoice /></i>
                    <a href="#">Return Invoice</a>
                </div>

                <h2>FOOD MANAGEMENT</h2>
                <div className="sidebar__link">
                    <i className="fa-2x"><MdCategory /></i>
                    <a href="#">Manage Category</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa-2x"><BiFoodMenu /></i>
                    <a href="#">Manage Food</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa-2x"><BiAddToQueue /></i>
                    <a href="#">Manage Add-ons</a>
                </div>
                
                <h2>PRODUCTION</h2>
                <div className="sidebar__link">
                    <i className="fa-2x"><FaProductHunt /></i>
                    <a href="#">Set Production Unit</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa-2x"><MdOutlineProductionQuantityLimits /></i>
                    <a href="#">Production Set List</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa-2x"><MdAddShoppingCart /></i>
                    <a href="#">Add Production</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa-2x"><MdSettings /></i>
                    <a href="#">Production Setting</a>
                </div>

                <h2>SEETING</h2>
                <div className="sidebar__link">
                    <i className="fa-2x"><FaMoneyBillWave /></i>
                    <a href="#">Payment Seeting</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa-2x"><GiTable /></i>
                    <a href="#">Manage Table</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa-2x"><BsFillPeopleFill /></i>
                    <a href="#">Customer Type</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa-2x"><MdSettings /></i>
                    <a href="#">Kitchen Setting</a>
                </div>

                <h2>DEFAULT</h2>
                <div className="sidebar__link">
                    <i className="fa-2x"><BiUser /></i>
                    <a href="#">User</a>
                </div>
                <div className="sidebar__logout">
                    <i className="fa-2x"><CgLogOff /></i>
                    <a href="#">Log out</a>
                </div>

            </div>
        </div>
    );
};

export default Sidebar;