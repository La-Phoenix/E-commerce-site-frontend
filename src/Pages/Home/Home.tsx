import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { Product } from '../../types/Products'
import { sampleProducts } from '../../data'
import { useEffect, useReducer } from 'react';
import * as React from 'react';
import axios from 'axios';
import { getError } from '../../utils';
import { ApiError } from '../../types/ApiError';
import LoadingBox from '../../components/Loading/LoadingBox';
import MessageBox from '../../components/MessageBox/MessageBox';
import ProductItem from '../../components/ProductItem/ProductItem';

/**
 * Interface Home Page State
 */
type State = {
  products: Product[] | string,
  loading: boolean,
  error: string,
};

/**
 * Interface For Reducer API Action
 */
type Action = {
  type: 'FETCH_REQUEST'
} |
{
  type: 'FETCH_SUCCESS',
  payload: Product[]
} |
{
  type: 'FETCH_FAIL',
  payload: string
};

/**
 * Initial Home Page Ste Declaration
 */
const initialState: State = {
  products: [],
  loading: true,
  error: '',
};

/**
 * 
 * @param state Home Page State
 * @param action API Actions
 * @returns State Or Modified State
 */
const reducer = (state: State, action: Action) => {
  switch (action.type){
    case 'FETCH_REQUEST':
      return {...state, loading: false}
    case 'FETCH_SUCCESS':
      return {...state, products: action.payload, loading: false }
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

/**
 * Home Page Component
 * @returns JSX.Element
 */
export default function Home() {
    const [{loading, error, products}, dispatch] = useReducer<React.Reducer<State, Action>>(reducer, initialState)

    /**
     * Called On Component Display, fetches products from backend
     */
    useEffect(() => {
      const fetchData = async () => {
      // Will Turn Off Loading
      dispatch({ type: 'FETCH_REQUEST' })
      // Try Catch Product Fetching
      try {
        const result = await axios.get('/api/products')
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data })
        console.log(result)
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err as ApiError) })
        console.log(err)
        console.log(error)
      }
    };
    fetchData();
  }, [error]);//Dependency is "error", So UseEfect Will Repeat When Error Changes
  
  return (
    loading ? (
      <LoadingBox />
    ) : error ? (
        <MessageBox variant="danger">{ error }</MessageBox>
      ):
        <Row>
          {
            sampleProducts.map((product) => (
              <Col key={product.slug} sm={6} md={4} lg={3}>
                <ProductItem product={product}/>
              </Col>
            ))
          }
        </Row>
    )
}