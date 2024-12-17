import { useState } from 'react';
import StudentItem from './StudentItem';

const students = [
    {
        id: 1,
        firstName: 'Test',
        lastName: '1',
    },
    {
        id: 2,
        firstName: 'Test',
        lastName: '2',
    },
    {
        id: 3,
        firstName: 'Test',
        lastName: '3',
    },
    {
        id: 4,
        firstName: 'Test',
        lastName: '4',
    }
]

export default function StudentList() {
    
    const [search, setSearch] = useState('')

    return (
        <div className='p-5 mt-3' style={{
            maxWidth: 500, 
            width: '100%',
        }}>
            
            <div className='mb-4'>
                <input 
                    type="text" 
                    placeholder='Type to search...'
                    className='form-control'
                    autoFocus
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className='list-group'>    
                {students
                    .filter(s => s.firstName.includes(search) || s.lastName.includes(search))
                    .map((student, index) => <StudentItem 
                        customClass='list-group-item'
                        style={{backgroundColor: index % 2 ? '#d5d5d5' : '#eee'}} 
                        key={student.id} 
                        student={student}
                    />)}
            </div>
        </div>
    );
}
