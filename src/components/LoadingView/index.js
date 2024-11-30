import Loader from 'react-loader-spinner'
import {LoaderContainer} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

const LoadingView = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <LoaderContainer data-testid="loader">
          <Loader
            type="ThreeDots"
            color={isDarkTheme ? 'white' : 'black'}
            height="50"
            width="50"
          />
        </LoaderContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default LoadingView
