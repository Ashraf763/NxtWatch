import styled from 'styled-components'

export const FilteresGroupContainer = styled.div`
  display: block;
  height: 92vh;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};

  @media (max-width: 768px) {
    display: none;
  }
`
export const TabsContainer = styled.ul`
  list-style-type: none;
  padding-left: 0;
  text-decoration: none;
`

export const TabItem = styled.li`
  background-color: ${props => props.isActive && 'lightgrey'};
  display: flex;
  padding: 0 15px;
  align-items: center;
`

export const Text = styled.p`
  font-weight: 500;
  font-size: 14px;
  padding-left: 6px;
  color: ${props => props.isDarkTheme && 'white'};
`
export const Button = styled.button`
  border: 0;
  display: flex;
  align-items: center;
  background-color: transparent;
`
export const ContactUsSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`

export const SocialContainer = styled.div`
  display: flex;
  padding: 0 10px;
`
export const Image = styled.img`
  width: 20px;
  margin-right: 5px;
`
