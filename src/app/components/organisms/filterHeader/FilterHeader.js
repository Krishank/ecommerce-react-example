import React from 'react'
import PropTypes from 'prop-types'
import { Col } from 'styled-bootstrap-grid'

import FilterHeaderStyled from './FilterHeader.style'
import { locale } from '../../../../locale'
import { SelectBox, Heading } from '../../atoms'

/**
 * @desc Filter Header component has Main Heading and Size filter (Select Box)
 * this component manages its own whitlable style
 */

const FilterHeader = React.memo(props => {
  const { heading, sizeFilterlabel } = locale.productListingPage
  const { selectedOption, getSelectedOptions, sizeOptions } = props
  const { H2 } = Heading

  const passSelectedOptionToParent = changedOption => {
    getSelectedOptions({ changedOption })
  }
  return (
    <FilterHeaderStyled>
      <Col md="6">
        <H2 emphasized size="large">
          {heading}
        </H2>
      </Col>
      <Col md="6">
        <SelectBox
          htmlFor={sizeFilterlabel}
          lable={sizeFilterlabel}
          options={sizeOptions}
          selectedOption={selectedOption}
          passSelectedOption={changedOption =>
            passSelectedOptionToParent(changedOption)
          }
        />
      </Col>
    </FilterHeaderStyled>
  )
})

FilterHeader.propTypes = {
  selectedOption: PropTypes.string,
  getSelectedOptions: PropTypes.func,
  sizeOptions: PropTypes.arrayOf(PropTypes.object),
}

export default FilterHeader
