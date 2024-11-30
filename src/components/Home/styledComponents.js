import styled from 'styled-components'

export const MainHomeContainer = styled.div`
  height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
`
export const Container = styled.div`
  display: flex;
`
export const CardContainer = styled.div`
  width: 80%;
  padding: 0 15px;

  @media (max-width: 767px) {
    width: 100%;
  }
`
export const BannerContainer = styled.div`
  background-image: url(https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png);
  width: 100%;
  background-size: cover;
  height: 200px;
  padding: 15px;
`
export const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Logo = styled.img`
  width: 110px;
`
export const CloseBtn = styled.button`
  background-color: transparent;
  border: 0;
`
export const GetItNowBtn = styled.button`
  border: 2px solid black;
  padding: 5px 15px;
  color: black;
  width: max-content;
  margin-top: 25px;
`
export const Text = styled.p`
  font-size: 22px;
  margin-top: 15px;
  font-weight: 500;
`
export const VIdeosContainer = styled.div`
  padding: 15px;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f1f5f9')};
  min-height: 450px;
`
export const Input = styled.input`
  width: 90%;
  padding: 4px 12px;
  background-color: transparent;
  border: 1px solid grey;
  outline: none;
  color: ${props => props.isDarkTheme && 'white'};
`
export const InputContainer = styled.div`
  width: 280px;
  display: flex;
`
export const SearchButton = styled.button`
  padding: 2px 10px 0;
  border: 1px solid grey;
  background-color: ${props => props.isDarkTheme && '#313131'};
`
export const VideosList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
  justify-content: center;
`
export const EmptyContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const EmptyImage = styled.img`
  width: 45%;
`
export const Text2 = styled.p`
  color: #94a3b8;
  font-size: 12px;
`

export const RetryBtn = styled.button`
  border: 0;
  border-radius: 5px;
  background-color: #4f46e5;
  color: white;
  padding: 5px 15px;
`
