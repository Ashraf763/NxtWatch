import styled from 'styled-components'

export const Main = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
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

export const FailureContainer = styled.div`
  height: 100%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #64748b;
`
export const FailreImage = styled.img`
  width: 50%;
`
export const Text = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.isDarkTheme && 'white'};
`

export const RetryBtn = styled.button`
  background-color: #4f46e5;
  padding: 6px 16px;
  border: 0;
  border-radius: 6px;
  color: white;
`
