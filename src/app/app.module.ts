import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './AdminHome/components/category/category.component';
import { AuthorComponent } from './AdminHome/components/author/author.component';
import { BookComponent } from './AdminHome/components/book/book.component';
import { AdminHomeModule } from './AdminHome/admin-home.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
// import {
//   LocationStrategy,
//   PathLocationStrategy,
//   Location,
// } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    AuthorComponent,
    BookComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AdminHomeModule,
    // SharedModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    // Location,
    // { provide: LocationStrategy, useClass: PathLocationStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
