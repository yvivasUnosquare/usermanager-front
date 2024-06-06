import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DetailsComponent } from "./details/details.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    // children: [{ path: "detalles", component: DetailsComponent }],
  },
  { path: "**", component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
