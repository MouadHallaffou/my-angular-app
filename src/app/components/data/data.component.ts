import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Data } from '../../models/data.model';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  dataList: Data[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getData().subscribe((data) => {
      this.dataList = data;
    });
  }
}
