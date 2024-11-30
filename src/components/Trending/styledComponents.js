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

  @media (max-width: 767px) {
    width: 100%;
  }
`
export const TrendingContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 20px;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#f4f4f4')};
  color: ${props => (props.isDarkTheme ? 'white' : 'black')};
`
export const IconContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: ${props => (props.isDarkTheme ? 'black' : '#cbd5e1')};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 6px;
`
export const Heading = styled.h1`
  font-size: 25px;
`
export const TrendingVideosContainer = styled.ul`
  list-style-type: none;
  padding-left: 0;
  padding: 50px;
  margin-top: 0;
  background-color: ${props => (props.isDarkTheme ? 'black' : 'white')};
`
