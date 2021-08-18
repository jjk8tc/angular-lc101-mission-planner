import { DomElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  itemBeingEdited: string=null;
  equipment=["Habitat Dome", "Drones", "Food containers", "Oxygen tanks"];
  
  constructor() { }

  ngOnInit() {
  }

  add(newEquiment:string){
    this.equipment.push(newEquiment);
  }

  remove(item: string){
    let index=this.equipment.indexOf(item);
    this.equipment.splice(index,1);
  }

  edit(item: string) {
    this.itemBeingEdited = item;
  }

  save(name:string, item: string){
    let index=this.equipment.indexOf(item);
    this.equipment.splice(index,1,name);
  }

}
