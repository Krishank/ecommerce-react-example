import styled from 'styled-components'

export default styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  list-style: none;
  margin-bottom: 30px;
  padding-left: 0;
  @media (max-width: 960px) {
    justify-content: center;
    li {
      margin-bottom: 25px;
    }
  }
`
