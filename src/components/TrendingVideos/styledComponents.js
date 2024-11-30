import styled from 'styled-components'

export const TrendingVideo = styled.li`
  width: 100%;
  display: flex;
  margin-bottom: 25px;
`

export const Image = styled.img`
  width: 40%;
`
export const VideoDetails = styled.div`
  padding: 10px;
`
export const Title = styled.p`
  font-size: 18px;
  margin-top: 0;
  font-weight: 600;
  color: ${props => (props.isDarkTheme ? 'white' : 'black')};
`
export const Name = styled.p`
  color: #7e858e;
  font-size: 12px;
`
