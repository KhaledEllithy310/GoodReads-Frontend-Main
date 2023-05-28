import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AdminHomeModule } from '../AdminHome/admin-home.module';
import { CategoryComponent } from '../AdminHome/components/category/category.component';

@NgModule({
  declarations: [
    // SidebarComponent, CategoryComponent
  ],
  imports: [CommonModule, ],
  exports: [
    // SidebarComponent, CategoryComponent
  ],
})
export class SharedModule {}
