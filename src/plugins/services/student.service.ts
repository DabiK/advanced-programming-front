import { Student } from '~/models/students/student';
import { v4 as uuidv4 } from 'uuid';
export class StudentService {
    static students: Student[] = [
        {
            id: 'psjfdoijfs',
            schoolTutorId: 'isdjfoidsf',
            firstName: 'Allison',
            lastName: 'Kenter',
            class: 'L3',
            picture:
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            phoneNumber: '090880080898',
            email: 'allision@gmail.com',
            description: 'description',
        },
        {
            id: 'psjfdoijfs',
            schoolTutorId: 'isdjfoidsf',
            firstName: 'Wilson',
            lastName: 'Herwitz',
            class: 'M2',
            picture:
                'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
            phoneNumber: '090880080898',
            email: 'Wilson@gmail.com',
            description: 'description',
        },
        {
            id: 'psjfdoijfs',
            schoolTutorId: 'isdjfoidsf',
            firstName: 'Ahmad',
            lastName: 'Saris',
            class: 'M2',
            picture:
                'https://images.unsplash.com/photo-1535931737580-a99567967ddc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80',
            phoneNumber: '090880080898',
            email: 'Wilson@gmail.com',
            description: 'description',
        },
    ];

    async getStudents() {
        return StudentService.students;
    }

    async getArchivedStudent() {
        return StudentService.students;
    }

    async create(student: Student) {
        try {
            //TODO: to be removed
            student.id = uuidv4();
            StudentService.students.push(student);
            return student;
        } catch (err) {
            console.debug(err);
            throw err;
        }
    }
}
