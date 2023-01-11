import React from 'react';
import "../../style/aluminum.css"
import SwingDooritemcard from './swingdooritemcard';
import  {swingDoor}  from '../../aluminum-data';

const SwingDoor = () =>{
    
    return(
        <>
            <h2 className="glass-title">Swing Door</h2>
            <div className="container-glass">
                {swingDoor.map((item, index) =>{
                    return(
                        <SwingDooritemcard 
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

export default SwingDoor;

