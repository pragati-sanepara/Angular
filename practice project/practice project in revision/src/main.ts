import { enableProdMode } from '@angular/core';
import { environment } from '../src/environments/environment';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

if(environment.production){
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
.catch((e) => console.log(e));


