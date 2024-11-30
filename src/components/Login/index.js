import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import {
  MainLoginContainer,
  LoginContainer,
  Image,
  Label,
  Input,
  CheckboxContainer,
  CheckboxInput,
  LoginBtn,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickShoePassword = event => {
    this.setState({showPassword: event.target.checked})
  }

  onSubmitSucess = token => {
    const {history} = this.props
    this.setState({errorMsg: ''})

    Cookies.set('jwt_token', token, {expires: 30})
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSucess(data.jwt_token)
    } else {
      this.setState({errorMsg: data.error_msg})
    }
  }

  render() {
    const {username, password, showPassword, errorMsg} = this.state
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <MainLoginContainer isDark={isDarkTheme}>
              <LoginContainer onSubmit={this.onSubmitForm} isDark={isDarkTheme}>
                <Image
                  src={
                    isDarkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <Label as="label" htmlFor="username" isDark={isDarkTheme}>
                  USERNAME
                </Label>
                <Input
                  type="text"
                  id="username"
                  placeholder="Username"
                  value={username}
                  onChange={this.onChangeUsername}
                  isDark={isDarkTheme}
                />
                <Label htmlFor="password" isDark={isDarkTheme}>
                  PASSWORD
                </Label>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={this.onChangePassword}
                  isDark={isDarkTheme}
                />

                <CheckboxContainer>
                  <CheckboxInput
                    type="checkbox"
                    id="checkbox"
                    onClick={this.onClickShoePassword}
                  />
                  <Label htmlFor="checkbox">Show Password</Label>
                </CheckboxContainer>
                <LoginBtn type="submit">Login</LoginBtn>
                {errorMsg && <ErrorMsg as="p">*{errorMsg}</ErrorMsg>}
              </LoginContainer>
            </MainLoginContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
