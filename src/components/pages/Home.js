import React, { useState } from 'react';
import predictionService from '../../services/predictions'
import { MenuItem } from '@material-ui/core';
import Select from '@material-ui/core/Select';
const Home = () => {
    const [id, setId] = useState('')
    const [idVal, setIdVal] = useState('')
    const [cprice, setCprice] = useState('')
    const [catType, setCatType] = useState('')
    const [orders, setOrders] = useState('')
    const onId = (event) => {
        setId(event.target.value)
    }
    const onIdVal = (event) => {
        setIdVal(event.target.value)
    }
    const onCprice = (event) => {
        setCprice(event.target.value)
    }
    const onCatType = (event) => {
        setCatType(event.target.value)
    }
    const makeReq=(event)=>{
        event.preventDefault()
        predictionService.postAll({"option":id,"option-val":idVal,"category":catType,"checkout-price":cprice}).then(response => {setOrders(response.data)})
    }
    return(
        <div>
            <h1 >Welcome to AppyFuzz Optimal Demand Prediction</h1>
            <h2 >This platform is part of a project for IBM Hack Challenge 2020 competition.</h2>
            <h2>Problem Statement: Optimized Warehouse Management of Perishable Goods for a Food Delivery Company</h2>
            <p>A food delivery service has to deal with a lot of perishable raw materials which makes it all, the most important factor for such a company is to accurately forecast daily and weekly demand. Too much inventory in the warehouse means more risk of wastage, and not enough could lead to out-of-stocks - and push customers to seek solutions from your competitors. The replenishment of majority of raw materials is done on weekly basis and since the raw material is perishable, the procurement planning is of utmost importance.</p>
            <h2>Our Solution</h2>
            <p>We have aimed at making a Machine Learning model that will be able to predict the demand for the next 10 weeks, thereby help companies and warehouses in their optimal stocking of perishable goods.</p>
            <h1>Predict</h1>
            <form onSubmit={makeReq}>
                <Select value={id} onChange={onId}>
                    <MenuItem value={1}>Meal ID</MenuItem>
                    <MenuItem value={2}>Center ID</MenuItem>
                </Select>
                ID Value:<input value={idVal} onChange={onIdVal} /><br />
                Checkout Price:<input value={cprice} onChange={onCprice} /><br />
                Category Type:<input value={catType} onChange={onCatType} /><br />
                <button type="submit">Predict</button><br />
                No. of Orders: {orders}
            </form>
        </div>
    )
}

export default Home