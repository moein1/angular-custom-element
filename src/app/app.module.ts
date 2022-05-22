import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule, RouterModule
  ],
  entryComponents: [ButtonComponent],
  providers: []
})
export class AppModule {
  constructor(private injector : Injector){}

  ngDoBootstrap(){
    const customElement = createCustomElement(ButtonComponent , {injector: this.injector});
    customElements.define('app-button', customElement);
  }
 }
