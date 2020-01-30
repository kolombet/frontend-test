import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from 'src/app/home/home.component';
import { AppComponent } from 'src/app/app.component';
import { HeaderComponent } from 'src/app/home/views/header/header.component';
import { MenuComponent } from 'src/app/home/views/aside/menu.component';
import { SearchComponent } from 'src/app/home/views/search/search.component';
import { SearchResultComponent } from 'src/app/home/views/search-result/search-result.component';
import { SearchBarComponent } from 'src/app/home/views/search-bar/search-bar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    HeaderComponent,
    MenuComponent,
    SearchComponent,
    SearchResultComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class HomeModule { }
