import './Recomm.css'
import Button from '../Components/Button'

const Recomm = ({ handleClick }) => {
    return (
        <>
            <div>
                <h2 className="recommended-title">Recommended</h2>
                <div className="recommended-flex">

                    <Button onClickHandler={handleClick} value="" title="All Products" />
                    <Button onClickHandler={handleClick} value="Casual" title="Casual Shirts" />
                    <Button onClickHandler={handleClick} value="Formal" title="Formal Shirts" />
                    <Button onClickHandler={handleClick} value="Formal-WM" title="Womens Formals" />
                    <Button onClickHandler={handleClick} value="Design" title="Designed Sarees" />
                    <Button onClickHandler={handleClick} value="Cotton" title="Cotton Dress" />
                    <Button onClickHandler={handleClick} value="Silk" title="Silk Sarees" />
                    <Button onClickHandler={handleClick} value="Cargo" title="Cargo" />
                    <Button onClickHandler={handleClick} value="Nike" title="Nike" />
                    <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
                    <Button onClickHandler={handleClick} value="Puma" title="Puma" />
                </div>
            </div>
        </>
    );
};
export default Recomm;