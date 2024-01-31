import { useEffect } from "react"
import { Helmet } from "react-helmet-async"

const Productos = () => {

  useEffect(() => {
    document.title = 'Educación IT - Inicio'
  }, [])

  return (
    <>
      <div className="display-1">Productos</div>
      <hr />
    </>
  )
}

export default Productos