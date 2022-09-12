import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewPharmacy } from 'src/app/model/new-pharmacy.model';
import { AdminServices } from 'src/app/services/adminservices';
import {} from 'rxjs/add/operator/toPromise';
import { PharmacyCardComponent } from 'src/app/pharmacy/tools/pharmacy-card/pharmacy-card.component';
@Component({
  selector: 'app-vplus-pharmacy',
  templateUrl: './vplus-pharmacy.component.html',
  styleUrls: ['./vplus-pharmacy.component.css']
})
export class VplusPharmacyComponent implements OnInit {
PharmacyNames:any;
Pharma:NewPharmacy[];

  constructor(private router:Router,
    private pharmacyService:AdminServices) {
      this.Pharma=[];
     }

  ngOnInit(){
    this.pharmacyService.getPharmacyList().subscribe(res => {
      this.Pharma = res.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Object
        } as any;
      })
      console.log(this.Pharma);
    });
  }
//routings
 newShop()
  {
    this.router.navigate(['new_pharmacy']);
  }
  newStaff()
  {
    this.router.navigate(['staff']);
  }
  openDictionary()
  {
    this.router.navigate(['new-dict']);
  }
  category()
  {
    this.router.navigate(['ph_category']);
  }
  salesWindow(){
    this.router.navigate(['ph_overall_s']);
  }
  purchaseWindow(){
    this.router.navigate(['ph_overall_p']);
  }
}
