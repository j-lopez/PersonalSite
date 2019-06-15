import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-individual-project',
    templateUrl: './individual-project.component.html',
    styleUrls: ['./individual-project.component.css'],
})
export class IndividualProjectComponent {
    @Input() project;
    show = false;
    button = "See more";

    constructor() {
        
    }

    changeLongDescription() {
        if (this.show) { this.button = "See more" }
        else { this.button = "See less"}
        this.show = !this.show;
    }

    showDescription(){
        return this.show;
    }
}
