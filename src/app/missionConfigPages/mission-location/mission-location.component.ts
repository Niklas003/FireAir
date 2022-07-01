import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';

export interface MissionGroup {
  letter: string;
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
  missionForm: FormGroup = this._formBuilder.group({
    missionGroup: '',
  });

  missionGroups: MissionGroup[] = [
    {
      letter: 'ABC',
      names: ['ABC Einsatz'],
    },
    {
      letter: 'Gebäude',
      names: ['Brand Gebäude', 'Brand Gebäude klein', 'Brand Gebäude groß'],
    },
    {
      letter: 'Fläche',
      names: ['Brand Fläche', 'Brand Fläche klein', 'Brand Fläche groß'],
    },
    {
      letter: 'Wald',
      names: ['Brand Wald', 'Brand Wald klein', 'Brand Wald groß'],
    },
    {
      letter: 'Fahrzeug',
      names: ['Brand PKW', 'Brand LKW', 'Brand PKW + LKW', 'Brand Wasserfahrzeug', 'Brand Luftfahrzeug', 'Brand Schienenfahrzeug'],
    },
  ];

  missionGroupOptions!: Observable<MissionGroup[]>;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.missionGroupOptions = this.missionForm.get('missionGroup')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterGroup(value)),
    );
  }

  private _filterGroup(value: string): MissionGroup[] {
    if (value) {
      return this.missionGroups
        .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
        .filter(group => group.names.length > 0);
    }

    return this.missionGroups;
  }
}

