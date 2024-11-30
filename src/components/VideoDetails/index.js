import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import ThemeContext from '../../context/ThemeContext'

import {
  MainContainer,
  Image,
  VideoDetailsContainer,
  ProfileImage,
  TitleContainer,
  Text,
  Name,
  TextContainer,
} from './styledComponents'

const VideoDetails = props => {
  const {details} = props
  const {thumbnailUrl, channel, title, viewCount, publishedAt, id} = details
  const {profileImageUrl, name} = channel

  const publishDate = formatDistanceToNow(new Date(publishedAt))
  const publishedDate = publishDate.split(' ')

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <MainContainer>
            <Link to={`/videos/${id}`}>
              <Image src={thumbnailUrl} alt="video thumbnail" />

              <VideoDetailsContainer>
                <ProfileImage src={profileImageUrl} alt="channel logo" />
                <TitleContainer>
                  <Text isDarkTheme={isDarkTheme}>{title}</Text>
                  <Name>{name}</Name>
                  <TextContainer>
                    <Name>{`${viewCount}k views . `}</Name>
                    <Name>{`${publishedDate[1]} years ago`}</Name>
                  </TextContainer>
                </TitleContainer>
              </VideoDetailsContainer>
            </Link>
          </MainContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VideoDetails
