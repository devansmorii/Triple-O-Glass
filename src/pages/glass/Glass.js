import React from 'react';
import "./style/glass.css"
import GlassItemcard from './GlassItemcard';
import  {glassList}  from './glass-data';

const Glass = () =>{
    
    return(
        <>
            <h2 className="glass-title">GLASS</h2>
            <div className="container-glass">
                {glassList.map((item, index) =>{
                    return(
                        <GlassItemcard 
                        img={item.img} 
                        title={item.title} 
                        code={item.code} 
                        description={item.description} 
                        price={item.price} 
                        item={item}
                        key={index} />
                    );
                })}
            </div>


        </>
    );
};

export default Glass;