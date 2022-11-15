import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  playerForm: FormGroup;
  id: any;
  players: any;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.players = JSON.parse(localStorage.getItem("players") || "[]")
    this.playerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      team: ['', [Validators.required, Validators.minLength(3)]],
      post: ['', [Validators.required, Validators.minLength(3)]],
      nbTshirt: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(11)]],
      dateOfBirth: ['', [Validators.required]]
    })
  }
  addPlayer(p: any) {
    let idPlayer = JSON.parse(localStorage.getItem('idPlayer') || "1")
    p.id = idPlayer;
    this.players.push(p);
    localStorage.setItem("players", JSON.stringify(this.players));
    localStorage.setItem("idPlayer", idPlayer + 1);
  }
}
