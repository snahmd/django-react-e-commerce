import React,{useState,useEffect} from 'react'
import {Col,Row } from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import axios from 'axios'
import { useDispatch,useSelector } from 'react-redux'
import {listProducts} from '../actions/productActions'
const HomeScreen= () =>{
    const dispatch=useDispatch()
    const productList =useSelector(state=>state.productList)
    const  {error, loading, products}= productList
    useEffect(async() => {
        console.log('calisti')
        dispatch(listProducts())
    }, [dispatch])
    return (
        <div>
            <h1>Latest Products</h1>
            {loading ? <Loader /> 
                : error ? <Message variant='danger'>{error}</Message>
                :
                <Row>
                {
                    products.map((product)=>{
                        return(
                            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                <Product product={product}/>
                            </Col>
                        )
                    })
                }
                </Row>

            }
            
            
        </div>
    )
}
export default HomeScreen