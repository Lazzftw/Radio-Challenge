import { Component, OnInit } from '@angular/core';
import { Stations } from 'src/app/models/stations.module';
import { StationsListService } from 'src/app/services/stations-list/stations-list.service';
import { faPlusCircle, faMinusCircle, faVolumeUp } from '@fortawesome/free-solid-svg-icons';

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
  faPlus= faPlusCircle;
  faMinus= faMinusCircle;
  faVolume= faVolumeUp;
  volumeBar: boolean = false;
  volumeValue: number = 2
  mytimeout!: any;


  constructor(private api: StationsListService) { }

  ngOnInit(): void {
    this.api.getStationsList().subscribe((data:Stations[]) => {
      this.stations = data;
      console.log(this.stations)
    })
  }
  onClicked(index : number, station : Stations){
    this.isClicked= true;
    this.selectedIndex = index;
    this.selectedStation = station;
  }

  onMinus(){
    clearTimeout(this.mytimeout);
    this.volumeValue<=0 ? this.volumeValue =0 : this.volumeValue--
    this.volumeBar=true
    this.mytimeout =setTimeout(() => {
      this.volumeBar=false
    }, 3000);
  }

  onPlus(){
    clearTimeout(this.mytimeout);
    this.volumeValue>=5 ? this.volumeValue =5 : this.volumeValue++
    this.volumeBar=true
    this.mytimeout =setTimeout(() => {
      this.volumeBar=false
    }, 3000);
  }

}
