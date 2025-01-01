import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FederatedDialogComponent } from './federated-dialog/federated-dialog.component';
import { MaterialModule } from '@app/material';

@NgModule({
  declarations: [
    AppComponent,
    FederatedDialogComponent
  ],
  imports: [
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
