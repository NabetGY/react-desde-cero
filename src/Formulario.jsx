import React, {Component} from "react"

class Formulario extends Component {

    constructor(props) {
        super(props)

        this.state = {
            nombre: '',
            correo: ''
        }

        this.cambiarNombre = this.cambiarNombre.bind(this)
        this.cambiarEmail = this.cambiarEmail.bind(this)

    }

    cambiarNombre(e) {
        this.setState({
            nombre: e.target.value
        })
    }

    cambiarEmail(e) {
        this.setState({
            correo: e.target.value
        })
    }

    render() {
        return (
            <div className='ed-grid' >
                <h1>Formulario</h1>
                <form action="">
                    <div className="ed-grid m-grid-2">    
                        <div className='form__item'>
                            <label htmlFor="">Nombre completo</label>
                            <input type="text" onChange={ this.cambiarNombre }
                            />
                        </div>
                        <div className="form__item">
                            <label htmlFor="">Correo electronico</label>
                            <input type="email" name="" id="" onChange={ this.cambiarEmail } 
                            />
                        </div>
                    </div>
                </form>

                <div className="">
                    <h2>
                        {`hola ${this.state.nombre}`}
                    </h2>
                    <span>
                        {`Tu correo es: ${this.state.correo}`}
                    </span>
                </div>
            </div>
        )
    }
}

export default Formulario