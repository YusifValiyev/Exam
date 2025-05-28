import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LessonService } from "../lesson.service";

@Component({
    selector: "app-new-lesson",
    templateUrl: "./new-lesson.component.html",
    styleUrl: "./new-lesson.component.css",
})
export class NewLessonComponent implements OnInit {
    lessonForm!: FormGroup;
    @Output() close = new EventEmitter<void>();

    constructor(
        private fb: FormBuilder,
        private lessonService: LessonService
    ) {}

    ngOnInit() {
        this.lessonForm = this.fb.group({
            code: [
                "",
                [
                    Validators.required,
                    Validators.maxLength(3),
                    Validators.minLength(3),
                ],
            ],
            name: ["", Validators.required],
            class: [
                "1",
                [Validators.required, Validators.min(1), Validators.max(11)],
            ],
            teacherName: ["", Validators.required],
            teacherSurname: ["", Validators.required],
        });
    }

    onClose() {
        this.close.emit();
    }

    onSubmit() {
        if (this.lessonForm.invalid) return;
        this.lessonService.addLesson(this.lessonForm.value);
        this.onClose();
    }
}
