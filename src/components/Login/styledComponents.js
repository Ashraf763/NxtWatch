import styled from 'styled-components'

export const MainLoginContainer = styled.div`
  height: 100vh;
  background-color: ${props => props.isDark && '#181818'};
  color: ${props => props.isDark && '#f9f9f9v'};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginContainer = styled.form`
  background-color: ${props => props.isDark && '#0f0f0f'};
  width: 90%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 5px 5px 50px #475569;
  padding: 25px;
  border-radius: 14px;
`
export const Image = styled.img`
  width: 50%;
  align-self: center;
`
export const Label = styled.label`
  font-size: 12px;
  font-weight: 500;
  color: #475569;
  padding-top: 25px;
  color: ${props => props.isDark && 'white'};
`
export const Input = styled.input`
  width: 100%;
  padding: 6px 8px;
  outline: none;
  background-color: transparent;
  margin-top: 4px;
  color: ${props => props.isDark && 'white'};
  border: 1px solid ${props => props.isDark && '#475569'};
`
export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`
export const CheckboxInput = styled.input`
  margin-top: 28px;
`
export const LoginBtn = styled.button`
  background-color: #3b82f6;
  border: 0;
  border-radius: 6px;
  padding: 8px 18px;
  color: #ffffff;
  margin-top: 15px;
`
export const ErrorMsg = styled.p`
  color: red;
  font-size: 11px;
`
