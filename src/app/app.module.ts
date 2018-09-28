import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,MatButtonModule, MatCheckboxModule,MatToolbarModule,MatCardModule,MatTabsModule,
    MatIconModule,MatInputModule,MatTableModule,HttpClientModule,FormsModule,HttpClientInMemoryWebApiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
