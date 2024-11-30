import styled from 'styled-components'

export const HeaderContainer = styled.div`
  height: 8vh;
  padding: 8px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.darkTheme && '#181818'};

  @media (max-width: 767px) {
    padding: 8px 25px;
  }
`
export const Image = styled.img`
  width: 110px;
`
export const BtnContainer = styled.ul`
  list-style-type: none;
  padding=left: 0;
  display: flex;
`
export const Button = styled.li`
  border: 0;
  background-color: transparent;
  width: 50px;
`
export const ProfileButton = styled(Button)`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`

export const ProfileImg = styled.img`
  width: 30px;
`
export const LogoutBtn = styled.button`
  background-color: transparent;
  border: 1.5px solid ${props => (props.darkTheme ? 'white' : '#3b82f6')};
  color: ${props => (props.darkTheme ? 'white' : '#3b82f6')};
  border-radius: 3px;
  padding: 6px 16px;
  font-weight: 600;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`
export const LogoutBtnSm = styled.button`
  background-color: transparent;
  border: none;
  display: none;

  @media (max-width: 767px) {
    display: block;
  }
`

export const ThemeButton = styled.button`
  background-color: transparent;
  border: 0;
`

export const ContainerPop = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
`
export const PopupContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : 'white')};
  color: ${props => (props.isDarkTheme ? 'white' : 'black')};
  padding: 15px;
  border-radius: 8px;
`

export const LogoutPopupBtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

export const CancelBtn = styled.button`
  background-color: transparent;
  border: 1px solid grey;
  color: grey;
  padding: 6px 16px;
  border-radius: 6px;
`
export const ConfirmBtn = styled.button`
  background-color: #3b82f6;
  color: white;
  padding: 6px 16px;
  border: 0;
  border-radius: 6px;
`
