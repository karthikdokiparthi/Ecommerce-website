import "./Category.css";
import Input from "../../Components/Input";

function Category({ handleChange }) {
    return (
        <div>
            <h2 className="sidebar-title">Category</h2>

            <div>
                <label className="sidebar-label-container">
                    <input onChange={handleChange} type="radio" value="" name="test" />
                    <span className="checkmark"></span>All
                </label>
                <Input
                    handleChange={handleChange}
                    value="shirts"
                    title="Shirts"
                    name="test"
                />
                <Input
                    handleChange={handleChange}
                    value="pants"
                    title="Pants"
                    name="test"
                />
                <Input
                    handleChange={handleChange}
                    value="ladies"
                    title="Ladies dress"
                    name="test"
                />
                <Input
                    handleChange={handleChange}
                    value="womens"
                    title="Sarees"
                    name="test"
                />
                <Input
                    handleChange={handleChange}
                    value="sneakers"
                    title="Sneakers"
                    name="test"
                />
                <Input
                    handleChange={handleChange}
                    value="flats"
                    title="Flats"
                    name="test"
                />
                <Input
                    handleChange={handleChange}
                    value="sandals"
                    title="Sandals"
                    name="test"
                />
                <Input
                    handleChange={handleChange}
                    value="heels"
                    title="Heels"
                    name="test"
                />

            </div>
        </div>
    );
}

export default Category;