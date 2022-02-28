import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grettings',
  templateUrl: './grettings.component.html',
  styleUrls: ['./grettings.component.css']
})
export class GrettingsComponent implements OnInit {
@Input() userName:string='You'
  constructor() { }

  ngOnInit(): void {
  }

}
