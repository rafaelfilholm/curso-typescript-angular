import { Component, OnInit } from '@angular/core';

import { Phrase } from '../shared/phrase.model';
import { PHRASES } from './phrase-mock';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	public phrases: Phrase[] = PHRASES;
	public instruction: string = 'Traduza a seguinte frase:';

	constructor() { 
		console.log(this.phrases)
	}

	ngOnInit() {
	}

}
