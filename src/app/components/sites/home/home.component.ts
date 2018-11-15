import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    private _name: string;

    constructor() {
    }

    ngOnInit() {
    }

    get name(): string {
        return this._name;
    }

    set name(val) {
        this._name = val;
    }

}
