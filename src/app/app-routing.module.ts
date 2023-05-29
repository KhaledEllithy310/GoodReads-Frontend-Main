import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignInComponent } from "./register/components/sign-in/sign-in.component";
import { SignUpComponent } from "./register/components/sign-up/sign-up.component";
import { NotFoundPageComponent } from "./shared/components/not-found-page/not-found-page.component";

const routes: Routes = [
  {
    path: "signin",
    component: SignInComponent,
  },
  {
    path: "signup",
    component: SignUpComponent,
  },
  {
    path: "**",
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
