import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'

import NotFound from './components/NotFound'

import ThemeContext from './context/ThemeContext'

import './App.css'

class App extends Component {
  state = {isDarkTheme: false, savedVideos: []}

  changeTheme = () => {
    this.setState(prevSTate => ({isDarkTheme: !prevSTate.isDarkTheme}))
  }

  setSavedVideos = details => {
    this.setState(prevState => ({
      savedVideos: [...prevState.savedVideos, details],
    }))
  }

  render() {
    const {isDarkTheme, savedVideos} = this.state

    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          changeTheme: this.changeTheme,
          savedVideos,
          setSavedVideos: this.setSavedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/" component={ProtectedRoute} />
          <Route component={NotFound} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
