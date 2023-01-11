import React from 'react';
import "../../style/aluminum.css"
import SwingScreendooritemcard from './swingscreendooritemcard';
import  {swingscreenDoor}  from '../../aluminum-data';

const SwingScreenDoor = () =>{
    
    return(
        <>
            <h2 className="glass-title">Swing Screen Door</h2>
            <div className="container-glass">
                {swingscreenDoor.map((item, index) =>{
                    return(
                        <SwingScreendooritemcard 
                        img={item.img} 
                        title={item.title} 
                        code={item.code} 
                        description={item.pDescription} 
                        price1={item.price1} 
                        price2={item.price2} 
                        price3={item.price3} 
                        price4={item.price4} 
                        item={item}
                        key={index} />
                    );
                })}
            </div>


        </>
    );
};

export default SwingScreenDoor;

