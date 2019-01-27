import React from 'react'
import PropTypes from 'prop-types'
import { Text } from '../../atoms'
import { TagStyled } from './Tag.style'

/**
 * @desc Tag component can be used to display tags associated with each product.
 *  @tagType : can be either sale or exclusive
 */

const Tag = React.memo(function Tag({ ...props }) {
  const { tagLabel } = props
  return (
    <TagStyled {...props}>
      <Text size="small" inverted>
        {tagLabel}
      </Text>
    </TagStyled>
  )
})

Tag.propTypes = {
  tagLabel: PropTypes.string.isRequired,
}

export default Tag
