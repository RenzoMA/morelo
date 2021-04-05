import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainComponent } from "./main/main.component";
import { ConfirmacionComponent } from "./confirmacion/confirmacion.component";
import { IndicadoresComponent } from "./indicadores/indicadores.component";
import { PrediccionRoutingModule } from "./prediccion-routing.module";
import { MaterialModule } from "../material/material.module";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";

@NgModule({
  declarations: [MainComponent, ConfirmacionComponent, IndicadoresComponent],
  imports: [
    CommonModule,
    PrediccionRoutingModule,
    MaterialModule,
    NgxDatatableModule,
  ],
})
export class PrediccionModule {}
