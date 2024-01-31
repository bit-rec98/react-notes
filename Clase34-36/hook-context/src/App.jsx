import './App.css'
import FooterContext from './components/FooterContext'
import HeaderContext from './components/HeaderContext'
import MainContext from './components/MainContext'
import { LanguageProvider } from './contexts/LanguageContext'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {

  return (
    <>
      <LanguageProvider>
      <ThemeProvider>
        <HeaderContext></HeaderContext>
        <MainContext></MainContext>
        <FooterContext></FooterContext>
      </ThemeProvider>
      </LanguageProvider>
    </>
  )
}

export default App
