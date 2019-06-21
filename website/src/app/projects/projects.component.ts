import { Component } from '@angular/core';

import { personalProjects } from './../personalProjects';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css',
                '../app.component.css'],
})
export class ProjectsComponent {
    personalProjects = personalProjects;
    
    constructor() { }

    showLongDescription() {
        console.log("Will figure this out soon");
        var desc = document.getElementById("longDescription");
        var button = document.getElementById("readButton");

        if (desc.style.display === 'none') {
            desc.style.display = 'inline';

        }

    }
}