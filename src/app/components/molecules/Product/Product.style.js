import styled from 'styled-components'
import { styleConstants } from '../../../../styles'

export default styled.li`
  border: 1px solid ${styleConstants.lightGrey};
  display: flex;
  flex: 1 1 280px;
  flex-direction: column;
  flex-grow: 0;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: -1px;
  margin-top: -1px;
  padding: 20px 5px;
  img {
    width: 100%;
    min-height: 280px;
  }
  .product {
    &-details {
      padding: 0 10px;
      align-items: baseline;
      display: flex;
      justify-content: space-between;
      margin-top: 30px;
    }
    &-name {
      max-width: 170px;
    }
  }
`
