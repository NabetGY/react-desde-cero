import React from "react"

const cursos = [
    {
        'id' : 1,
        'titulo': 'React desde cero',
        'image': 'https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        'price': 40,
        'profesor': 'Nabet'

    },
    {
        'id' : 2,
        'titulo': 'Python desde cero',
        'image': 'https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        'price': 40,
        'profesor': 'Zel'

    },
    {
        'id' : 3,
        'titulo': 'C desde cero',
        'image': 'https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        'price': 50,
        'profesor': 'Nabet'

    },
    {
        'id' : 4,
        'titulo': 'java desde cero',
        'image': 'https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        'price': 30,
        'profesor': 'Nabet'

    },
]

const CourseCard = ({ match }) => {

    const CursoActual = cursos.filter(c => c.id === parseInt(match.params.id))[0]

    return (
        <div className='ed-grid m-grid-3'>
        {
            CursoActual ? (
                <>
                    <h1 className='m-cols-3'>Curso: { CursoActual.titulo } </h1>
                    <img className='m-cols-1' alt='imagens' src={ CursoActual.image } />
                    <p className='m-cols-2'>Profesor: { CursoActual.profesor } </p>
                </>
            )
            :
            (
                <h1>El curso no existe</h1>
            )
        }
        </div>
    )
}

export default CourseCard