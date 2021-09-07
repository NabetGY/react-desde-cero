import React, {Component} from "react"

class Formulario extends Component {

    constructor(props) {
        super(props)

        this.state = {
            nombre: '',
            correo: '',
            fecha: new Date()
        }

        this.cambiarNombre = this.cambiarNombre.bind(this)
        this.cambiarEmail = this.cambiarEmail.bind(this)
        this.cambiarFecha = this.cambiarFecha.bind(this)



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

    cambiarFecha(e) {
        this.setState({
            fecha: new Date()
        })
    }

    render() {
        return (
            <div className='ed-grid' >
                <h1>Formulario {this.props.name}</h1>
                <h4>Fecha actual {Math.ceil(this.state.fecha/1000)}</h4>
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


    componentDidMount(){
        this.intervaloFecha = setInterval(() => {
            this.cambiarFecha()
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.intervaloFecha)
    }


}

export default Formulario