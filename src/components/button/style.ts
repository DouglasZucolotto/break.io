import styled from 'styled-components'

export const NavigationStyle = styled.button`
  border: none;
  background: transparent;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 16px;
  color: var(--blue-gray);
`

export const StartStyle = styled.button`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 16px;
  color: #ffffff;
  background-color: #c026d3;
  border: none;
  border-radius: 18px;
  padding: 10px;
  width: 132px;
  height: 48px;
  transition: background-color 0.2s ease;

  &:hover{
    background-color: #6B0677;
  }
`
