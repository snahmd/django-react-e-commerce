import React , {useState, useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import Product from '../components/Product'
import {listProducts} from '../actions/productActions'


const HomeScreen = () => {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const {error, loading, products} = productList
    useEffect(async() => {
        dispatch(listProducts)
    }, [])
    console.log('productList')
    return(
        <div>

            <h1>
            Latest Products
            </h1>
            
                

                <Row>
                    {products.map(product => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product}  />
                        </Col>
                    ))}
                </Row>
        </div>
    )
}

export default HomeScreen
