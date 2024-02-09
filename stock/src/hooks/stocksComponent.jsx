// https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/SBI
// https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/NLC 

import { useState } from "react";
import StockData from "./stocksApiComponent";

export default function StockDataComponent() {
    
    var [stockList, setStockList] = useState([]);
    var [stockName, setStockName] = useState("");
    
    function addStockToArray() {
        setStockList([...stockList, stockName])
        setStockName("");
    }
    
    function clearStockList() {
        setStockList([]);
    }
    
    return (
        <div>
            <input type="text" value={stockName}
                onChange={(event) => setStockName(event.target.value)} />
            
            <input type="button" value="Add Stock"
                onClick={addStockToArray} />
            
            <input type="button" value="Clear Stock"
                onClick={clearStockList} />
            
            {stockList.map(stockUrl => {
                return (
                    <StockData url={stockUrl}></StockData>
                )
            })}
        </div>
    )
}
