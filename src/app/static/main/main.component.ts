import { Component, OnInit } from '@angular/core';
import { Navigation } from "../../interfaces/navigation.interface";
import { MainService } from "../../services/main.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  isNavigation = true;
  navigation: Navigation[] = [];

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.initNavigation();
  }

  private initNavigation(): void {
    this.mainService.getTopics().subscribe( (response) => {
      this.navigation = response;
    })
  }



}
