import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-individual-project',
    templateUrl: './individual-project.component.html',
    styleUrls: ['./individual-project.component.css'],
})
export class IndividualProjectComponent {
    // Created this component so each project can have control of its view.
    @Input() project;
    show = false;
    button = "Read more";

    constructor() {
        
    }

    changeLongDescription() {
        if (this.show) { this.button = "Read more" }
        else { this.button = "Read less"}
        this.show = !this.show;
    }

    // Used for ternary conditional
    showDescription(){
        return this.show;
    }
}
