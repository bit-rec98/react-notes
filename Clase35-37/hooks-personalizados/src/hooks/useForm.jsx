import { useState } from "react"

const useForm = (valorInicial = {}) => {

    const [values, setValues] = useState(valorInicial)

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        })

    }

    return [values, handleInputChange]
}

export default useForm