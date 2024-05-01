import * as S from './style'

type ButtonType = 'navigation' | 'start'

interface ButtonProps {
  type?: ButtonType
  children: React.ReactNode
}

export const Button = ({type = 'navigation', children }: ButtonProps) => {
  switch (type){
    case 'navigation':
        return <S.NavigationStyle>{children}</S.NavigationStyle>
    case 'start':
        return <S.StartStyle>{children}</S.StartStyle>
  } 
}
