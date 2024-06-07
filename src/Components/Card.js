import { BiSolidCartAdd } from "react-icons/bi";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack'
import './Cart.css';


const Card = ({ product, addToCart }) => {
    const { img, title, reviews, prevPrice, newPrice } = product;

    return (
        <section className="card">
            <img src={img} alt={title} className="card-img" />
            <div className="card-details">
                <h3 className="card-title">{title}</h3>
                <section className="card-reviews">
                    <Stack spacing={1}>
                        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                    </Stack>
                    <span className="total-reviews">{reviews}</span>
                </section>
                <section className="card-price">
                    <div className="price">
                        <del>{prevPrice}</del> {newPrice}
                    </div>
                    <div className="bag">
                        <BiSolidCartAdd className="card-icon" onClick={addToCart} />
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Card;
