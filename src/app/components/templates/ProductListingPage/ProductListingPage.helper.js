/**
 * @desc All Locale Helpers
 * getSelectedFilterValue: As the Filters are an Array of Object which include type and value
 * this helper will send us data in formatt of "S", "M" or "L"
 * updateAppliedFilter: As in future there can be multiple filter like price, rating and many more this
 * helper will update applied filter as per user selection
 */

export function getSelectedFilterValue(activeFilters, filterType) {
  const filteredObject =
    activeFilters &&
    activeFilters.reduce(data => {
      if (data.type === filterType) return data.value
    })

  return filteredObject && filteredObject.value
}

export function getUpdateListOfProducts(productList, filterValue) {
  if (filterValue === '' || filterValue === 'Filter by size') {
    return productList
  } else {
    return productList.filter(productList =>
      productList.size.includes(filterValue)
    )
  }
}

// TO DO: Make it more Genric so we can it for multiple type and multiple filter

export function updateAppliedFilter(activeFilters, filterType, changedOption) {
  const selectedValue = getSelectedFilterValue(activeFilters, filterType)
  const updatedFilterType =
    activeFilters &&
    activeFilters.filter(data => {
      if (data.type === filterType && data.value === selectedValue) {
        return data
      }
    })
  if (updatedFilterType.length > 0) {
    updatedFilterType[0].value = changedOption
  }
  return updatedFilterType
}
