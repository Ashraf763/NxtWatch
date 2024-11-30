import {Route, Switch} from 'react-router-dom'

import Header from '../Header'
import FilteresGroup from '../FilteresGroup'

import Home from '../Home'
import Trending from '../Trending'
import Gaming from '../Gaming'
import VideoItemDetails from '../VideoItemDetails'
import SavedVideos from '../SavedVideos'
import NotFound from '../NotFound'

import ThemeContext from '../../context/ThemeContext'

import {Main, Container} from './styledComponents'

const ProtectedRoute = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <Main isDarkTheme={isDarkTheme}>
          <Header />
          <Container>
            <FilteresGroup />

            <>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/trending" component={Trending} />
                <Route exact path="/gaming" component={Gaming} />
                <Route exact path="/saved-videos" component={SavedVideos} />
                <Route exact path="/videos/:id" component={VideoItemDetails} />
                <Route component={NotFound} />
              </Switch>
            </>
          </Container>
        </Main>
      )
    }}
  </ThemeContext.Consumer>
)

export default ProtectedRoute
