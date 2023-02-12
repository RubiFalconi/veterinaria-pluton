import { Component, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { ThemePalette } from '@angular/material/core';

//interface select
interface Food {
  value: string;
  viewValue: string;
}

//chips
export interface ChipColor {
  name: string;
}

@Component({
  selector: 'app-historial-clinico',
  templateUrl: './historial-clinico.component.html',
  styleUrls: ['./historial-clinico.component.css']
})
export class HistorialClinicoComponent {
  //autocomplete
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  //data select
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  
  //accordion  
  @ViewChild(MatAccordion) accordion: MatAccordion;

  //chips
  availableColors: ChipColor[] = [
    {name: 'none'},
    {name: 'Primary'},
    {name: 'Accent'},
    {name: 'Warn'},
  ];

  constructor() {
  }  

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }


  
}
