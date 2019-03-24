import { Component, OnInit } from '@angular/core';
import {SitesService} from '../../shared/services/sites.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.sass']
})
export class SitesComponent implements OnInit {

  sitesData: [];

  constructor(private sitesService: SitesService) { }

  ngOnInit() {
   this.getSitesData();
  }

  getSitesData() {
    this.sitesService.getSitesForCurrentUser().pipe(take(1)).subscribe((response: any) => {
        this.sitesData = response.sites;
        this.sitesData.forEach((site: any) => {
          site.editMode = false;
          site.patch = {
            max_cpc: site.max_cpc,
            daily_budget: site.daily_budget,
            currency: site.currency,
            language_code: site.language_code,
            brand: site.brand
          };
        });
      }
    );
  }

  save(id: number, patch) {
    this.sitesService.editSite(id, patch).subscribe(_response => {
      this.getSitesData();
    });
  }

}
