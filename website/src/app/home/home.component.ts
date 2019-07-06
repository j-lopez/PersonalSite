import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Want to have people scroll smoothly to parts of the page
  scroll(id){
    let el = document.getElementById(id);
    el.scrollIntoView({behavior: 'smooth'});
  }

}