import React from "react";
import { useCart } from "react-use-cart";
import logo from "../../logo/logo.png"
import "./style/receipt.css"

const Receipt = () => {
    function handleClick() {
        window.print();
    }
    const {
        isEmpty,
        items,
        cartTotal,
    } = useCart();
    if (isEmpty) return <h1 className="empty-text">No items added</h1>
    return(
        <paper className="receipt-container">
            <div className="top-container">
            <img src={logo} alt="Logo" className="logo"/>
            <h4 className="title">TRIPLE O GLASS</h4>
            </div>
            <h2 className="title-quote">Quote Invoice</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
            {items.map((item, index)=>{
                return(
                    <tr key={index}>
                            <td>{item.title}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price}</td>
                        </tr>
                )})}
                <p className="total-price"> Total Price : {cartTotal} </p>
                </tbody>
            </table>
            <button className="print-btn" onClick={handleClick}>Print Quote</button>
        </paper>
        
    )
}

export default Receipt