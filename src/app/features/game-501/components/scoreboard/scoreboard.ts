import { Component } from '@angular/core';

@Component({
  selector: 'app-scoreboard',
  imports: [],
  templateUrl: './scoreboard.html',
  styleUrl: './scoreboard.css'
})
export class Scoreboard {
  players: player[] = [];


  createSinglesArray(): number[]{
    let i = 0;
    let singles = [];
    for (i = 1; i <= 20; i++) {
      singles.push(i);
    }
    singles.push(25);
    singles.push(50);
    return singles;
  }

  createDoublesArray(): number[]{
    let i = 0;
    let doubles = [];
    for (i = 1; i <= 20; i++) {
      doubles.push(i*2);
    }
    doubles.push(50);
    return doubles;
  }

  createTriplesArray(): number[]{
    let i = 0;
    let triples = [];
    for (i = 1; i <= 20; i++) {
      triples.push(i*3);
    }
    return triples;
  }


  //Diese Funktion sollte nur aufgerufen werden, wenn Restliche Punkte >=170 sind
  scoreToFinish(currentScore: number): void{ 
      // Wenn CurrentScore >= 50 ist. Schaue nach, ob es in Double Array auftaucht
  }

  // Hier wird player vermutlich gar nicht benötigt? Ich glaube es wird
  // viel mehr in den Spieler Setup gemacht und nach hier übergeben
  // Hier nur anzeige des Spieler Arrays und Berechnung für Average u Checkout?


}
