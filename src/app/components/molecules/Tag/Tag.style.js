import styled from 'styled-components'

export const TagStyled = styled.span`
  align-items: center;
  background: ${({ tagLabel, theme }) =>
    tagLabel.toLocaleLowerCase() === 'sale' ? theme.red : theme.green};
  display: inline-block;
  padding: ${({ tagLabel }) =>
    tagLabel.toLocaleLowerCase() === 'sale' ? '16px 21px' : '16px 35px'};
`
