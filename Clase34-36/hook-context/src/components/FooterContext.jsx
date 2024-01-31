import { useContext } from 'react'
import ThemeContext from '../contexts/ThemeContext'
import './FooterContext.scss'
import LanguageContext from '../contexts/LanguageContext'

const FooterContext = () => {

  const { theme } = useContext(ThemeContext)
  const {texts} = useContext(LanguageContext)

  return (
    <div className={`bg-${theme} position-footer`}>
      <p>{texts.footer}</p>
    </div>
  )
}

export default FooterContext