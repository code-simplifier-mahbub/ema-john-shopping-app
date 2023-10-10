import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = ({product, handleRemoveItem}) => {
    
    const {id, img, name, price, quantity } = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className="review-detail-container">
                <div className="review-detail">
                    <h3>{name}</h3>
                    <p>Price : <small>${price}</small></p>
                    <p>quantity :<small> ${quantity}</small></p>
                </div>
                <div onClick={()=> handleRemoveItem(id)} className="delete-container">
                    <button className='btn-delete'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;