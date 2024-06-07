import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Navbar.css";

const Navbar = ({ handleInputChange, query, size, toggleCart }) => {
    return (
        <nav>
            <div className="nav-container">
                <input
                    className="search-input"
                    type="text"
                    onChange={handleInputChange}
                    value={query}
                    placeholder="Enter your search......."
                />
            </div>
            <div className="profile-container">
                <span>
                    <FiHeart className="nav-icons-heart" />
                </span>
                <span onClick={toggleCart}>
                    <AiOutlineShoppingCart className="nav-icons" /><span>{size}</span>
                </span>

            </div>
        </nav>
    );
};

export default Navbar;
