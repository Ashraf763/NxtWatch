import ThemeContext from '../../context/ThemeContext'

import {
  CardContainer,
  FailureContainer,
  FailreImage,
  Text,
} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <CardContainer>
          <FailureContainer>
            <FailreImage
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
              }
              alt="not found"
            />
            <Text as="h1" isDarkTheme={isDarkTheme}>
              Page Not Found
            </Text>
            <p>We are sorry, the page you requested could not be found.</p>
          </FailureContainer>
        </CardContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
