import {Link, withRouter} from 'react-router-dom'
import {useState, useEffect} from 'react'

import {IoIosHome} from 'react-icons/io'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {HiSave} from 'react-icons/hi'

import ThemeContext from '../../context/ThemeContext'

import {
  FilteresGroupContainer,
  TabsContainer,
  TabItem,
  Text,
  ContactUsSection,
  SocialContainer,
  Image,
} from './styledComponents'

const FilteresGroup = props => {
  const [activeTab, setActiveTab] = useState('home')

  useEffect(() => {
    const {location} = props
    const {pathname} = location

    setActiveTab(`${pathname}`)
  }, [props])

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <FilteresGroupContainer isDarkTheme={isDarkTheme}>
            <TabsContainer>
              <Link to="/" style={{color: 'black', textDecoration: 'none'}}>
                <TabItem isActive={activeTab === '/'}>
                  <IoIosHome
                    style={{color: activeTab === '/' ? 'red' : 'grey'}}
                  />
                  <Text isDarkTheme={isDarkTheme}>Home</Text>
                </TabItem>
              </Link>
              <Link
                to="/trending"
                style={{color: 'black', textDecoration: 'none'}}
              >
                <TabItem isActive={activeTab === '/trending'}>
                  <FaFire
                    style={{color: activeTab === '/trending' ? 'red' : 'grey'}}
                  />
                  <Text isDarkTheme={isDarkTheme}>Trending</Text>
                </TabItem>
              </Link>
              <Link
                to="/gaming"
                style={{color: 'black', textDecoration: 'none'}}
              >
                <TabItem isActive={activeTab === '/gaming'}>
                  <SiYoutubegaming
                    style={{color: activeTab === '/gaming' ? 'red' : 'grey'}}
                  />
                  <Text isDarkTheme={isDarkTheme}>Gaming</Text>
                </TabItem>
              </Link>
              <Link
                to="/saved-videos"
                style={{color: 'black', textDecoration: 'none'}}
              >
                <TabItem isActive={activeTab === '/saved-videos'}>
                  <HiSave
                    style={{
                      color: activeTab === '/saved-videos' ? 'red' : 'grey',
                    }}
                  />
                  <Text isDarkTheme={isDarkTheme}>Saved Videos</Text>
                </TabItem>
              </Link>
            </TabsContainer>

            <ContactUsSection>
              <Text isDarkTheme={isDarkTheme}>CONTACT US</Text>
              <SocialContainer>
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />

                <Image
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </SocialContainer>
              <Text isDarkTheme={isDarkTheme}>
                Enjoy! Now to see your channels and recommendations!
              </Text>
            </ContactUsSection>
          </FilteresGroupContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(FilteresGroup)
