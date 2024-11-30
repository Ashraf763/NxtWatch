import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 100%;
`
export const Image = styled.img`
  width: 100%;
`
export const VideoDetailsContainer = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: flex-start;
`
export const ProfileImage = styled.img`
  width: 30px;
  padding-top: 2px;
`
export const TitleContainer = styled.div`
  padding: 0 5px;
`

export const Text = styled.p`
  font-weight: 500;
  font-size: 13px;
  margin: 0;
  color: ${props => (props.isDarkTheme ? '#cbd5e1' : 'black')};
`
export const Name = styled.p`
  color: #64748b;
  font-size: 12px;
  margin-top: 4px;
  font-weight: 500;
`
export const TextContainer = styled.div`
  display: flex;
`
