import { useEffect } from "react"

const Inicio = () => {

  useEffect(() => {
    document.title = 'Educación IT - Inicio'
  }, [])

  return (
    <>
      <div className="display-1">
        Inicio
      </div>
      <hr />
    </>
  )
}

export default Inicio