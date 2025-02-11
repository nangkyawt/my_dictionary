import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DetailComponent } from './components/detail/detail.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';

@NgModule({
  declarations: [AppComponent, HomeComponent, NavbarComponent, DetailComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
