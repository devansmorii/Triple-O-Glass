import React from 'react';
import "../../style/aluminum.css"
import ShowerEnclosureItemcard from './showerenclosureitemcard';
import  {showerEnclosure}  from '../../aluminum-data';

const ShowerEnclosure = () =>{
    
    return(
        <>
            <h2 className="glass-title">Shower Enclosure</h2>
            <div className="container-glass">
                {showerEnclosure.map((item, index) =>{
                    return(
                        <ShowerEnclosureItemcard 
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

export default ShowerEnclosure;

