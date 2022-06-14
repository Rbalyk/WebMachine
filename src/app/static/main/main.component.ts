import { Component, OnInit } from '@angular/core';
import {NavigationInterface} from "../../interfaces/navigation.interface";
import Navigation from "../../classes/navigation";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  showFiller = false;
  navigation: NavigationInterface[] = [];

  constructor() { }

  ngOnInit(): void {
    this.navigation = Navigation.navigation;
  }

}
