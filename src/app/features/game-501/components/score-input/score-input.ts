import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score-input',
  imports: [],
  templateUrl: './score-input.html',
  styleUrl: './score-input.css',
})
export class ScoreInput implements OnInit {
  buttons: number[] = [];
  multiplier: number = 1;

  ngOnInit(): void {
    this.buttons = this.createButtons()
  }

  createButtons(): number[] {
    let i = 0;
    let buttons = [];
    for (i = 1; i <= 20; i++) {
      buttons.push(i);
    }
    buttons.push(25);
    buttons.push(50);
    return buttons;
  }

  // Hier muss später vermutlich noch der Rückgabetyp geändert werden kann
  // kann ich gerade noch nicht sagen
  onNumberClick(value: number): void {
    if(value === 25 || 50) {
      this.multiplier = 1;
    }
    let points = value * this.multiplier;
    console.log("Gedrückt: ", points); // Erstmal nur zur Überpürfung das es klappt
    this.multiplier = 1;
  }

  setMultiplier(factor: number): void {
    this.multiplier = factor;
    console.log("Multiplikator ist jetzt: ", this.multiplier)
  }

  /*
  Weitere Gedanken hier:
  - An welcher Stelle sollen Punkte gespeichert werden?
  - Zurück Button, um Eingaben zu revidieren, muss dann noch eingebaut werden
  - Styles würde ich erst ganz am Ende ausführlicher behandeln
  - Funktion die prüft, ob 25 oder 50 versucht werden zu multiplizieren, dass muss
    verhindert werden --> vermutlich wäre es noch besser die buttons in diesem Fall nicht klickbar zu machen
  */


}
