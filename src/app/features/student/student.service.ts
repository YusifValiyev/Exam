import { Student } from "../../core/model/student.model";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class StudentService {
    private key = "students";
    private students: Student[] = [];

    saveStudents() {
        localStorage.setItem(this.key, JSON.stringify(this.students));
    }

    getStudents() {
        const data = localStorage.getItem(this.key);
        this.students = data ? JSON.parse(data) : [];
        return this.students;
    }

    getStudentByClass(lessonClass: number) {
        this.getStudents();
        return this.students.filter((student) => student.class === lessonClass);
    }

    addStudent(student: Student) {
        if (this.studentIsExist(student.studentNumber)) {
            alert("Bu kod ile sagird movcuddur");
            return;
        }
        this.students.push(student);
        this.saveStudents();
    }

    studentIsExist(studentNumber: number) {
        this.getStudents();
        return this.students.find(
            (student) => student.studentNumber === studentNumber
        )
            ? true
            : false;
    }
}
