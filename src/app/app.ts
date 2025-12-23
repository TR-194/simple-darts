import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScoreInput } from './features/game-501/components/score-input/score-input';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ScoreInput],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('simple-darts');
}
