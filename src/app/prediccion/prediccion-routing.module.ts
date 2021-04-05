import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { IndicadoresComponent } from "./indicadores/indicadores.component";
import { ConfirmacionComponent } from "./confirmacion/confirmacion.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
  },
  {
    path: "indicadores",
    component: IndicadoresComponent,
  },
  {
    path: "confirmacion",
    component: ConfirmacionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrediccionRoutingModule {}
