import React, { useState } from 'react'

const formInicial = {
    nombre: '',
    apellido: '',
    correo: ''
}

const Formulario = () => {

    const [form, setForm] = useState(formInicial)

    const handleChange = (e) => {
        console.log('Cambió el input')
        
        setForm({
            ...form,
            [e.target.name]: e.target.value /* input.target.name = input.target.value  */
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault() 
        console.log('Se envió el formulario')
    }

return (
    <>
        <form className='bg-warning p-3' onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="lbl-nombre" className="form-label">
                    Nombre
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="lbl-nombre"
                    name='nombre'
                    placeholder="Ingrese su nombre"
                    onChange={handleChange}
                    value={form.nombre}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="lbl-apellido" className="form-label">
                    Apellido
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="lbl-apellido"
                    name='apellido'
                    placeholder="Ingrese su apellido"
                    onChange={handleChange}
                    value={form.apellido}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="lbl-correo" className="form-label">
                    Correo
                </label>
                <input
                    type="email"
                    className="form-control"
                    id="lbl-correo"
                    name='correo'
                    placeholder="Ingrese su correo"
                    onChange={handleChange}
                    value={form.correo}
                />
            </div>

            <button type='submit' className='btn btn-dark'>Enviar</button>

        </form>
    </>
);
}

export default Formulario