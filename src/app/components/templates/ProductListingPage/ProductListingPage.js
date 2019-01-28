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

import { getSelectedFilterValue } from './ProductListingPage.helper'

import { applyFilter } from './ProductListingPage.actions'
import { ProductList, FilterHeader } from '../../organisms'
import { FILTER_TYPE_SIZE } from './ProductListingPage.constants'
import { locale, sizeOptions } from '../../../../locale'

const { filterHeaderError, productListError } = locale.errors

const filterProductsData = ({ changedOption }, props) => {
  // TODO: Selected filter should send its type
  props.applyFilter({
    changedOption,
    filterType: FILTER_TYPE_SIZE,
  })
}

const ProductListingPage = React.memo(function ProductListingPage(props) {
  const { filteredProducts, filterApplied, isLoading } = props
  const selectedValue = getSelectedFilterValue(filterApplied, FILTER_TYPE_SIZE)

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
          <ProductList products={filteredProducts} />
        </ErrorBoundary>
      </Row>
    </Fragment>
  )
})

ProductListingPage.defaultProps = {
  isLoading: false,
}

ProductListingPage.propTypes = {
  filteredProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterApplied: PropTypes.arrayOf(PropTypes.object).isRequired,
  applyFilter: PropTypes.func, // eslint-disable-line react/no-unused-prop-types
  isLoading: PropTypes.bool,
}

const mapStateToProps = state => {
  // improve
  return {
    filteredProducts: state.ProductListingPageReducer.filteredProducts,
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

export { ProductListingPage } // eslint-disable-line import/no-named-as-default
