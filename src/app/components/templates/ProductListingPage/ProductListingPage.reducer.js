import { locale } from '../../../../locale'
import {
  FILTER_TYPE_SIZE,
  LOAD_PRODUCTS_SUCCESS,
  APPLY_FILTER,
  DISPLAY_LOADER,
  HIDE_LOADER,
} from './ProductListingPage.constants'

import {
  getUpdateListOfProducts,
  updateAppliedFilter,
} from './ProductListingPage.helper'

const intialStateOfSizeFilter =
  locale && locale.productListingPage.sizeFilterlabel

const filterApplied = [
  {
    type: FILTER_TYPE_SIZE,
    value: intialStateOfSizeFilter,
  },
]
const intialState = {
  allProducts: [],
  filteredProducts: [],
  filterApplied,
  isLoading: false,
}

const ProductListingPageReducer = (state = intialState, action) => {
  switch (action.type) {
  case LOAD_PRODUCTS_SUCCESS: {
    state = {
      ...state,
      allProducts: action.products,
      filteredProducts: action.products,
    }
    break
  }

  case APPLY_FILTER: {
    const { allProducts, filterApplied } = state
    const { changedOption, filterType } = action
    const updatedFilters = updateAppliedFilter(
      filterApplied,
      filterType,
      changedOption
    )
    const filteredProducts = getUpdateListOfProducts(
      allProducts,
      changedOption
    )
    state = {
      ...state,
      filteredProducts,
      filterApplied: updatedFilters,
    }
    break
  }

  case DISPLAY_LOADER: {
    state = {
      ...state,
      isLoading: action.isLoading,
    }
    break
  }

  case HIDE_LOADER: {
    state = {
      ...state,
      isLoading: action.isLoading,
    }
    break
  }

  default:
  }

  return state
}

export default ProductListingPageReducer
