import { Student } from '~/models/students/student';
import { v4 as uuidv4 } from 'uuid';
import { BaseService } from './base.service';

export class StudentService extends BaseService {
    static students: Student[] = [
        {
            id: 'psjfdoijfs',
            schoolTutorId: 'isdjfoidsf',
            firstName: 'Allison',
            lastName: 'Kenter',
            currentClass: 'L3',
            pictureUrl:
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            phoneNumber: '090880080898',
            email: 'allision@gmail.com',
        },
        {
            id: 'psjfdoijfs',
            schoolTutorId: 'isdjfoidsf',
            firstName: 'Wilson',
            lastName: 'Herwitz',
            currentClass: 'M2',
            pictureUrl:
                'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
            phoneNumber: '090880080898',
            email: 'Wilson@gmail.com',
        },
        {
            id: 'psjfdoijfs',
            schoolTutorId: 'isdjfoidsf',
            firstName: 'Ahmad',
            lastName: 'Saris',
            currentClass: 'M2',
            pictureUrl:
                'https://images.unsplash.com/photo-1535931737580-a99567967ddc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80',
            phoneNumber: '090880080898',
            email: 'Wilson@gmail.com',
        },
    ];

    async getStudent(id: string) {
        try {
            return (
                await this.axios.get<Student>(`/students/${id}`, {
                    withCredentials: true,
                })
            ).data;
        } catch (err) {
            console.debug(err);
            throw err;
        }
    }
    async getStudents() {
        try {
            return (
                await this.axios.get<Student[]>('/students', {
                    withCredentials: true,
                })
            ).data;
        } catch (err) {
            console.debug(err);
            throw err;
        }
    }

    async getArchivedStudent() {
        return StudentService.students;
    }

    async create(student: Student) {
        try {
            return (
                await this.axios.post<Student>('/students', student, {
                    withCredentials: true,
                })
            ).data;
        } catch (err) {
            console.debug(err);
            throw err;
        }
    }

    async archive(id: string) {}

    async edit(student: Student) {
        try {
            return (
                await this.axios.put<Student>(`/students/${student.id}`, student, {
                    withCredentials: true,
                })
            ).data;
        } catch (err) {
            console.debug(err);
            throw err;
        }
    }
}
