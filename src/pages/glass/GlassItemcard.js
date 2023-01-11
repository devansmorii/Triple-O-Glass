import React, {useState, useEffect} from 'react';
import {size} from './glass-data';
import { thickness } from './glass-data';
import "./style/glass.css"
import { useCart } from 'react-use-cart';


const GlassItemcard = (props) =>{

    const { addItem } = useCart();

    const [popupcontent, setpopupcontent] = useState([]);
    const [popuptoggle, setpopuptoggle] = useState(false);
    const [price, setPrice] = useState(0);
    const [inputLength, setInputLength] = useState(0);  
    const [inputWidth, setInputWidth] = useState(0);
    const [CustomPrice, setCustomPrice] = useState(0);
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedThickness, setSelectedThickness] = useState('');
        const changecontent = (props) =>{
        setpopupcontent([props]);
        setpopuptoggle(!popuptoggle);
        setSelectedSize('');
        setSelectedThickness('');
        setInputLength('');
        setInputWidth('');
    };
    const [isOpen, setIsOpen] = useState(false);

    function togglePopup() {
    setIsOpen(!isOpen);
    }

    const handleChange1 = (event) => {
        setSelectedSize(event.target.value);
      };
    
    const handleChange2 = (event) => {
        setSelectedThickness(event.target.value);
    };

    function handleSubmit(event) {
      event.preventDefault();
      setCustomPrice(inputLength*inputWidth)
      handlePrice();
    }

    const handlePrice = () =>{
        let ans = 0;
        popupcontent.map((item) =>{
            ans=item.price
        })
        if (selectedSize === '3x7' && selectedThickness === '1/4') {
            setPrice(ans*1/4*21)
          } else if (selectedSize === '3x7' && selectedThickness === '1/8') {
            setPrice(ans*1/8*21);
          } else if (selectedSize === '3x7' && selectedThickness === '3/16') {
            setPrice(ans*3/16*21);
          } else if (selectedSize === '3x7' && selectedThickness === '7/32') {
            setPrice(ans*7/32*21);
          } else if (selectedSize === '4x6' && selectedThickness === '1/4') {
            setPrice(ans*1/4*24)
          } else if (selectedSize === '4x6' && selectedThickness === '1/8') {
            setPrice(ans*1/8*24);
          } else if (selectedSize === '4x6' && selectedThickness === '3/16') {
            setPrice(ans*3/16*24);
          } else if (selectedSize === '4x6' && selectedThickness === '7/32') {
            setPrice(ans*7/32*24);
          }else if (selectedSize === '4x7' && selectedThickness === '1/4') {
            setPrice(ans*1/4*28)
          } else if (selectedSize === '4x7' && selectedThickness === '1/8') {
            setPrice(ans*1/8*28);
          } else if (selectedSize === '4x7' && selectedThickness === '3/16') {
            setPrice(ans*3/16*28);
          } else if (selectedSize === '4x7' && selectedThickness === '7/32') {
            setPrice(ans*7/32*28);
          }else if (selectedSize === '4x8' && selectedThickness === '1/4') {
            setPrice(ans*1/4*32)
          } else if (selectedSize === '4x8' && selectedThickness === '1/8') {
            setPrice(ans*1/8*32);
          } else if (selectedSize === '4x8' && selectedThickness === '3/16') {
            setPrice(ans*3/16*32);
          } else if (selectedSize === '4x8' && selectedThickness === '7/32') {
            setPrice(ans*7/32*32);
          } else if (selectedSize === '5x7' && selectedThickness === '1/4') {
            setPrice(ans*1/4*35)
          } else if (selectedSize === '5x7' && selectedThickness === '1/8') {
            setPrice(ans*1/8*35);
          } else if (selectedSize === '5x7' && selectedThickness === '3/16') {
            setPrice(ans*3/16*35);
          } else if (selectedSize === '5x7' && selectedThickness === '7/32') {
            setPrice(ans*7/32*35);
          } else if (selectedSize === 'none' && selectedThickness === '1/4') {
            setPrice(ans*1/4*CustomPrice + 50);
          } else if (selectedSize === 'none' && selectedThickness === '1/8') {
            setPrice(ans*1/8*CustomPrice + 50);
          } else if (selectedSize === 'none' && selectedThickness === '3/16') {
            setPrice(ans*3/16*CustomPrice + 50);
          } else if (selectedSize === 'none' && selectedThickness === '7/32') {
            setPrice(ans*7/32*CustomPrice + 50);
          }else {
            setPrice(0);
          }
    }


    useEffect(() => {
       handlePrice();
    }, [selectedSize, selectedThickness]);


    return(
        <>
             <div className="glass-cards" onClick={()=> changecontent(props)}>
                <div className="image-box">
                    <img src={require('../../images/glass_type/' + props.img + '.jpg')} alt="Image" />
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
                                            <img className='popup-image' src= {require('../../images/glass_type/' + pop.img + '.jpg')} alt="Image"/>
                                            <h3 className='popup-title'>{pop.title}</h3>
                                        </div>
                                        <div className="right-content">
                                            <p className='right-contents'>Code: {pop.code}</p>
                                            <p>Product Description: {pop.description} </p>
                                            <label>
                                                Size:
                                                <select className='ddsize' value={selectedSize} onChange={handleChange1}>
                                                    {size.map((option) => (
                                                        <option value={option.value} key={option.value}>
                                                         {option.name}
                                                        </option>
                                                     ))}
                                                </select>
                                            </label>
                                            <br />
                                            <label>
                                                Thickness:
                                                <select className='ddthickness' value={selectedThickness} onChange={handleChange2}>
                                                    {thickness.map((option) => (
                                                        <option value={option.value} key={option.value}>
                                                         {option.name}
                                                        </option>
                                                     ))}
                                                </select>
                                            </label>
                                            <div className='custom-dialog'>
                                                <p>Do you like to customize the size of the product?</p>
                                                <p className='custom-note'>Note: Additional 50 pesos will be added on the unit price.</p>
                                                <button className='custom_btn' onClick={togglePopup}>Customize</button>
                                            </div>
                                            {isOpen && (
                                                <div>
                                                    <form className='customForm' onSubmit={handleSubmit}>
                                                        <label>
                                                        Width (in ft):
                                                        <input type="number" value={inputWidth} onChange={event => setInputWidth(event.target.value)} name="width" />
                                                        </label>
                                                        <label>
                                                         Length (in ft):
                                                        <input type="number" value={inputLength} onChange={event => setInputLength(event.target.value)}name="length" />
                                                        </label>
                                                        <button className="submit_btn" type="submit" onClick={handleSubmit}>Submit</button>
                                                    </form>
                                                </div>
                                            )}
                                            <h4 className='price' value={price} onChange={(e) => {setPrice(e.target.value)}}>Unit Price: ₱ {price}</h4>
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

export default GlassItemcard;