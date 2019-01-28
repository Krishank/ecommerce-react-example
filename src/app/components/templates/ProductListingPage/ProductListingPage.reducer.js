import { locale } from '../../../../locale'
import {
  FILTER_TYPE_SIZE,
  LOAD_PRODUCTS_SUCCESS,
  APPLY_FILTER,
  DISPLAY_LOADER,
  HIDE_LOADER,
} from './ProductListingPage.constants'

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
  filterApplied,
  isLoading: false,
}

const ProductListingPageReducer = (state = intialState, action) => {
  switch (action.type) {
  case LOAD_PRODUCTS_SUCCESS:
    state = {
      ...state,
      allProducts: action.products,
      isLoading: action.isLoading,
    }
    break

  case APPLY_FILTER:
    state = {
      ...state,
      filterApplied: action.filterApplied,
    }
    break

  case DISPLAY_LOADER:
    state = {
      ...state,
      isLoading: action.isLoading,
    }
    break

  case HIDE_LOADER:
    state = {
      ...state,
      isLoading: action.isLoading,
    }
    break

  default:
  }

  return state
}

export default ProductListingPageReducer
