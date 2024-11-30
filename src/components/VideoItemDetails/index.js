import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {HiSaveAs} from 'react-icons/hi'

import LoadingView from '../LoadingView'
import FailureView from '../FailureView'
import LoadingWrapper from '../LoadingWrapper'

import ThemeContext from '../../context/ThemeContext'

import {
  CardContainer,
  VIdeoContainer,
  Title,
  Views,
  Like,
  ViewsContainer,
  LikeContainer,
  DislikeContainer,
  SaveContainer,
  FeedbackContainer,
  ChannelNameContainer,
  ChannelContainer,
  Channelimage,
  Name,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: '',
    like: false,
    dislike: false,
    saved: false,
  }

  componentDidMount() {
    this.fetchVideoItemDetails()
  }

  getChannelData = data => ({
    name: data.name,
    profileImageUrl: data.profile_image_url,
    subscriberCount: data.subscriber_count,
  })

  getUpdatedData = data => ({
    id: data.id,
    title: data.title,
    videoUrl: data.video_url,
    thumbnailUrl: data.thumbnail_url,
    viewCount: data.view_count,
    publishedAt: data.published_at,
    description: data.description,
    channel: this.getChannelData(data.channel),
  })

  fetchVideoItemDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const updatedData = this.getUpdatedData(data.video_details)

      this.setState({
        apiStatus: apiStatusConstants.success,
        videoDetails: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onCLickLike = () => {
    const {dislike} = this.state

    if (dislike) {
      this.setState({like: true, dislike: false})
    } else {
      this.setState(prevState => ({like: !prevState.like}))
    }
  }

  onClickDislike = () => {
    const {like} = this.state

    if (like) {
      this.setState({dislike: true, like: false})
    } else {
      this.setState(prevState => ({dislike: !prevState.dislike}))
    }
  }

  renderSuccessView = () => {
    const {videoDetails, like, dislike, saved} = this.state
    const {videoUrl, title, viewCount, publishedAt, channel, description} =
      videoDetails
    const newDate = formatDistanceToNow(new Date(publishedAt))
    const postedTime = newDate.split(' ')[1]

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, setSavedVideos} = value

          const onClickSaved = () => {
            this.setState(prevState => ({saved: !prevState.saved}))
            setSavedVideos(videoDetails)
          }

          return (
            <>
              <VIdeoContainer isDarkTheme={isDarkTheme}>
                <ReactPlayer url={videoUrl} controls width="100%" />

                <Title>{title}</Title>
                <ViewsContainer>
                  <Views>
                    {viewCount} views . {postedTime} years ago
                  </Views>
                  <FeedbackContainer>
                    <LikeContainer
                      type="button"
                      onClick={this.onCLickLike}
                      like={like}
                    >
                      <AiOutlineLike />
                      <Like>Like</Like>
                    </LikeContainer>
                    <DislikeContainer
                      type="button"
                      onClick={this.onClickDislike}
                      disLike={dislike}
                    >
                      <AiOutlineDislike />
                      <Like>Dislike</Like>
                    </DislikeContainer>
                    <SaveContainer
                      type="button"
                      onClick={onClickSaved}
                      saved={saved}
                    >
                      <HiSaveAs />
                      <Like>{saved ? 'Saved' : 'Save'}</Like>
                    </SaveContainer>
                  </FeedbackContainer>
                </ViewsContainer>

                <hr />

                <ChannelContainer>
                  <Channelimage
                    src={channel.profileImageUrl}
                    alt="channel logo"
                  />
                  <ChannelNameContainer>
                    <Name>{channel.name}</Name>
                    <Views>{channel.subscriberCount}</Views>
                  </ChannelNameContainer>
                </ChannelContainer>
                <Name>{description}</Name>
              </VIdeoContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderLoadingView = () => <LoadingView />

  onClickRetryBtn = () => {
    this.fetchVideoItemDetails()
  }

  renderFailureView = () => (
    <FailureView onClickRetryBtn={this.onClickRetryBtn} />
  )

  render() {
    const {apiStatus} = this.state

    const token = Cookies.get('jwt_token')
    if (token === undefined) {
      return <Redirect tp="/login" />
    }

    return (
      <CardContainer data-testid="videoItemDetails">
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
