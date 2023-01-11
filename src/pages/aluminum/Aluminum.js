import React from 'react';
import {aluminumList} from './aluminum-data';
import './style/aluminum.css';
import { NavLink } from 'react-router-dom';

function Aluminum(){
    return (
        <>
            <h2 className="glass-title">Aluminum</h2>
            <div className="container-glass">
                {aluminumList.map((aluminumItem) => {
                    return(
                        <div className="glass-cards">
                            <NavLink to={aluminumItem.path}>
                                <div className="image_box">
                                    <img src= {require('../../images/aluminum_type/' + aluminumItem.img + '.jpg')} alt="Image"/>
                                </div>
                            </NavLink>
                            <div className="details">
                                <p>{aluminumItem.title}</p>
                            </div>
                        </div>
                    );
                })}
            </div>    
        </>

    )
}

export default Aluminum;