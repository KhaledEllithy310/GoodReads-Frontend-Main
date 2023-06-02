import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterLinkActive, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { AdminBookComponent } from './admin-book/admin-book.component';
import { AdminAuthorComponent } from './admin-author/admin-author.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { HeaderpageComponent } from './headerpage/headerpage.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BookListComponent } from './book-list/book-list.component';


import { NgxPaginationModule } from 'ngx-pagination';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorCardComponent } from './author-card/author-card.component';
@NgModule({
  declarations: [
    AppComponent,
    UserprofileComponent,
    SignInComponent,
    SignUpComponent,
    NavbarComponent,
    AdminCategoryComponent,
    AdminAuthorComponent,
    AdminBookComponent,
    NotFoundPageComponent,
    AdminNavbarComponent,AdminHomeComponent, HeaderpageComponent, BookDetailsComponent, BookCardComponent, BookListComponent, AuthorListComponent, AuthorCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    NgbModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
