import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'

import ThemeContext from '../../context/ThemeContext'

import {
  TrendingVideo,
  Image,
  VideoDetails,
  Title,
  Name,
} from './styledComponents'

const TrendingVideos = props => {
  const {details} = props
  const {thumbnailUrl, title, channel, viewCount, publishedAt, id} = details
  const newDate = formatDistanceToNow(new Date(publishedAt))
  const years = newDate.split(' ')[1]

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <Link to={`/videos/${id}`}>
            <TrendingVideo>
              <Image src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetails>
                <Title isDarkTheme={isDarkTheme}>{title}</Title>
                <Name>{channel.name}</Name>
                <Name>{`${viewCount} views . ${years} years ago`}</Name>
              </VideoDetails>
            </TrendingVideo>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default TrendingVideos
