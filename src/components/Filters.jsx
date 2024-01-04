import {useState} from "react";

const Filters = () => {
    return (
        <div className=" filters shadow container">
            <form>
                <div className="field">
                    <label>Filter Expenses</label>
                    <select>
                        <option value="">--Select--</option>
                        <option value="savings">Savings</option>
                        <option value="food">Food</option>
                        <option value="home">Home</option>
                        <option value="expenses">Miscellaneous Expenses</option>
                        <option value="leisure">Leisure</option>
                        <option value="health">Health</option>
                        <option value="subscriptions">Subscriptions</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Filters