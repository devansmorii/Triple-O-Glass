import React from 'react';
import "../../style/aluminum.css"
import RoundtubesItemcard from './roundtubesitemcard';
import  {roundTubes}  from '../../aluminum-data';

const RoundTubes = () =>{
    
    return(
        <>
            <h2 className="glass-title">Round Tubes</h2>
            <div className="container-glass">
                {roundTubes.map((item, index) =>{
                    return(
                        <RoundtubesItemcard 
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

