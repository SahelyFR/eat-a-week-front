import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { RecettesModule } from './recettes/recettes.module';
import { LandingPageModule } from './landing-page/landing-page.module';


@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr);
  }
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    RecettesModule,
    LandingPageModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }