import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
    imports: [
      AppRoutingModule, 
      ServerModule, 
      ModuleMapLoaderModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppServerModule { }
