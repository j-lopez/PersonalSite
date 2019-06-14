import { Component } from '@angular/core';

import { personalProjects } from './../personalProjects';
@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
    personalProjects = personalProjects;
    
    constructor() { }

    showLongDescription() {
        console.log("Will figure this out soon");
    }
}