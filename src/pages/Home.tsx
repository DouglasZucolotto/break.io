import { Button } from '../components/button/Button'
import { Header } from '../components/header/Header'
import * as S from './style'
import imageone from '../img/imageone.svg'

export const Home = () => {
  return (
    <S.Home>
      <Header />
      <div className="main-container">
        <section className="first-section">
          <h2>It's time to take a break</h2>
          <p className="sub-title">
            Build your meditation skills with an app that gives you all you
            need!
          </p>
          <div className='input-plus-button'>
            <input type="text" placeholder="Enter your name" />
            <Button type='start'>Start Now</Button>
          </div>
          <img src={imageone} alt="" className='imageone'/>
        </section>
      </div>
    </S.Home>
  )
}
