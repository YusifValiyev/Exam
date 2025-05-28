import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { LessonsComponent } from "./features/lesson/lesson.component";
import { RouterModule, Routes } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { StudentComponent } from "./features/student/student.component";
import { ExamComponent } from "./features/exam/exam.component";
import { ReactiveFormsModule } from "@angular/forms";
import { NewLessonComponent } from "./features/lesson/new-lesson/new-lesson.component";
import { NewExamComponent } from "./features/exam/new-exam/new-exam.component";
import { NewStudentComponent } from "./features/student/new-student/new-student.component";
import { NavbarComponent } from "./layout/navbar/navbar.component";

const routes: Routes = [
    { path: "lesson", component: LessonsComponent },
    { path: "student", component: StudentComponent },
    { path: "exam", component: ExamComponent },
    { path: "", redirectTo: "lesson", pathMatch: "full" },
    { path: "**", redirectTo: "lesson", pathMatch: "full" },
];

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        LessonsComponent,
        StudentComponent,
        ExamComponent,
        NewLessonComponent,
        NewExamComponent,
        NewStudentComponent
    ],
    bootstrap: [AppComponent],
    imports: [RouterModule.forRoot(routes), BrowserModule, ReactiveFormsModule],
    providers: [],
    exports: [RouterModule],
})
export class AppModule {}
