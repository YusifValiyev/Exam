import { Component, OnInit } from "@angular/core";
import { Exam } from "../../core/model/exam.model";
import { ExamService } from "./exam.service";

@Component({
    selector: "app-exam",
    templateUrl: "./exam.component.html",
    styleUrl: "./exam.component.css",
})
export class ExamComponent implements OnInit {
    exams!: Exam[];
    isCreate: boolean = false;

    constructor(private examService: ExamService) {}

    ngOnInit() {
        this.exams = this.examService.getExams();
    }
    openModal() {
        this.isCreate = true;
    }

    closeModal() {
        this.isCreate = false;
    }
}
