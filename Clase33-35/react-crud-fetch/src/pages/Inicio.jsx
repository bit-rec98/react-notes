import { useEffect } from "react"

const Inicio = () => {

  useEffect(() => {
    document.title = 'Educación IT - Inicio'
  }, [])
  

  return (
    <>
      <h1 className="display-1 mt-4">Inicio</h1>
      <img className="img-fluid my-2 py-2" src="/img/ngc6357_lg.jpg" alt="space" />
    </>
  )
}

export default Inicio