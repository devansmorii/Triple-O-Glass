import React from 'react';
import "../../style/aluminum.css"
import Storefrontitemcard from './storefrontitemcard';
import  {storeFront}  from '../../aluminum-data';

const RoundTubes = () =>{
    
    return(
        <>
            <h2 className="glass-title">Store Front</h2>
            <div className="container-glass">
                {storeFront.map((item, index) =>{
                    return(
                        <Storefrontitemcard 
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

export default RoundTubes;

