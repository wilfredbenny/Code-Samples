import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminServices } from 'src/app/services/adminservices';
import { NewPharmacy } from 'src/app/model/new-pharmacy.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PharmacyCardComponent } from 'src/app/pharmacy/tools/pharmacy-card/pharmacy-card.component';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-shop-handler',
  templateUrl: './shop-handler.component.html',
  styleUrls: ['./shop-handler.component.css']
})
export class ShopHandlerComponent implements OnInit {
  isValid:any;
public handlerForm: FormGroup;
 Pharma:NewPharmacy[];
 P_Name:any;
 P_ID:any;
 P_Phone:any;
 P_Details:any;
 P_Password:any;
 P_GST:any;
 P_Address:any;
 Phandler:any;
 pRef:any;


  constructor(
    public formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private pharmacyService:AdminServices,
    private afs:AngularFirestore


  ) {

    this.handlerForm = this.formBuilder.group({


      Name: [''],
      Password: [''],
      GST: [''],
      Phone: [''],
      Address: [''],
      Others:['']


    })


   }

  ngOnInit(): void {

    this.isValid=true;


    this.
    route.
    params.
    subscribe(paramsx => {
      this.Phandler=paramsx;
    console.log(this.Phandler.id)


  });



  // this.afs.collection('Pharmacy/').doc('RegDetails/').collection('PharmacyLists').doc(this.Phandler.id).get()
  // .subscribe((doc) => {


  //    console.log("Current data: ", doc.data());
  // });


    this.afs.collection('Pharmacy/').doc('RegDetails/').collection('PharmacyLists').doc(this.Phandler.id).get()
  .subscribe((doc) => {
     console.log("Current data: ", doc.data());

  });





  this.pharmacyService.getPharmacyDoc(this.Phandler.id).subscribe(res => {
    this.pRef = res;
    this.P_Name= [this.pRef.Name];
    this.P_Address= [this.pRef.Address];
    this.P_GST= [this.pRef.GST];
    this.P_Phone= [this.pRef.Phone];
    this.P_ID= [this.pRef.PID];
    this.handlerForm = this.formBuilder.group({

      Name: [this.pRef.Name],
        Phone: [this.pRef.Phone],

        Address: [this.pRef.Address],
        GST: [this.pRef.GST],
        Password:[this.pRef.Password],
        Others:[this.pRef.Others]



    })
  })

console.log("Hello",this.handlerForm);


//

// this.afs.collection('Pharmacy/').doc('RegDetails/').collection('PharmacyLists').doc(this.Phandler.id)
// .ref.get().then(function (doc) {

//   let allDocData = [];
//   if (doc.exists) {

//     allDocData.push(doc.data());
//    // return allDocData;
//     console.log(allDocData);
//   } else {
//     console.log("There is no document!");
//   }
// }).catch(function (error) {
//   console.log("There was an error getting your document:", error);
// });


//






    }
flag(){
  this.isValid=false;
}
    onSubmit() {
      const UID = this.route.snapshot.paramMap.get('id');
  console.log("dd",UID)
      this.pharmacyService.updatePharmacy(this.handlerForm.value,UID);
      // this.router.navigate(['shop_handler/',UID]);

      this.isValid=true;
    };


  Cancel(){
    this.isValid=true;
  }

}
