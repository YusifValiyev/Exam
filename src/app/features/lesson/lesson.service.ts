import { Injectable } from "@angular/core";
import { Lesson } from "../../core/model/lesson.model";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class LessonService {
    private key = "lessons";
    private lessons: Lesson[] = [];

    constructor() {
        const data = localStorage.getItem(this.key);
        this.lessons = data ? JSON.parse(data) : [];
    }

    saveLessons() {
        localStorage.setItem(this.key, JSON.stringify(this.lessons));
    }

    getLessons(): Lesson[] {
        return this.lessons;
    }

    addLesson(lesson: Lesson) {
        this.lessons.push(lesson);
        this.saveLessons();
    }
}
