import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';

class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { id,
                        company,
                        img,
                        info,
                        price,
                        title,
                        inCart
                    } = value.detailProduct;
                    return (
                        <div className="container py-5">
                            {/* title  */}
                            <div className="row">
                                <div className="col-10 col-md-6 mx-auto my-5 text-center text-slanted text-blue">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/* title end  */}
                            {/* product info  */}
                            <div className="row">
                                <div className="col-10 col-md-6 mx-auto my-3">
                                    <img className="img-fluid" alt="product" src={img} />
                                </div>
                                {/* product discript */}
                                <div className="col-10 col-md-6 mx-auto my-3">
                                    <h2>Model: {title}</h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        Made by: <span className="text-uppercase">{company}</span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            Price: <span>$</span>
                                            {price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        Some info about product:
                                    </p>
                                    <p className="text-muted lead">{info}</p>
                                    {/* button  */}
                                    <Link to="/">
                                        <ButtonContainer>
                                            back to product
                                        </ButtonContainer>
                                    </Link>
                                    <ButtonContainer 
                                    cart
                                    disabled={inCart ? true : false} 
                                    onClick={() => { value.addToCart(id);
                                    }}>
                                        {inCart ? "inCart" : "add to cart"}
                                    </ButtonContainer>
                                </div>
                            </div>
                        </div>
                    );
                }}
            </ProductConsumer>
        );
    }
}
    
export default Details;