import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { ConfirmacionComponent } from './confirmacion/confirmacion.component';
import { IndicadoresComponent } from './indicadores/indicadores.component';
import { PrediccionRoutingModule } from './prediccion-routing.module';



@NgModule({
  declarations: [MainComponent, ConfirmacionComponent, IndicadoresComponent],
  imports: [
    CommonModule,
    PrediccionRoutingModule
  ]
})
export class PrediccionModule { }
