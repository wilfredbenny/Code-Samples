import { Component, OnInit,ElementRef, Renderer2, ViewChild ,AfterViewInit} from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PharmacyDict } from 'src/app/model/pharmacy-dictionary-model';
import { AdminServices } from 'src/app/services/adminservices';
@Component({
  selector: 'app-dictionary-handler',
  templateUrl: './dictionary-handler.component.html',
  styleUrls: ['./dictionary-handler.component.css']
})
export class DictionaryHandlerComponent implements OnInit {
  @ViewChild('app-dictionary-handler', { static: true }) masonry: ElementRef;
isValid:any;
Dict:PharmacyDict[];
  constructor(public formBuilder:FormBuilder, public router:Router, public DictService:AdminServices
    ,private renderer: Renderer2) {
   }
  ngOnInit(): void {
    this.isValid=true;
    this.DictService.getDictList().
    subscribe(res => {
      this.Dict= res.map(e => {
        return {
          id: e.payload.doc.id,
          Content_1: e.payload.doc.data().Content_1,
          ...e.payload.doc.data() as any
        }  as any;
      })
    });
  }
AddNew(){
this.router.navigate(['add-new-category']);
}
addColor() {
  var colors = [ 'RGB(48,209,88)','RGB(125,122,255)','RGB(255,105,97)','RGB(125,122,255)','RGB(0,199,190)','RGB(255,214,10)'];
  var color = colors[Math.floor(Math.random() * colors.length)];
  return color;
}
}
