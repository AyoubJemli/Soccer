import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  match : any = {};
  addMatchForm : FormGroup;
  title:any;
  matches:any;
  constructor(private formBuilder : FormBuilder,private activatedRoute : ActivatedRoute,private router : Router) { }

  ngOnInit() {
    this.addMatchForm = this.formBuilder.group({
      teamOne : [''],
      teamTwo : [''],
      scoreOne : [''],
      scoreTwo : [''],
    })
    this.matches = JSON.parse(localStorage.getItem("matches")||"[]")
  }
  addMatch(){
      let idMatch = JSON.parse(localStorage.getItem("idMatch")||"1")
      let matches = JSON.parse(localStorage.getItem("matches")||"[]")
      this.match.id = idMatch;
      matches.push(this.match)
      localStorage.setItem("matches",JSON.stringify(matches))
      localStorage.setItem("idMatch",idMatch + 1)
  }
}
