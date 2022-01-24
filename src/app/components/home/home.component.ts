import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
//typd animation script



  constructor() { }

  ngOnInit(): void {

  const   typed=new Typed(".typing",{
      strings:["Backend Developer","Front-End Developer","Youtuber"],
      typeSpeed: 100,
      backSpeed: 10,
      loop: true
    });
  }

}
