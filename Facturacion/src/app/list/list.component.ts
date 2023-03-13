import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { IList } from 'src/app/entities/list';
import { listHttpServiceService } from 'src/app/services/list-http-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
valueIconLeft: any;
getAll() {
throw new Error('Method not implemented.');
}
  httpClient: any;
  lists: IList[] = [];
  items: MenuItem[] = [];

  constructor(private listHttpService: listHttpServiceService) {
  }

  ngOnInit(): void {
    this.getList();
    this.items = [
      {label: 'Perfil', icon: 'pi pi-fw pi-user'},
      {label: 'Calendario', icon: 'pi pi-fw pi-calendar'},
      {label: 'Mensajes', icon: 'pi pi-fw pi-comment'},
      {label: 'Configuracion', icon: 'pi pi-fw pi-cog'}
  ];
  }

  getList() {
    this.listHttpService.getAll().subscribe
      (response => {
        this.lists = response;
      });
  }

  }
  

