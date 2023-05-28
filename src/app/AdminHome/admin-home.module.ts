import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorComponent } from './components/author/author.component';
import { BookComponent } from './components/book/book.component';
import { CategoryComponent } from './components/category/category.component';

@NgModule({
  declarations: [
    // AuthorComponent, BookComponent,
    //  CategoryComponent
    ],
  imports: [CommonModule],
  exports: [
    // AuthorComponent, BookComponent,
    //  CategoryComponent
    ],
})
export class AdminHomeModule {}
