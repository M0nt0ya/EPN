import { Component } from '@angular/core';
import { IList } from 'src/app/entities/list';
import { listHttpServiceService } from 'src/app/services/list-http-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  httpClient: any;
  lists: IList[] = [];
  constructor(private listHttpService: listHttpServiceService) {
  }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.listHttpService.getAll().subscribe
      (response => {
        this.lists = response;
      });
  }
}

