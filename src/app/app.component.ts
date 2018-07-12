import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import {
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
} from "@angular/forms";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'accountability';
    push: number;
    sit: number;
    run: number;
    date: string;
    form: FormGroup;
    currentDate: number = Date.now();
    constructor(
        private http: HttpClient,
        private formBuilder: FormBuilder,
    ) { } ngOnInit() {
        this.form = this.formBuilder.group({
            run: [null, Validators.required],
            situps: [null, Validators.required],
            pushups: [null, Validators.required]
        });

    }
    onSubmit() {
        if (this.form.valid) {
            console.log(this.form.value)
            this.run = this.form.value.run;
            this.sit = this.form.value.situps;
            this.push = this.form.value.pushups;
            this.form.reset();
            var payload = [
                this.run,
                this.sit,
                this.push,
            ]
            this.http.post('/dailypost', payload)
                .subscribe(data => console.log(data))
        }
        console.log('nu uh')

    }



}
