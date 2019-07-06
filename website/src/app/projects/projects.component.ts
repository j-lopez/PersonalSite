import { Component } from '@angular/core';

import { personalProjects } from './../personalProjects';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css',
                '../app.component.css'],
})
export class ProjectsComponent {
    // Parent component to easily create new projects by updating personalProjects.ts
    personalProjects = personalProjects;
    
    constructor() { }
}