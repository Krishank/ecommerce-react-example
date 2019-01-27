import styled from 'styled-components'
import { styleConstants } from '../../../../styles'

export default styled.div`
  background: ${styleConstants.lightBlue};
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px 10px;
  margin: 30px 0 10px;
  float: right;
  align-items: center;
  > div {
    padding: 0;
  }
  h2 {
    margin: 0;
  }
`
