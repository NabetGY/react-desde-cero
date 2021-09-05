import React from 'react';
import './styles/styles.scss';
import Curso from './Curso'


const cursos = [
  {
    'title': 'react desde cero',
    'image':'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    'price':'59 mil',
    'profesor':'nabet',
  },
  {
    'title': 'python desde cero',
    'image':'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    'price':'49 mil',
    'profesor':'nabet',
  },
  {
    'title': 'java desde cero',
    'image':'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    'price':'39 mil',
    'profesor':'nabet',
  },
  {
    'title': 'c desde cero',
    'image':'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    'price':'89 mil',
    'profesor':'nabet',
  },
  

]
const App = () => (
  <>
    <div className="main-banner img-container l-section" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" alt='banner' src="https://ux.ed.team/img/curso-portada.png"></img>
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Título del banner</p>
            <p> Subtítulo del banner</p>
            <a href="https://images.unsplash.com" className="button">Botón del banner</a>
          </div>
        </div>
      </div>
    </div>

    <div className='ed-grid m-grid-3'>
      {
        cursos.map( curso => <Curso title={curso.title} image={curso.image} price={curso.price} profesor={curso.profesor}/>)
      }
       <Curso />

    </div>

  </>
)

export default App;
