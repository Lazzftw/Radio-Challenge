import { Component, OnInit } from '@angular/core';
import { Stations } from 'src/app/models/stations.module';
import { StationsListService } from 'src/app/services/stations-list/stations-list.service';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stations-list',
  templateUrl: './stations-list.component.html',
  styleUrls: ['./stations-list.component.scss']
})
export class StationsListComponent implements OnInit {

  stations!: Stations[];
  isClicked : boolean = false;
  selectedIndex!: number;
  selectedStation!: Stations;
  faPlus= faPlusCircle
  faMinus= faMinusCircle
  constructor(private api: StationsListService) { }

  ngOnInit(): void {
    this.api.getStationsList().subscribe((data:Stations[]) => {
      this.stations = data;
      console.log(this.stations)
    })
  }
  onClicked(index : number, station : Stations){
    this.isClicked= true;
    this.selectedIndex = index
    this.selectedStation = station
  }

  onMinus(index : number){
    
    this.selectedIndex = 1
    console.log(this.selectedIndex)
    this.isClicked= true;
  }

}
