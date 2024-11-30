import {Link} from 'react-router-dom'

import {GamingContainer, Image, Title, Name} from './styledComponents'

const GaminVideo = props => {
  const {details} = props
  const {thumbnailUrl, title, viewCount, id} = details

  return (
    <GamingContainer>
      <Link to={`/videos/${id}`}>
        <Image src={thumbnailUrl} alt="video thumbnail" />
        <Title>{title}</Title>
        <Name>{`${viewCount} Watching Worldwide`}</Name>
      </Link>
    </GamingContainer>
  )
}

export default GaminVideo
