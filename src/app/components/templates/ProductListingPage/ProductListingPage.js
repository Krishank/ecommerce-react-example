import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Row } from 'styled-bootstrap-grid'
import { Loader } from '../../molecules'
import { ErrorBoundary } from '../../../ErrorBoundary'

/**
 * @desc Product List Page is the component which is connected with Redux and pass needed data
 * to Filter Header and Product List Component
 */

import {
  getSelectedFilterValue,
  getUpdateListOfProducts,
  updateAppliedFilter,
} from './ProductListingPage.helper'

import { applyFilter } from './ProductListingPage.actions'
import { ProductList, FilterHeader } from '../../organisms'
import { FILTER_TYPE_SIZE } from './ProductListingPage.constants'
import { locale, sizeOptions } from '../../../../locale'

const { filterHeaderError, productListError } = locale.errors

const filterProductsData = ({ changedOption }, props) => {
  const { allProducts, filterApplied } = props

  // TO DO: Write a seprate helper to update applied filter status as multiple filter can be added
  const updatedFilters = updateAppliedFilter(
    filterApplied,
    FILTER_TYPE_SIZE,
    changedOption
  )
  props.applyFilter({
    allProducts,
    filterApplied: updatedFilters,
  })
}

const ProductListingPage = React.memo(function ProductListingPage(props) {
  const { allProducts, filterApplied, isLoading } = props
  const selectedValue = getSelectedFilterValue(filterApplied, FILTER_TYPE_SIZE)

  const filterProducts = getUpdateListOfProducts(allProducts, selectedValue)
  return (
    <Fragment>
      {isLoading && <Loader />}
      <Row>
        <ErrorBoundary erroMessage={filterHeaderError}>
          <FilterHeader
            sizeOptions={sizeOptions}
            selectedOption={selectedValue}
            getSelectedOptions={changedOption =>
              filterProductsData(changedOption, props)
            }
          />
        </ErrorBoundary>
      </Row>

      <Row>
        <ErrorBoundary erroMessage={productListError}>
          <ProductList products={filterProducts} />
        </ErrorBoundary>
      </Row>
    </Fragment>
  )
})

ProductListingPage.defaultProps = {
  isLoading: false,
}

ProductListingPage.propTypes = {
  allProducts: PropTypes.array.isRequired,
  filterApplied: PropTypes.arrayOf(PropTypes.object).isRequired,
  applyFilter: PropTypes.func,
  isLoading: PropTypes.bool,
}

const mapStateToProps = state => {
  // improve
  return {
    allProducts: state.ProductListingPageReducer.allProducts,
    isLoading: state.ProductListingPageReducer.isLoading,
    filterApplied: state.ProductListingPageReducer.filterApplied,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    applyFilter: state => {
      dispatch(applyFilter(state))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListingPage)

export { ProductListingPage }
