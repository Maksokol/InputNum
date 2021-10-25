import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NumComponent} from './num/num.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormComponent} from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    NumComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
