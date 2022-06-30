import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {startWith, map} from 'rxjs/operators';

export interface StateGroup {
  category: string;
  names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().includes(filterValue));
};

@Component({
  selector: 'app-mission-location',
  templateUrl: './mission-location.component.html',
  styleUrls: ['./mission-location.component.scss']
})
export class MissionLocationComponent implements OnInit {
  
  stateForm = this._formBuilder.group({
    stateGroup: '',
  });

  stateGroups: StateGroup[] = [
    {
      category: 'ABC',
      names: ['ABC Einsatz'],
    },
    {
      category: 'Gebäude',
      names: ['Brand Gebäude', 'Brand Gebäude klein', 'Brand Gebäude groß'],
    },
    {
      category: 'Fahrzeug',
      names: ['Brand PKW', 'Brand LKW', 'Brand PKW + LKW'],
    },
  ];

  stateGroupOptions: any;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterGroup(value || '')),
    );
  }

  private _filterGroup(value: string): StateGroup[] {
    if (value) {
      return this.stateGroups
        .map(group => ({category: group.category, names: _filter(group.names, value)}))
        .filter(group => group.names.length > 0);
    }

    return this.stateGroups;
  }
}

