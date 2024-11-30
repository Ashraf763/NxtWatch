import {FailureContainer, FailreImage, Text, RetryBtn} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

const FailureView = props => {
  const {onClickRetryBtn} = props

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const onClickRetry = () => {
          onClickRetryBtn()
        }

        return (
          <FailureContainer>
            <FailreImage
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
              alt="failure view"
            />
            <Text isDarkTheme={isDarkTheme} as="h1">
              Oops! Something Went Wrong
            </Text>
            <p>
              We are having some trouble to complete your request. Please try
              again.
            </p>
            <RetryBtn type="button" onClick={onClickRetry}>
              Retry
            </RetryBtn>
          </FailureContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default FailureView
