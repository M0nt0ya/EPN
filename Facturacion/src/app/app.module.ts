import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { ListComponent } from './list/list.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
  ],
  imports: [
    SidebarModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    CardModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
