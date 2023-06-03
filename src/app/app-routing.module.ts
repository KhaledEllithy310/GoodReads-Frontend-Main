import { FooterComponent } from './footer/footer.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { HeaderpageComponent } from './headerpage/headerpage.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { BookListComponent } from './book-list/book-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { AdminBookComponent } from './admin-book/admin-book.component';
import { AdminAuthorComponent } from './admin-author/admin-author.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { adminGuard } from './guards/admin.guard';
// import { AdminHomeComponent } from './admin-home/admin-home.component';

const routes: Routes = [
  {
    path: 'signin',
    component: SignInComponent,
  },
  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: 'profile',
    component: UserprofileComponent,
  },
  {
    path: 'admin',
    component: AdminHomeComponent,
    canActivate: [adminGuard],
    children: [
      {
        path: 'categories',
        component: AdminCategoryComponent,
      },
      {
        path: 'authors',
        component: AdminAuthorComponent,
      },
      {
        path: 'books',
        component: AdminBookComponent,
      },

    ],
  },
  {
    path:'headerpage',
    component: HeaderpageComponent,
    children:[
      {
        path: 'book-list',
        component: BookListComponent
      },
      {
        path: 'author-list',
        component: AuthorListComponent
      },
      {
        path:'headerpage',
        component: HeaderpageComponent
      },
      {
        path: 'book-details',
        component: BookDetailsComponent
      },
      {
        path: 'author-details',
        component: AuthorDetailsComponent
      },
      {
        path: 'footer',
        component: FooterComponent
      },

    ]
  } ,
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // providers:[adminGuard],
})
export class AppRoutingModule {}
