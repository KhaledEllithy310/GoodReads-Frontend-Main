import { AllAuthorsComponent } from './all-authors/all-authors.component';
import { AllBooksComponent } from './all-books/all-books.component';
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
import { AdminGuard } from './guards/admin.guard';
// import { AdminHomeComponent } from './admin-home/admin-home.component';

const routes: Routes = [
  {
    path: 'author-details',
    component: AuthorDetailsComponent
  },
  {
    path:"all-books",
    component:AllBooksComponent
  },
  {
    path:"all-authors",
    component:AllAuthorsComponent
  }
  ,
  {
    path: 'book-details/:id',
    component: BookDetailsComponent
  },
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
    canActivate: [AdminGuard],
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

    ]
  },
  {
  path:'',
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
      path: 'author-details',
      component: AuthorDetailsComponent
    },
    {
      path: 'footer',
      component: FooterComponent
    },

  ]}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AdminGuard],
})
export class AppRoutingModule {}
