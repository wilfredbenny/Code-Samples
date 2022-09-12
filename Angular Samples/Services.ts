import { analyzeAndValidateNgModules } from '@angular/compiler';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { AngularFirestore, fromDocRef } from '@angular/fire/firestore';
import { NewPharmacy } from 'src/app/model/new-pharmacy.model';
import { NewPharmacyStaff } from 'src/app/model/new-pharmacy-staff.model';
import { PharmacyDict } from '../model/pharmacy-dictionary-model';

@Injectable({
  providedIn: 'root'
})

export class AdminServices {

  constructor(private angularFirestore: AngularFirestore,) {}
//PHARMACY-------------------------------------------------------------------------------------
  getPharmacyDoc(pharmacy:any) {
    return this.angularFirestore
    .collection('Pharmacy/').doc('RegDetails/').collection('PharmacyLists/').doc(pharmacy)
    .valueChanges()
  }
  getPharmacyList() {
    return this.angularFirestore
    .collection('Pharmacy/').doc('RegDetails/').collection('PharmacyLists')
    .snapshotChanges();
  }
  createPharmacy(ph:NewPharmacy,pharmacy:any) {
    return new Promise<any>((resolve, reject) =>{
      this.angularFirestore
        .collection('Pharmacy/').doc('RegDetails/').collection('PharmacyLists').doc(pharmacy).set(ph)

        .then(response => { console.log(response) }, error => reject(error));
    });
  }
  deletePharmacy(ph:any,pharmacy:any) {
    return this.angularFirestore
      .collection('Pharmacy/'+pharmacy)
      .doc(ph.id)
      .delete();
  }
  updatePharmacy(ph: NewPharmacy,pharmacy:any) {
    return this.angularFirestore
    .collection('Pharmacy/').doc('RegDetails/').collection('PharmacyLists').doc(pharmacy)
      .update({
        Name:ph.Name,
        Password:ph.Password,
        GST:ph.GST,
        Phone: ph.Phone,
        Address:ph.Address,
        Others:ph.Others
      });
  }
getOne(pharmacy:any){
  return  this.angularFirestore
  .collection('Pharmacy/').doc('RegDetails/').collection('PharmacyLists').doc(pharmacy).valueChanges()
}




//STAFF-----------------------------------------------------------------------------------------

getStaffDoc(id:any) {
  return this.angularFirestore
  .collection('Pharmacy/').doc('RegDetails/').collection('StaffLists/').doc(id)
  .valueChanges()
}
getStaffList() {
   return this.angularFirestore
  .collection('Pharmacy/').doc('RegDetails/').collection('StaffLists')
  .snapshotChanges();
}
createStaff(ph:NewPharmacyStaff,id:any) {
    return this.angularFirestore
  .collection('Pharmacy/').doc('RegDetails/').collection('StaffLists').doc(id).set(ph)
}
deleteStaff(id:any) {
  return this.angularFirestore
  .collection('Pharmacy/').doc('RegDetails/').collection('StaffLists').doc(id)
    .delete();
}
updateStaff(ph: NewPharmacyStaff,id:any) {
  return this.angularFirestore
  .collection('Pharmacy/').doc('RegDetails/').collection('StaffLists').doc(id)
    .update({
        PharmacyName:ph.PharmacyName,
        PharmacyID:ph.PharmacyID,
        Name:ph.Name,
        Pharma_Reg:ph.Pharma_Reg,
        DOB:ph.DOB,
        Gender:ph.Gender,
        Address:ph.Address,
        Qualification:ph.Qualification,
        Designation:ph.Designation,
        Email:ph.Email,
        Staff_ID:ph.Staff_ID,
        Password:ph.Password,
        Phone:ph.Password
    });
}
//DICTIONARY---------------------------------------------------------------------------
getDict(id:any) {
  return this.angularFirestore
  .collection('Pharmacy/').doc('Utilities/').collection('Dictionary/').doc(id)
  .valueChanges()
}
getDictList() {
  return this.angularFirestore
  .collection('Pharmacy/').doc('Utilities/').collection('Dictionary')
  .snapshotChanges();
}
createDictContent(ph:NewPharmacyStaff) {
 return this.angularFirestore
 .collection('Pharmacy/').doc('Utilities/').collection('Dictionary').add(ph)
 .then(response => { window.location.reload(true); alert("Values Are Added Successfully!");}   );
}
deleteDict(id:any) {
  return this.angularFirestore
  .collection('Pharmacy/').doc('Utilities/').collection('Dictionary').doc(id)
    .delete();
}
updateDict(ph: PharmacyDict,id:any) {
  return this.angularFirestore
  .collection('Pharmacy/').doc('Utilities/').collection('Dictionary').doc(id)
    .update({
       Name:ph.Name,
       ItemID:ph.MID,
       SGST:ph.SGST,
       CGST:ph.CGST,
       MRP:ph.MRP,
       Category:ph.Category,
       Content_0:ph.Content_0,
       Content_1:ph.Content_1,
       Content_2:ph.Content_2,
       Content_3:ph.Content_3,
       Content_4:ph.Content_4,
       Content_5:ph.Content_5,
       Content_6:ph.Content_6,
       Content_7:ph.Content_7,
       Content_8:ph.Content_8,
       Content_9:ph.Content_9,
       Content_10:ph.Content_10,
       Content_11:ph.Content_11,
       Content_12:ph.Content_12,
       Content_13:ph.Content_13,
       Content_14:ph.Content_14,
       Content_15:ph.Content_15,
       Content_16:ph.Content_16,
       Use:ph.Use,
       SideEffects:ph.SideEffects,
       Usage :ph.Usage,
       Working:ph.Working,
       Batch:ph.BatchNo,
       Expiry:ph.Expiry,

    });
}



//GetTheme---------------------------------------------------------------------------
DefaultWhite(){
  return this.angularFirestore
  .collection('Themes/').doc('Admin/').collection('Lite/').doc('Buttonx')
  .valueChanges()
}



}
