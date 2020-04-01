import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../app/material.module';
import { MlpService } from '../services/mlp.service';
import { HttpClientModule } from '@angular/common/http';
import { TableHistoricoComponent } from './table-historico/table-historico.component';
import { FormModalComponent } from './form-modal/form-modal.component';
import { FormModalDialogComponent } from './form-modal/form-modal-dialog/form-modal-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TableHistoricoButtonComponent } from './table-historico/table-historico-button/table-historico-button.component';

const appRoutes: Routes = [
  { path: 'hist', component: TableHistoricoComponent },
  // { path: 'hero/:id',      component: HeroDetailComponent },
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TableHistoricoComponent,
    FormModalComponent,
    FormModalDialogComponent,
    TableHistoricoButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  entryComponents: [FormModalDialogComponent],
  providers: [MlpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
