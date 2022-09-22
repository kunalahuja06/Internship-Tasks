import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(private modalService: NgbModal) {}

   openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }

  ngOnInit(): void {
    this.createArray();
  }

  searchFilter:string[]=['preferred name','first name','last name','email','job title','office','deaprtment','phone number','skype id']
  alphabets:string[]=[]
  public createArray():void{
    for(let i=97;i<=122;i++){
      this.alphabets.push(String.fromCodePoint(i))
    }
  }
}
