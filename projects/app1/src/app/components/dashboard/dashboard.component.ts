import { Component, OnInit } from '@angular/core';

import { Phrase } from '../../shared/phrase.model';
import { PHRASES } from './phrase-mock';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	public phrases: Phrase[] = PHRASES;
	public instruction: string = 'Traduza a seguinte frase:';
	public answer: string = '';
	public currentRound: number = 0;
	public progress: number = 0;

	constructor() { }

	ngOnInit() {
	}

	public checkAnswer(): void {

		let currentPhrase = this.phrases[this.currentRound];

		if(currentPhrase.phrasePtBr == this.answer)
		{
			alert('A tradução está correta!');
			this.updateRound();
		} else {
			alert('A tradução está incorreta!');
		}
	}

	public updateRound(): void {
		this.currentRound += 1;
		this.progress += (100 / this.phrases.length);
		this.answer = '';
	}
}
