import { Component, Input } from '@angular/core'

import { personalSkills } from './../personalSkills';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.css',
                '../app.component.css']
})
export class SkillsComponent {
    personalSkills = personalSkills;

    constructor () {} 
    
}