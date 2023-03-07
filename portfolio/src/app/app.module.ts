import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LogoapComponent } from './componentes/logoap/logoap.component';
import { SocialComponent } from './componentes/social/social.component';
import { BanerComponent } from './componentes/baner/baner.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './componentes/hys/hys.component';
import { ProyectoComponent } from './componentes/proyecto/proyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoapComponent,
    SocialComponent,
    BanerComponent,
    AcercadeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HysComponent,
    ProyectoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
