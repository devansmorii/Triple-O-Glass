import React from "react";
import { useCart } from "react-use-cart";
import "./style/quote.css"


const Quote = () =>{
    function handleClick() {
        window.location.href = '/customer-form';
    }

    const {
        isEmpty,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
    } = useCart();
    if (isEmpty) return <h1 className="empty-text">No items added</h1>
    return(
        <>
        <div className='all-product'>
        {items.map((item, index)=>{
            return(
                <div className="cart_box" key={index}>
                    <div className="cart_img">
                    <img src={require('../../images/glass_type/' + item.img + '.jpg')}   />
                        <p>{item.title}</p>
                    </div>
                    <div>
                        <button onClick={()=> updateItemQuantity(item.id, item.quantity +1)}> + </button>
                        <button>{item.quantity}</button>
                        <button onClick={()=> updateItemQuantity(item.id, item.quantity -1)}> - </button>
                    </div>
                    <div>
                        <span>{item.price}</span>
                        <button className='addQuote' onClick={()=> removeItem(item.id)}>Remove</button>
                    </div>
                 
                </div>
                
            )
        })}

        <div className='total'>
            <span>Total Price of your Quote</span>
            <span>₱{cartTotal}</span>
        </div>
        <div className='saveContainer'>
            <button className='saveBtn' onClick={handleClick} >Save Quote</button>
        </div>
    </div>

        </>
    );
};

export default Quote;