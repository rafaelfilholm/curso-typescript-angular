import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-attempts',
	templateUrl: './attempts.component.html',
	styleUrls: ['./attempts.component.css']
})
export class AttemptsComponent implements OnInit {

	public empty_heart: string = 'assets/images/empty_heart.png';
	public full_heart: string = 'assets/images/full_heart.png';

	constructor() { }

	ngOnInit() { }

}
