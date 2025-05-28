import { BehaviorSubject } from "rxjs";
import { Injectable } from "@angular/core";
import { Exam } from "../../core/model/exam.model";

@Injectable({
    providedIn: "root",
})
export class ExamService {
    private key = "exams";
    private exams: Exam[] = [];

    saveExams(){
        localStorage.setItem(this.key, JSON.stringify(this.exams));
    }
    getExams() {
        const data = localStorage.getItem(this.key);
        this.exams = data ? JSON.parse(data) : [];
        return this.exams;
    }

    addExam(exam: Exam) {
        this.exams.push(exam);
        this.saveExams();
    }
}
