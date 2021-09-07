import React from "react"
import CourseCard from "../Molecules/CourseCard"

const courses = [
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

const CourseGrid = () => (
    <div className="ed-grid m-grid-4">
        { courses.map(c => (
            <CourseCard
                key={c.id}
                id={c.id}
                title={c.titulo}
                image={c.image}
                price={c.price}
                professor={c.profesor}
                
            />
        )) }
    </div>
)

export default CourseGrid