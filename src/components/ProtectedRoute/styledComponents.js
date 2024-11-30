import styled from 'styled-components'

export const Main = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const Container = styled.div`
  display: flex;
`
export const CardContainer = styled.div`
  width: 80%;
  padding: 0;
`
