import { useEffect } from "react"

const Inicio = () => {

  useEffect(() => {
    document.title = 'Educación IT - Inicio'
  }, [])
  

  return (
    <>
      <h1 className="display-1 mt-4">Inicio</h1>
    </>
  )
}

export default Inicio