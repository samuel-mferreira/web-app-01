import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    projectName: string;
    logo: string;
    constructor() {
        this.projectName = 'Project Name'
        this.logo = 'assets/imgs/logo.png'
    }

    ngOnInit(): void {
    }

}
