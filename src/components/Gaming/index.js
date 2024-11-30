import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import {SiYoutubegaming} from 'react-icons/si'

import LoadingView from '../LoadingView'
import FailureView from '../FailureView'
import GamingVideo from '../GamingVideo'
import LoadingWrapper from '../LoadingWrapper'

import ThemeContext from '../../context/ThemeContext'

import {
  CardContainer,
  GamingContainer,
  IconContainer,
  Heading,
  GamingVideosContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {apiStatus: apiStatusConstants.initial, gamingVideos: []}

  componentDidMount() {
    this.fetchTrendingApi()
  }

  fetchTrendingApi = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const updatedData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
      }))

      this.setState({
        gamingVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {gamingVideos} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <>
              <GamingContainer isDarkTheme={isDarkTheme}>
                <IconContainer isDarkTheme={isDarkTheme}>
                  <SiYoutubegaming size={25} color="red" />
                </IconContainer>
                <Heading>Gaming</Heading>
              </GamingContainer>

              <GamingVideosContainer isDarkTheme={isDarkTheme}>
                {gamingVideos.map(eachVideo => (
                  <GamingVideo key={eachVideo.id} details={eachVideo} />
                ))}
              </GamingVideosContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderLoadingView = () => <LoadingView />

  onClickRetryBtn = () => {
    this.fetchTrendingApi()
  }

  renderFailureView = () => (
    <FailureView onClickRetryBtn={this.onClickRetryBtn} />
  )

  render() {
    const {apiStatus} = this.state

    const token = Cookies.get('jwt_token')
    if (token === undefined) {
      return <Redirect to="/login" />
    }

    return (
      <CardContainer data-testid="gaming">
        <LoadingWrapper
          apiStatus={apiStatus}
          renderLoadingView={this.renderLoadingView}
          renderSuccessView={this.renderSuccessView}
          renderFailureView={this.renderFailureView}
        />
      </CardContainer>
    )
  }
}

export default Gaming
