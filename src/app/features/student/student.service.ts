import { Student } from "../../core/model/student.model";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class StudentService {
    private key = "students";
    private students: Student[] = [];

    constructor() {
        const data = localStorage.getItem(this.key);
        this.students = data ? JSON.parse(data) : [];
    }

    saveStudents() {
        localStorage.setItem(this.key, JSON.stringify(this.students));
    }

    getStudents() {
        return this.students;
    }

    getStudentByClass(lessonClass: number) {
        return this.students.filter(student => student.class === lessonClass);
    }

    addStudent(student: Student): boolean {
        if (this.studentIsExist(student.studentNumber)) {
            return false;
        }
        this.students.push(student);
        this.saveStudents();
        return true;
    }

    studentIsExist(studentNumber: number) {
        return this.students.some(student => student.studentNumber === studentNumber);
    }
}
