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

	constructor() { }

	ngOnInit() {
	}

	public updateAnswer(event: Event): void {
		this.answer = (<HTMLInputElement>event.target).value;
	}

	public checkAnswer(): void {

		let currentPhrase = this.phrases[this.currentRound];

		if(currentPhrase.phrasePtBr == this.answer)
		{
			alert('A tradução está correta!');
			this.currentRound = this.currentRound + 1;
		} else {
			alert('A tradução está incorreta!');
		}
	}
}
