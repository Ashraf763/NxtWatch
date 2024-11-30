import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {HiSave} from 'react-icons/hi'

import TrendingVideos from '../TrendingVideos'

import ThemeContext from '../../context/ThemeContext'

import {
  CardContainer,
  EmptyImage,
  EmptyContainer,
  Text,
  TrendingContainer,
  IconContainer,
  Heading,
  TrendingVideosContainer,
} from './styledComponents'

const SavedVideos = () => {
  const token = Cookies.get('jwt_token')
  if (token === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {savedVideos, isDarkTheme} = value

        return (
          <CardContainer data-testid="savedVideos">
            {savedVideos.length > 0 ? (
              <>
                <TrendingContainer isDarkTheme={isDarkTheme}>
                  <IconContainer isDarkTheme={isDarkTheme}>
                    <HiSave size={25} color="red" />
                  </IconContainer>
                  <Heading>Saved Videos</Heading>
                </TrendingContainer>

                <TrendingVideosContainer isDarkTheme={isDarkTheme}>
                  {savedVideos.map(eachVideo => (
                    <TrendingVideos key={eachVideo.id} details={eachVideo} />
                  ))}
                </TrendingVideosContainer>
              </>
            ) : (
              <EmptyContainer>
                <EmptyImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <Text isDarkTheme={isDarkTheme}>No saved videos found</Text>
                <Text as="p">Save your videos by clicking a button</Text>
              </EmptyContainer>
            )}
          </CardContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SavedVideos
