import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mission-date',
  templateUrl: './mission-date.component.html',
  styleUrls: ['./mission-date.component.scss']
})
export class MissionDateComponent implements OnInit {
  selected: Date | null;
  constructor() { 
    this.selected = null;
  }

  ngOnInit(): void {
    this.setDateValue(this.selected);
  }

  setDateValue(selected:any):void{
    localStorage.setItem('MissionDate', selected);
    var Date = localStorage.getItem('MissionDate');
    console.log(Date);
  }
}
