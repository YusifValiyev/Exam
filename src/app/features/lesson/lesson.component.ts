import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Lesson } from "../../core/model/lesson.model";
import { LessonService } from "./lesson.service";

@Component({
    selector: "app-lessons",
    templateUrl: "./lesson.component.html",
    styleUrl: "./lesson.component.css",
})
export class LessonsComponent implements OnInit {
    lessons!:Lesson[]
    isCreate: boolean = false;


    constructor(private lessonService: LessonService) {}

    ngOnInit() {
        this.lessons = this.lessonService.getLessons();
    }

    openModal(){
        this.isCreate = true
    }

    closeModal(){
        this.isCreate = false
    }
}
