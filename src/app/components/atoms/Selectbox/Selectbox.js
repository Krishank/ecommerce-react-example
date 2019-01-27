import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { sizeOptions } from '../../../../locale'
import SelectBoxStyled from './Selectbox.style'

/**
 * @desc selectbox component can be used to display a list of options.
 * this component manages its own whitlable style
 */

class SelectBox extends PureComponent {
  constructor(props) {
    super(props)
    const { selectedOption, passSelectedOption } = props
    this.passSelectedOption = passSelectedOption
    this.state = {
      value: selectedOption,
    }
  }

  onChange(e) {
    const changedValue = e.target.value
    this.passSelectedOption(changedValue)
    this.setState({
      value: changedValue,
    })
  }

  render() {
    const { htmlFor, lable, options } = this.props
    const { value } = this.state
    return (
      <SelectBoxStyled className="form-group">
        {/* eslint-disable jsx-a11y/label-has-for */}
        <label htmlFor={htmlFor} id={htmlFor}>
          {lable}
        </label>
        <select
          value={value}
          onChange={this.onChange.bind(this)}
          className="form-control-select-box"
        >
          {options.map(option => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </SelectBoxStyled>
    )
  }
}

SelectBox.propTypes = {
  htmlFor: PropTypes.string,
  lable: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  selectedOption: PropTypes.string,
  passSelectedOption: PropTypes.func,
}

SelectBox.defaultProps = {
  options: sizeOptions,
}

export default SelectBox
