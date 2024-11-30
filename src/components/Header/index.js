import Cookies from 'js-cookie'
import {withRouter, Link} from 'react-router-dom'
import Popup from 'reactjs-popup'

import {FaSun} from 'react-icons/fa'
import {GiNightSleep, GiExitDoor} from 'react-icons/gi'

import ThemeContext from '../../context/ThemeContext'
import DropDown from '../DropDown'

import {
  HeaderContainer,
  Image,
  BtnContainer,
  Button,
  ProfileImg,
  LogoutBtn,
  ThemeButton,
  PopupContainer,
  LogoutPopupBtnContainer,
  CancelBtn,
  ConfirmBtn,
  ContainerPop,
  LogoutBtnSm,
  ProfileButton,
} from './styledComponents'

const Header = props => {
  const onCLickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, changeTheme} = value

        const onCLickTHeme = () => {
          changeTheme()
        }

        return (
          <HeaderContainer darkTheme={isDarkTheme}>
            <Link to="/">
              <Image
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                }
                alt="website logo"
              />
            </Link>

            <BtnContainer>
              <Button>
                <ThemeButton
                  type="button"
                  onClick={onCLickTHeme}
                  data-testid="theme"
                >
                  {isDarkTheme ? (
                    <FaSun size={30} color="white" />
                  ) : (
                    <GiNightSleep size={30} />
                  )}
                </ThemeButton>
              </Button>
              <>
                <ProfileButton type="button">
                  <ProfileImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                </ProfileButton>
                <DropDown isDarkTheme={isDarkTheme} />
              </>
              <Button>
                <Popup
                  modal
                  trigger={
                    <LogoutBtn type="button" darkTheme={isDarkTheme}>
                      Logout
                    </LogoutBtn>
                  }
                >
                  {close => (
                    <ContainerPop>
                      <PopupContainer isDarkTheme={isDarkTheme}>
                        <p>Are you sure, you want to logout?</p>
                        <LogoutPopupBtnContainer>
                          <CancelBtn type="button" onClick={() => close()}>
                            Cancel
                          </CancelBtn>
                          <ConfirmBtn type="button" onClick={onCLickLogout}>
                            Confirm
                          </ConfirmBtn>
                        </LogoutPopupBtnContainer>
                      </PopupContainer>
                    </ContainerPop>
                  )}
                </Popup>

                <Popup
                  modal
                  trigger={
                    <LogoutBtnSm type="button" darkTheme={isDarkTheme}>
                      <GiExitDoor
                        size={30}
                        color={isDarkTheme ? 'white' : 'black'}
                      />
                    </LogoutBtnSm>
                  }
                >
                  {close => (
                    <ContainerPop>
                      <PopupContainer isDarkTheme={isDarkTheme}>
                        <p>Are you sure, you want to logout?</p>
                        <LogoutPopupBtnContainer>
                          <CancelBtn type="button" onClick={() => close()}>
                            Cancel
                          </CancelBtn>
                          <ConfirmBtn type="button" onClick={onCLickLogout}>
                            Confirm
                          </ConfirmBtn>
                        </LogoutPopupBtnContainer>
                      </PopupContainer>
                    </ContainerPop>
                  )}
                </Popup>
              </Button>
            </BtnContainer>
          </HeaderContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default withRouter(Header)
