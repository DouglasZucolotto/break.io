import { Button } from '../components/button/Button'
import { Header } from '../components/header/Header'
import * as S from './style'
import imageone from '../img/imageone.svg'
import imagesecond from '../img/imagesecond.svg'

export const Home = () => {
  return (
    <S.Home>
      <Header />
      <div className="main-container">
        <section className="first-section">
          <h2>It's time to take a break</h2>
          <div className='container-sub-title'>
            <p className="sub-title">
              Build your meditation skills with an app that gives you all you
              need!
            </p>
          </div>
          <div className="input-plus-button">
            <input type="text" placeholder="Enter your name" />
            <Button type="start">Start Now</Button>
          </div>
          <img src={imageone} alt="" className="imageone" />
        </section>

        <section className="second-section">
          <h2>Get better everyday</h2>
          <div className='container-sub-title'>
            <p className="sub-title">
              Et pulvinar nec interdum integer id urna molestie porta nullam. A,
              donec ornare sed turpis pulvinar
            </p>
            <p className="sub-title">
              purus maecenas quam a. Erat porttitor pharetra sed in mauris
              elementum sollicitudin.
            </p>
          </div>
          <div className="secondHomeBtn">
            <Button type="start">Start Now</Button>
          </div>
          <img src={imagesecond} alt="" className="imagesecond" />
        </section>

        <section className="third-section">
          <h2>Stories from our users</h2>
          <div className='container-sub-title'>
            <p className="sub-title">
              Et pulvinar nec interdum integer id urna molestie porta nullam. A,
              donec ornare sed turpis pulvinar
            </p>
            <p className="sub-title">
              purus maecenas quam a. Erat porttitor pharetra sed in mauris
              elementum sollicitudin.
            </p>
          </div>
        </section>
      </div>
    </S.Home>
  )
}
