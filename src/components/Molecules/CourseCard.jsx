import React from "react";
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const curso = {
  'title': 'react desde cero',
  'image': "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  'price': '50 mil'
}

const Curso = ({id, title, image, price, professor}) => (
    <article className="card" id={title}>
      <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <Link to={ `/cursos/${id}` }>
          <img alt='cc' src={image} />
        </Link>
      </div>
      <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="t5 s-mb-2 s-center">
          { title }
        </h3>
        <div className="s-mb-2 s-main-center">
          <div className="card__teacher s-cross-center">
            <div className="card__avatar s-mr-1">
              <div className="circle img-container">
                <img alt='banner' src={image}></img>
              </div>
            </div>
            <span className="small">
              {`Profesor: ${professor}`}
            </span>
          </div>
        </div>
        <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="https://images.unsplash.com/">{`$ ${price} `}</a>
        </div>
      </div>
    </article>
)

Curso.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
  profesor: PropTypes.string
}

Curso.defaultProps = {
  title: 'no se encontro titulo',
  image: 'https://lh3.googleusercontent.com/proxy/QpfvYiD5lGBct5_46iePDFgricwT1O6PkQxXtkJJWC_Qa4TL8P3x-HFW1XNiXGSDrs-47FUG_INYIexwF_g7jrsafrfdvfXhxLSd1J1yj1zZ-XI1fKc',
  price: 'precio no encontrado',
  profesor: 'envolatado'  
}
export default Curso;

