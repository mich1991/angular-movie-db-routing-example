import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-years-component',
  templateUrl: './years-component.component.html',
  styleUrls: ['./years-component.component.css']
})
export class YearsComponentComponent implements OnInit {
  years: Observable<String[]>
  constructor(public http: HttpService ) { }

  ngOnInit(): void {
    this.years = this.http.getYears();
  }

}
