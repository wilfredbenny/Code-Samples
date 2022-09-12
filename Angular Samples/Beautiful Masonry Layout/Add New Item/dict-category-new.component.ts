import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder,FormGroup } from '@angular/forms';
import { AdminServices } from 'src/app/services/adminservices';
import { PharmacyDict } from 'src/app/model/pharmacy-dictionary-model';
import { Router } from '@angular/router';
// import firebase from 'firebase/app';
// import * as $ from 'jquery';
import { AngularFirestore } from '@angular/fire/firestore';
import * as $ from 'jquery';
import { contains } from 'jquery';

declare var angular: any;
@Component({
  selector: 'app-dict-category-new',
  templateUrl: './dict-category-new.component.html',
  styleUrls: ['./dict-category-new.component.css']
})
export class DictCategoryNewComponent implements OnInit {
pDict:PharmacyDict[];
name = 'Add Contents';
values:any;
ArrayL:any[];
ArrayLCont:any[];
c1:number=0;
public contentForm:FormGroup;
public addmore:FormGroup;
  constructor(public afs:AngularFirestore,public aS:AdminServices,public router:Router, public formBuilder:FormBuilder) {
this.values = [];
this.contentForm=this.formBuilder.group({

    Content_0: [''],
    Content_1: [''],
    Content_2: [''],
    Content_3: [''],
    Content_4: [''],
    Content_5: [''],
    Content_6: [''],
    Content_7: [''],
    Content_8: [''],
    Content_9: [''],
    Content_10: [''],
    Content_11: [''],
    Content_12: [''],
    Content_13: [''],
    Content_14: [''],
    Content_15: [''],
    Content_16: [''],
    Content_17: [''],
    Content_18: [''],
    Content_19: [''],
    Content_20: [''],
    Content_21: [''],
    Content_22: [''],
    Content_23: [''],
    Content_24: [''],
    Content_25: [''],
    Content_26: [''],
    Content_27: [''],
    Content_28: [''],
    Content_29: [''],
    Use: [''],
    SideEffects: [''],
    Working: [''],
    Usage: [''],

  });

  }

ngOnInit(): void {
  $(function() {
    setTimeout(function() { $("#hideDiv").fadeOut(1500); }, 5000)

    })

}
  i:number;
  Submit() {
    // var d1= document.getElementById("prel")as HTMLInputElement;
    // this.contentForm.controls.Content_0.setValue(d1?.value);
    var d2= document.getElementById("sec0")as HTMLInputElement;
    this.contentForm.controls.Content_1.setValue(d2?.value);
    var d3= document.getElementById("sec1")as HTMLInputElement;
    this.contentForm.controls.Content_2.setValue(d3?.value);
    var d4= document.getElementById("sec2")as HTMLInputElement;
    this.contentForm.controls.Content_3.setValue(d4?.value);
    var d5= document.getElementById("sec3")as HTMLInputElement;
    this.contentForm.controls.Content_4.setValue(d5?.value);
    var d6= document.getElementById("sec4")as HTMLInputElement;
    this.contentForm.controls.Content_5.setValue(d6?.value);
    var d7= document.getElementById("sec5")as HTMLInputElement;
    this.contentForm.controls.Content_6.setValue(d7?.value);
    var d8= document.getElementById("sec6")as HTMLInputElement;
    this.contentForm.controls.Content_7.setValue(d8?.value);
    var d9= document.getElementById("sec7")as HTMLInputElement;
    this.contentForm.controls.Content_8.setValue(d9?.value);
    var d10= document.getElementById("sec8")as HTMLInputElement;
    this.contentForm.controls.Content_9.setValue(d10?.value);
    var d11= document.getElementById("sec9")as HTMLInputElement;
    this.contentForm.controls.Content_10.setValue(d11?.value);
    var d12= document.getElementById("sec10")as HTMLInputElement;
    this.contentForm.controls.Content_11.setValue(d12?.value);
    var d13= document.getElementById("sec11")as HTMLInputElement;
    this.contentForm.controls.Content_12.setValue(d13?.value);
    var d14= document.getElementById("sec12")as HTMLInputElement;
    this.contentForm.controls.Content_13.setValue(d14?.value);
    var d15= document.getElementById("sec13")as HTMLInputElement;
    this.contentForm.controls.Content_14.setValue(d15?.value);
    var d16= document.getElementById("sec14")as HTMLInputElement;
    this.contentForm.controls.Content_15.setValue(d16?.value);
    var d17= document.getElementById("sec15")as HTMLInputElement;
    this.contentForm.controls.Content_16.setValue(d17?.value);
    var d18= document.getElementById("sec16")as HTMLInputElement;
    this.contentForm.controls.Content_17.setValue(d18?.value);
    var d19= document.getElementById("sec17")as HTMLInputElement;
    this.contentForm.controls.Content_18.setValue(d19?.value);
    var d20= document.getElementById("sec18")as HTMLInputElement;
    this.contentForm.controls.Content_19.setValue(d20?.value);
    var d21= document.getElementById("sec19")as HTMLInputElement;
    this.contentForm.controls.Content_20.setValue(d21?.value);
    var d22= document.getElementById("sec20")as HTMLInputElement;
    this.contentForm.controls.Content_21.setValue(d22?.value);
    var d23= document.getElementById("sec21")as HTMLInputElement;
    this.contentForm.controls.Content_22.setValue(d23?.value);
    var d24= document.getElementById("sec22")as HTMLInputElement;
    this.contentForm.controls.Content_23.setValue(d24?.value);
    var d25= document.getElementById("sec23")as HTMLInputElement;
    this.contentForm.controls.Content_24.setValue(d25?.value);
    var d26= document.getElementById("sec24")as HTMLInputElement;
    this.contentForm.controls.Content_25.setValue(d26?.value);
    var d27= document.getElementById("sec25")as HTMLInputElement;
    this.contentForm.controls.Content_26.setValue(d27?.value);
    var d28= document.getElementById("sec26")as HTMLInputElement;
    this.contentForm.controls.Content_27.setValue(d28?.value);
    var d29= document.getElementById("sec27")as HTMLInputElement;
    this.contentForm.controls.Content_28.setValue(d29?.value);
    var d30= document.getElementById("sec28")as HTMLInputElement;
    this.contentForm.controls.Content_29.setValue(d30?.value);
     Object.keys(this.contentForm.value).forEach(key => {
      if (this.contentForm.value[key] === undefined ) {
        delete this.contentForm.value[key];
      }
    });

    // console.log("array final:",this.contentForm.value);

      this.aS.createDictContent(this.contentForm.value) ;

   }

  removevalue(i:any){
    this.values.splice(i,1);
  }
  addvalue(){


    // this.values.push({value: ""});

      this.values.push({value: ""});
  }
  }



