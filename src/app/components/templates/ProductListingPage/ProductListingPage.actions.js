import {
  LOAD_PRODUCTS,
  APPLY_FILTER,
  LOAD_PRODUCTS_SUCCESS,
  DISPLAY_LOADER,
  HIDE_LOADER,
} from './ProductListingPage.constants'

export function loadProducts(state) {
  return {
    type: LOAD_PRODUCTS,
    ...state,
  }
}

export function loadProductsSuccess(products) {
  return {
    type: LOAD_PRODUCTS_SUCCESS,
    allProducts: products,
  }
}

export function applyFilter(state) {
  const { filterApplied } = state
  return {
    type: APPLY_FILTER,
    filterApplied,
  }
}

export function displayLoader(state) {
  const { isLoading } = state
  return {
    type: DISPLAY_LOADER,
    isLoading,
  }
}

export function hideLoader(state) {
  const { isLoading } = state
  return {
    type: HIDE_LOADER,
    isLoading,
  }
}
