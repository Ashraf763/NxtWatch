import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  changeTheme: () => {},
  savedVideos: [],
  setSavedVideos: () => {},
})

export default ThemeContext
