import { Component, OnInit } from "@angular/core";
import { StudentService } from "./student.service";
import { Student } from "../../core/model/student.model";

@Component({
    selector: "app-student",
    templateUrl: "./student.component.html",
    styleUrl: "./student.component.css",
})
export class StudentComponent implements OnInit {
    students!: Student[];
    isCreate: boolean = false;
    constructor(private studentService: StudentService) {}

    ngOnInit() {
        this.students = this.studentService.getStudents();
    }
    openModal() {
        this.isCreate = true;
    }

    closeModal() {
        this.isCreate = false;
    }
}
