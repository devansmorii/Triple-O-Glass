import React from 'react';
import "../../style/aluminum.css"
import AngleItemCard from './angleitemcard';
import  {angle}  from '../../aluminum-data';

const Angle = () =>{
    
    return(
        <>
            <h2 className="glass-title">Angle</h2>
            <div className="container-glass">
                {angle.map((item, index) =>{
                    return(
                        <AngleItemCard 
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

export default Angle;

