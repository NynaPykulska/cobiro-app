import { Component, OnInit } from '@angular/core';
import {SitesService} from '../../shared/services/sites.service';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.sass']
})
export class SitesComponent implements OnInit {

  constructor(private sitesService: SitesService) { }

  ngOnInit() {
  }

}
