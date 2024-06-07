import Category from "./Category/Category";
import Price from "./Price/Price";
import "./Sidebar.css";
import { FaShopify } from "react-icons/fa";

const Sidebar = ({ handleChange }) => {
    return (
        <>
            <section className="sidebar">
                <div className="logo-container">
                    <h1><FaShopify className="icons" /></h1>
                </div>
                <Category handleChange={handleChange} />
                <Price handleChange={handleChange} />
            </section>
        </>
    );
};

export default Sidebar;