import "./Main.css";
import hello from "../../assets/hello.svg";
import Chart from "../charts/Chart";
import { MdOutlineFoodBank,MdOutlineFastfood,MdPointOfSale,MdPeople,MdOutlineChair } from "react-icons/md";
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi";


const Main = () => {
    return (
        <main>
            <div className="main__container">
                <div className="main__title">
                    <img src={hello} alt="hello" />
                    <div className="main__greeting">
                        <h1>HOME</h1>
                        <p>Welcome to your admin dashboard</p>
                    </div>
                </div>

                <div className="main__cards">
                    <div className="card">
                        <i className="fa-2x text-lightblue"><MdOutlineFoodBank/></i>
                        <div className="card_inner">
                        <span className="font-bold text-title">536</span>
                            <p className="text-primary-p">Lifetime Orders</p>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa-2x text-red"><MdOutlineFastfood/></i>
                        <div className="card_inner">
                            <span className="font-bold text-title">24</span>
                            <p className="text-primary-p">Today Order</p>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa-2x text-yellow"><MdPointOfSale /></i>
                        <div className="card_inner">
                        <span className="font-bold text-title">9.1k</span>
                            <p className="text-primary-p">Today Sale</p>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa-2x text-green"><MdPeople /></i>
                        <div className="card_inner">
                        <span className="font-bold text-title">6.2k</span>
                            <p className="text-primary-p">Total Customers</p>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa-2x text-green"><MdOutlineChair /></i>
                        <div className="card_inner">
                        <span className="font-bold text-title">64</span>
                            <p className="text-primary-p">Total Reservation</p>
                        </div>
                    </div>
                </div>

                <div className="charts">
                    <div className="charts__left">
                        <div className="charts__left__title">
                            <div>
                            <h1>Daily Reports</h1>
                            <p>Dhaka, Bangladesh</p>
                            </div>
                        <i className="fa-2x"><HiOutlineCurrencyBangladeshi /></i>
                    </div>
                    <Chart />
                </div>

                <div className="charts__right">
                    <div className="charts__right__title">
                        <div>
                            <h1>Stats Reports</h1>
                            <p>Dhaka, Bangladesh</p>
                        </div>
                        <i className="fa-2x"><HiOutlineCurrencyBangladeshi /></i>
                    </div>
                    <div className="charts__right__cards">
                        <div className="card1">
                            <h1>Income</h1>
                            <p>৳75,300</p>
                        </div>
                        <div className="card2">
                            <h1>Sales</h1>
                            <p>৳124,200</p>
                        </div>
                        <div className="card3">
                            <h1>Customers</h1>
                            <p>6,200</p>
                        </div>
                        <div className="card4">
                            <h1>Orders</h1>
                            <p>2,856</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>

        </main>
    );
};

export default Main;