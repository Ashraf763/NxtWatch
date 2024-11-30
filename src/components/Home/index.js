import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {IoMdClose, IoIosSearch} from 'react-icons/io'

import LoadingView from '../LoadingView'
import FailureView from '../FailureView'
import VideoDetails from '../VideoDetails'
import LoadingWrapper from '../LoadingWrapper'

import ThemeContext from '../../context/ThemeContext'

import {
  CardContainer,
  BannerContainer,
  ImageContainer,
  Logo,
  CloseBtn,
  GetItNowBtn,
  Text,
  VIdeosContainer,
  Input,
  InputContainer,
  SearchButton,
  VideosList,
  EmptyContainer,
  EmptyImage,
  Text2,
  RetryBtn,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    videos: [],
    apiStatus: apiStatusConstants.initial,
    showBanner: true,
    search: '',
  }

  componentDidMount() {
    this.getHomeData()
  }

  getChannelDetails = data => ({
    name: data.name,
    profileImageUrl: data.profile_image_url,
  })

  getHomeData = async () => {
    const {search} = this.state
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${search}`
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
        publishedAt: each.published_at,
        channel: this.getChannelDetails(each.channel),
      }))
      this.setState({
        videos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onCLickCloseBanner = () => {
    this.setState({showBanner: false})
  }

  renderbanner = () => (
    <BannerContainer data-testid="banner">
      <ImageContainer>
        <Logo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <CloseBtn
          type="button"
          onClick={this.onCLickCloseBanner}
          data-testid="close"
        >
          <IoMdClose size={20} />
        </CloseBtn>
      </ImageContainer>
      <Text>Buy Nxt Watch Premium</Text>
      <GetItNowBtn type="button">GET IT NOW</GetItNowBtn>
    </BannerContainer>
  )

  renderLoadingView = () => <LoadingView />

  onChangeSearchinput = event => {
    this.setState({search: event.target.value})
  }

  onClickSearchBtn = () => {
    this.getHomeData()
  }

  renderEmptyView = () => (
    <EmptyContainer>
      <EmptyImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <Text as="h1">No Search results found</Text>
      <Text2>Try different key words or remove search filter</Text2>
      <RetryBtn type="button" onClick={this.onClickSearchBtn}>
        Retry
      </RetryBtn>
    </EmptyContainer>
  )

  renderSuccessView = () => {
    const {showBanner, search, videos} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <>
              {showBanner && this.renderbanner()}
              <VIdeosContainer isDarkTheme={isDarkTheme}>
                <InputContainer>
                  <Input
                    isDarkTheme={isDarkTheme}
                    type="search"
                    placeholder="Search"
                    value={search}
                    onChange={this.onChangeSearchinput}
                  />
                  <SearchButton
                    type="button"
                    onClick={this.onClickSearchBtn}
                    data-testid="searchButton"
                    isDarkTheme={isDarkTheme}
                  >
                    <IoIosSearch
                      style={{color: isDarkTheme ? 'white' : '#212121'}}
                    />
                  </SearchButton>
                </InputContainer>
                {videos.length === 0 ? (
                  this.renderEmptyView()
                ) : (
                  <VideosList>
                    {videos.map(each => (
                      <VideoDetails key={each.id} details={each} />
                    ))}
                  </VideosList>
                )}
              </VIdeosContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  onClickRetryBtn = () => {
    this.getHomeData()
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
      <CardContainer data-testid="home">
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

export default Home
