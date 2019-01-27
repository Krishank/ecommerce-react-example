import React from 'react'
import PropTypes from 'prop-types'
import ProductStyled from './Product.style'
import { Img, Text } from '../../atoms'
import { Tag } from '../index'
import { locale } from '../../../../locale'

const { exclusive, sale } = locale.tagLabel

/**
 * @desc Product component can use to render single product tupple
 * this component manages its own whitlable style
 */

const Product = React.memo(function Product(props) {
  const {
    productName,
    price,
    isSale,
    isExclusive,
    productImage,
  } = props.productData
  return (
    <ProductStyled>
      <div className="product-tupple">
        <Img
          title={productName}
          alt={productName}
          src={`images/${productImage}`}
        />

        {isSale && <Tag className="product-sale" tagLabel={sale} />}
        {isExclusive && (
          <Tag className="product-exclusive" tagLabel={exclusive} />
        )}

        <div className="product-details">
          <Text className="product-name" emphasized>
            {productName}
          </Text>
          <Text className="product-price" size="medium" emphasized>
            {price}
          </Text>
        </div>
      </div>
    </ProductStyled>
  )
})

Product.propTypes = {
  productData: PropTypes.shape({
    productImage: PropTypes.string,
    productName: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    isExclusive: PropTypes.bool.isRequired,
    isSale: PropTypes.bool.isRequired,
  }).isRequired,
}
export default Product
