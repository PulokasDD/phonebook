import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthorizationComponent} from "./authorization/authorization.component";
import {PhoneTableComponent} from "./phone-table/phone-table.component";

const routes: Routes = [
  { path: '', component: AuthorizationComponent },
  { path: 'contacts', component: PhoneTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
