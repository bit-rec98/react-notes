import { useEffect } from "react"

const Contacto = () => {

  useEffect(() => {
    document.title = 'Educación IT - Contacto'
  }, [])

  return (
    <>
      <h1 className="display-1 mt-4">Contacto</h1>
    </>
  )
}

export default Contacto