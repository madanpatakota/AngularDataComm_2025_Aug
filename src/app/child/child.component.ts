import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input('catchInput') userName:string;   //taking

  @Output('postLocationEmitter')  LocationEmitter = new EventEmitter<string>();  //giving
  

  //locatoin = "Bengolore";

  evtClickMe(){
     //this.userName = this.userName + " Updated....";
     this.userName = "Mohan";
  }

  evtPostLocation(){
    this.LocationEmitter.emit("Bengolore");
  }



}
