import React from 'react';
import "../../style/aluminum.css"
import SlidingDooritemcard from './slidingdooritemcard';
import  {slidingDoorList}  from '../../aluminum-data';

const SlidingDoor = () =>{
    
    return(
        <>
            <h2 className="glass-title">Sliding Door</h2>
            <div className="container-glass">
                {slidingDoorList.map((item, index) =>{
                    return(
                        <SlidingDooritemcard 
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

export default SlidingDoor;

