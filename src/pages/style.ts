import styled from 'styled-components'

export const Home = styled.div`
  display: flex;
  flex-direction: column;

  .main-container {
    margin: auto;
    margin-top: 50px;
  }

  h2 {
    font-size: 72px;
    font-weight: 700;

    background: linear-gradient(to right, #c026d3, #701a75);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .first-section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .sub-title {
    margin-top: 28px;
    font-size: 20px;
    font-weight: 400;
    color: var(--sub-title);
  }

  input {
    width: 476px;
    height: 64px;
    padding: 20px;
    font-size: 24px;
    border: 2px solid #cbd5e1;
    border-radius: 24px;
  }

  input::placeholder {
    font-size: 24px;
  }

  input:focus {
    outline: none;
  }

  .input-plus-button{
    display: flex;
    gap: 20px;
    margin-top: 30px;
  }

  .input-plus-button > button{
    font-size: 24px;
    font-weight: bold;
    width: 208px;
    height: 64px;
    border-radius: 26px;
  }

  .imageone{
    margin-top: 65px;
    width: 1500px;
  }
`
