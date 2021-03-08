import { Component } from '@angular/core';
import{AppService} from "./app.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project1';
  aboutData:any[]
  constructor(private appService:AppService){
    this.aboutData=[];
    this.appService.getabout().subscribe(about=>
      {
        this.aboutData=about.data
      })
  }
}
