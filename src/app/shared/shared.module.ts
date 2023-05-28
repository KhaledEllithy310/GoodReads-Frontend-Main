import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

@NgModule({
  declarations: [NavbarComponent, NotFoundPageComponent],
  imports: [CommonModule],
  exports: [NavbarComponent],
})
export class SharedModule {}
