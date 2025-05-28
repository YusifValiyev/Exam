import { Component, EventEmitter, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { StudentService } from "../student.service";

@Component({
    selector: "app-new-student",
    templateUrl: "./new-student.component.html",
    styleUrl: "./new-student.component.css",
})
export class NewStudentComponent {
    studentForm!: FormGroup;
    @Output() close = new EventEmitter<void>();

    constructor(
        private fb: FormBuilder,
        private studentService: StudentService
    ) {}

    ngOnInit() {
        this.studentForm = this.fb.group({
            studentNumber: [
                "",
                [
                    Validators.required,
                    Validators.maxLength(5),
                    Validators.minLength(5),
                ],
            ],
            name: ["", Validators.required],
            surname: ["", Validators.required],
            class: [
                "1",
                [Validators.required, Validators.min(1), Validators.max(11)],
            ],
        });
    }

    onClose() {
        this.close.emit();
    }

    onSubmit() {
        if (this.studentForm.invalid) return;
        const newStudent={
            ...this.studentForm.value,
            studentNumber:Number(this.studentForm.value.studentNumber),
            class:Number(this.studentForm.value.class)
        }
        console.log(newStudent);
        this.studentService.addStudent(newStudent);
        this.onClose();
    }
}
