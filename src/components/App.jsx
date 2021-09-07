import React from 'react'
import './../styles/styles.scss'
import Form from './Pages/Form'
import CourseGrid from './Organisms/CourseGrid'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Course from './Pages/Course'
import MainMenu from './Organisms/MainMenu'
import History from './Pages/History'
import Home from './Pages/Home'
import Users from './Pages/Users'


const App = () => (
  <Router >
    <MainMenu />
    <Switch>
      <Route path='/' exact component={ Home } />
      <Route path='/cursos/:id' exact component={ Course } />
      <Route path='/cursos' exact component={ CourseGrid } />
      <Route path='/historial' exact component={ History } />
      <Route path='/usuarios' exact component={ Users } />
      <Route path='/formulario' exact component={ () =>  <Form name='pagina de contacto' /> } />
      <Route component = {() => (
          <div className='ed-grid' >
            <h1>Error 404</h1>
            <span>Pagina no encontrada</span>
          </div>
        )}
      />
    </Switch>
  </Router>
  

)

export default App;
