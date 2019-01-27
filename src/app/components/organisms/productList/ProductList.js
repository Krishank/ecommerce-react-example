import React from 'react'
import PropTypes from 'prop-types'
import ProductListStyled from './ProductList.styled'
import { Product } from '../../molecules'

/**
 * @desc Product List component is responsible for rendering multiple Products
 * this component manages its own whitlable style to ensure all product will reder as expected layout
 */

const genrateProducts = productsData => {
  return (
    productsData &&
    productsData.map(product => {
      const { index } = product
      return <Product key={index} productData={product} />
    })
  )
}

const ProductList = React.memo(function ProductList(props) {
  const { products } = props
  return <ProductListStyled>{genrateProducts(products)}</ProductListStyled>
})

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      productImage: PropTypes.string.isRequired,
      productName: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      isExclusive: PropTypes.bool.isRequired,
      isSale: PropTypes.bool.isRequired,
    })
  ).isRequired,
}

export default ProductList
