import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ProductConsumer } from '../context';

class Product extends Component {
    render() {
        const { id, title, img, price, inCart } = this.props.product;
        return (
            <ProductWrapper className="col-9 col-md-6 col-lg-3 my-3 mx-auto ">
                <div className="card">
                    <div className="img-container p-5" 
                    onClick={() => console.log("You clicked me on the image container")}>
                        <Link to="/details">
                            <img className="card-img-top" 
                            src={img} alt="product" />
                        </Link>

                        <button className="card-btn"
                        disabled={inCart ? true : false}
                        onClick={() => 
                            {console.log("added to cart");
                        }}>
                            {
                                inCart ? (
                                    <p className="text-capitalize mb-0" disabled >in inCart</p>
                                ) : (
                                    <i className="fas fa-cart-plus" />
                                )

                            }
                        </button>
                    </div>
                    {/* cart footer */}
                    <div className="cart-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">
                            {title}
                        </p>
                        <h5 className="text-blue font-italic mb-0">
                            <span className="mr-1">$</span>
                            {price}
                        </h5>
                    </div>
                </div>
            </ProductWrapper>
        );
    }
}

export default Product;

const ProductWrapper = styled.div`
    .card {
        border-color: transparent;
        transition: all 1 linear;
    }
    .card-footer {
        background: transparent;
        border-top: transparent;
        transition: all 1 linear;
    }
    &:hover {
        .card {
            border: 0.04rem solid rgba(0, 0, 0, 0.2);
            box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
        }
        .card-footer {
            background: rgba(247, 247, 247); 
        }
    }
    .img-container {
        position: relative;
        overflow: hidden;
    }
    .card-img-top {
        transition: all 1s linear;
    }
    .img-container:hover .card-img-top{
        transform: scale(1.2);
    }
`;