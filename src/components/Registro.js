import { useForm } from "react-hook-form";

const Contacto = () => {

    const { register, handleSubmit, reset } = useForm();

    const enviar = (data) => {
        reset()
    }

  return (

    <div className="container">
        <h1 className="main-title">Registrese sus datos en la app de Drink House</h1>
        <form className="formulario" onSubmit={handleSubmit(enviar)}>

            <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
            <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
            <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />

            <button className="enviar" type="submit"  >Enviar</button>

        </form>
    </div>

    

  )
}

export default Contacto