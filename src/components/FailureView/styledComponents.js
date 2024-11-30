import styled from 'styled-components'

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
