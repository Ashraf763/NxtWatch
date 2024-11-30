import styled from 'styled-components'

export const Main = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const Container = styled.div`
  display: flex;
`
export const CardContainer = styled.div`
  width: 80%;
  padding: 30px;

  @media (max-width: 767px) {
    width: 100%;
  }
`
export const VIdeoContainer = styled.div`
  width: 100%;
  max-width: 900px;
  color: ${props => (props.isDarkTheme ? 'white' : 'black')};
`
export const Title = styled.p`
  font-size: 14px;
  font-weight: 500;
`
export const Views = styled.p`
  font-size: 12px;
  color: grey;
  margin-top: 0;
`
export const Like = styled.p`
  font-size: 12px;
  font-weight: 500;
`
export const ViewsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const LikesContainer = styled.button`
  border: 0;
  background-color: transparent;
  display: flex;
  align-items: center;
  margin: 0 6px;
  font-weight: 600;
`

export const LikeContainer = styled.button`
  color: ${props => (props.like ? '#2563eb' : '#64748b')};
  border: 0;
  background-color: transparent;
  display: flex;
  align-items: center;
  margin: 0 6px;
  font-weight: 600;
`
export const DislikeContainer = styled.button`
  color: ${props => (props.disLike ? '#2563eb' : '#64748b')};
  border: 0;
  background-color: transparent;
  display: flex;
  align-items: center;
  margin: 0 6px;
  font-weight: 600;
`
export const SaveContainer = styled.button`
  color: ${props => (props.saved ? '#2563eb' : '#64748b')};
  border: 0;
  background-color: transparent;
  display: flex;
  align-items: center;
  margin: 0 6px;
  font-weight: 600;
`

export const FeedbackContainer = styled.div`
  display: flex;
  align-items: center;
`
export const ChannelNameContainer = styled.div`
  padding: 7px 0 0 5px;
`
export const ChannelContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Channelimage = styled.img`
  width: 30px;
`

export const Name = styled.p`
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 0;
`

export const TrendingContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 20px;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#f4f4f4')};
  color: ${props => (props.isDarkTheme ? 'white' : 'black')};
`
export const IconContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: ${props => (props.isDarkTheme ? 'black' : '#cbd5e1')};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 6px;
`
export const Heading = styled.h1`
  font-size: 25px;
`
export const TrendingVideosContainer = styled.ul`
  list-style-type: none;
  padding-left: 0;
  padding: 50px;
  margin-top: 0;
  background-color: ${props => (props.isDarkTheme ? 'black' : 'white')};
`
