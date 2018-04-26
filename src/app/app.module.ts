import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');

import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ClientsComponent } from './clients/clients.component';
import { UxComponent } from './ux/ux.component';
import { ContactComponent } from './contact/contact.component';
import { WebComponent } from './web/web.component';
import { WidgetModule } from './widget/widget.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ClientsComponent,
    UxComponent,
    ContactComponent,
    WebComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WidgetModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

