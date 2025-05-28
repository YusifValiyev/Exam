import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ExamService } from "../exam.service";
import { StudentService } from "../../student/student.service";
import { LessonService } from "../../lesson/lesson.service";
import { Lesson } from "../../../core/model/lesson.model";
import { Student } from "../../../core/model/student.model";

@Component({
    selector: "app-new-exam",
    templateUrl: "./new-exam.component.html",
    styleUrl: "./new-exam.component.css",
})
export class NewExamComponent implements OnInit {
    examForm!: FormGroup;
    lessons!:Lesson[]
    students!:Student[]
    @Output() close = new EventEmitter<void>();

    constructor(
        private fb: FormBuilder,
        private examService: ExamService,
        private studentService: StudentService,
        private lessonService: LessonService
    ) {}

    ngOnInit() {
        this.lessons = this.lessonService.getLessons();
        this.examForm = this.fb.group({
            lessonCode: ["", Validators.required],
            studentId: ["", Validators.required],
            date: ["", Validators.required],
            grade: [
                "0",
                [Validators.required, Validators.min(0), Validators.max(100)],
            ],
        });

        this.examForm.get("lessonCode")?.valueChanges.subscribe((lessonCode)=>{
            const [code,lessonClass] = lessonCode.split('_')
            this.getStudents(Number(lessonClass))
            this.examForm.get("studentId")?.reset();
        })
    }

    getStudents(lessonClass:number){
        this.students = this.studentService.getStudentByClass(lessonClass)
    }

    onClose() {
        this.close.emit();
    }

    onSubmit() {
        if (this.examForm.invalid) return;
        const newExam = {
            ...this.examForm.value,
            studentId:Number(this.examForm.value.studentId),
            lessonCode: this.examForm.value.lessonCode.split("_")[0],
        }
        this.examService.addExam(newExam);
        this.onClose();
    }
}
