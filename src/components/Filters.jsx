import {useState} from "react";

const Filters = ({filter, setFilter}) => {
    return (
        <div className=" filters shadow container">
            <form>
                <div className="field">
                    <label>Filter Expenses</label>
                    <select
                        value={filter}
                        onChange={e => setFilter(e.target.value)}
                    >
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