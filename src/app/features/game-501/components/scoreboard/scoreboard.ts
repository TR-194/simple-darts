import { Component } from '@angular/core';

@Component({
  selector: 'app-scoreboard',
  imports: [],
  templateUrl: './scoreboard.html',
  styleUrl: './scoreboard.css'
})
export class Scoreboard {
  players: player[] = [];
  // Hier wird player vermutlich gar nicht benötigt? Ich glaube es wird
  // viel mehr in den Spieler Setup gemacht und nach hier übergeben
  // Hier nur anzeige des Spieler Arrays und Berechnung für Average u Checkout?


}
