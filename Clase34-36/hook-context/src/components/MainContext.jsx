import { useContext } from "react"
import ThemeContext from "../contexts/ThemeContext"
import LanguageContext from "../contexts/LanguageContext"

const MainContext = () => {

  // const objContexto = useContext(ThemeContext) -> Devuelve un objeto con los datos pasados por prop en value al armar el provider
  // console.log(objContexto)  

  const { theme } = useContext(ThemeContext)
  const { texts } = useContext(LanguageContext)

  return (
    <main className='container mt-4 m-auto'>
      <h1 className={`display-1 text-${theme} border border-${theme} ps-3`}>{texts.mainPage}</h1>
      <hr />
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, error.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias quibusdam suscipit praesentium perspiciatis odit? Saepe.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque accusamus laboriosam dolorem maxime minima, velit ullam nostrum consequuntur minus quam quasi quod doloremque fugiat beatae aspernatur enim recusandae? Ratione, molestias?</p>

      <h2 className={`display-1 text-${theme} border border-${theme} ps-3`}>{texts.subtitle}</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, accusantium?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veritatis nihil doloremque minus inventore cupiditate!</p>
    </main>
  )
}

export default MainContext