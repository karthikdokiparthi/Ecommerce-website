import Input from "../../Components/Input";

import "./Price.css";

const Price = ({ handleChange }) => {
    return (
        <>
            <div className="ml">
                <h2 className="sidebar-title price-title">Price</h2>

                <label className="sidebar-label-container">
                    <input onChange={handleChange} type="radio" value="" name="test2" />
                    <span className="checkmark"></span>All
                </label>

                <Input
                    handleChange={handleChange}
                    value={900}
                    title="Rs.0 - 1000"
                    name="test2"
                />

                <Input
                    handleChange={handleChange}
                    value={1200}
                    title="Rs.1000 - 1500"
                    name="test2"
                />

                <Input
                    handleChange={handleChange}
                    value={1500}
                    title="Rs.1500 - 2000"
                    name="test2"
                />

                <Input
                    handleChange={handleChange}
                    value={2000}
                    title="Over Rs.2000"
                    name="test2"
                />
            </div>
        </>
    );
};

export default Price;