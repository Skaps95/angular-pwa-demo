import { Component, OnInit } from '@angular/core';
import { ResponseData, ApiService} from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pwa-angular';
  responses: Array<ResponseData>;
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.fetchData();
  }
  fetchData() {
    this.apiService.fetch().subscribe(
      (data: Array<ResponseData>) => {
        console.log(data);
        this.responses = data;
      }, (err) => {
        console.log(err);
      }
    );
  }
}
