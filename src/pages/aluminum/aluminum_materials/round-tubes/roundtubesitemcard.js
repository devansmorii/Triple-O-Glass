import React, {useState, useEffect} from 'react';
import "../../style/aluminum.css"
import { useCart } from 'react-use-cart';



const RoundtubesItemcard = (props) =>{
    const { addItem } = useCart();
    
    const [popupcontent, setpopupcontent] = useState([]);
    const [popuptoggle, setpopuptoggle] = useState(false);
    const [selectedColor, setSelectedColor] = useState('');
    const [price, setPrice] = useState(0);
    const changecontent = (props) =>{
        setpopupcontent([props]);
        setpopuptoggle(!popuptoggle);

    };

    const handleChange1 = (event) => {
        setSelectedColor(event.target.value);
    };

    const handlePrice = () =>{
        let ans1, ans2, ans3, ans4 = 0;
        popupcontent.map((item) =>{
            ans1 = item.price1
            ans2 = item.price2
            ans3 = item.price3
            ans4 = item.price4
            
        })
        if(selectedColor === "Mill Finish") {
          setPrice(ans1)
        } else if (selectedColor === "Anodized") {
          setPrice(ans2);
        } else if (selectedColor === "Analok") {
          setPrice(ans3);
        } else if (selectedColor === "Powder Coated") {
          setPrice(ans4);
        } else {
          setPrice(0);
        }
    }

    useEffect(() => {
        handlePrice();
    }, [selectedColor]);


    return(
        <>
            <div className="glass-cards" onClick={()=> changecontent(props)}>
                <div className="image-box">
                    <img src={require('../../../../images/aluminum_type/round-tube/' + props.img + '.jpg')} alt="Image" />
                </div>
                <div className="details">
                    <p>{props.title}</p>
                    <button className="addQuoteBtn" onClick={()=> changecontent(props)}>Add to Quote</button>
                </div>
             </div>

             {popuptoggle && <div className="popup_container">
                <div className="popup_body">
                    <div className="popup_header">
                        <button className='xBtn' onClick={changecontent}>x</button>
                    </div>
                    <div className="popup_content">
                        {popupcontent.map((pop)=>{
                                return(
                                    <div>
                                        <div className='left-popup'>
                                            <img className='popup-image' src={require('../../../../images/aluminum_type/round-tube/' + pop.img + '.jpg')} alt="" />
                                            <h3 className='popup-title'>{pop.title}</h3>
                                        </div>
                                        <div className="right-content">
                                            <p className='right-contents'>Code: {pop.code}</p>
                                            <p>Product Description: {pop.pDescription}</p>
                                            <label>
                                                Color:
                                                <select className='ddthickness' value={selectedColor} onChange={handleChange1}>
                                                    <option value="Mill Finish">Mill Finish</option>
                                                    <option value="Anodized">Anodized</option>
                                                    <option value="Analok">Analok</option>
                                                    <option value="Powder Coated">Powder Coated</option>
                                                </select>
                                            </label>
                                            <br />
                                            <h4 className='price'>Unit Price: ₱ {price} </h4>
                                            <button className='addQuote' onClick={()=>addItem(pop.item)}>Add to Quote</button>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                </div>
            </div>}

        </>
    );
};

export default RoundtubesItemcard;

