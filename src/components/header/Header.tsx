import * as S from './style'
import logo from '../../img/logo.svg'
import { Button } from '../button/Button'

export const Header = () => {
  return (
    <S.Header>
      <img src={logo} alt="" className='logo'/>
      <nav className='nav-bar'>
        <Button>Explore</Button>
        <Button>Solutions</Button>
        <Button>About</Button>
        <Button>Blog</Button>
        <Button>Log In</Button>
        <Button type='start'>Start Now</Button>
      </nav>
    </S.Header>
  )
}
