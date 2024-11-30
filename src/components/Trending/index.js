import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {FaFire} from 'react-icons/fa'

import LoadingView from '../LoadingView'
import FailureView from '../FailureView'
import TrendingVideos from '../TrendingVideos'
import LoadingWrapper from '../LoadingWrapper'

import ThemeContext from '../../context/ThemeContext'

import {
  CardContainer,
  TrendingContainer,
  IconContainer,
  Heading,
  TrendingVideosContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {apiStatus: apiStatusConstants.initial, trendingVideos: []}

  componentDidMount() {
    this.fetchTrendingApi()
  }

  getChannelData = data => ({
    name: data.name,
    profileImageUrl: data.profile_image_url,
  })

  fetchTrendingApi = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
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
        profileImageUrl: each.profile_image_url,
        viewCount: each.view_count,
        publishedAt: each.published_at,
        channel: this.getChannelData(each.channel),
      }))

      this.setState({
        trendingVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {trendingVideos} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <>
              <TrendingContainer isDarkTheme={isDarkTheme}>
                <IconContainer isDarkTheme={isDarkTheme}>
                  <FaFire size={25} color="red" />
                </IconContainer>
                <Heading>Trending</Heading>
              </TrendingContainer>

              <TrendingVideosContainer isDarkTheme={isDarkTheme}>
                {trendingVideos.map(eachVideo => (
                  <TrendingVideos key={eachVideo.id} details={eachVideo} />
                ))}
              </TrendingVideosContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderFailureView = () => (
    <FailureView onClickRetryBtn={this.onClickRetryBtn} />
  )

  onClickRetryBtn = () => {
    this.fetchTrendingApi()
  }

  renderLoadingView = () => <LoadingView />

  render() {
    const {apiStatus} = this.state

    const token = Cookies.get('jwt_token')
    if (token === undefined) {
      return <Redirect to="/login" />
    }

    return (
      <CardContainer data-testid="trending">
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

export default Trending
