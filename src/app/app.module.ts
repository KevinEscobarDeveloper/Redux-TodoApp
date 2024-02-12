import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoModule } from './todos/todo.module';
import { FooterComponent } from './footer/footer.component';
import { todoReducer } from './todos/todo.reducer';
import { ReactiveFormsModule } from '@angular/forms';

//NgRx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from './app.reducers';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducers), 
    StoreDevtoolsModule.instrument({
      maxAge: 25, 
      logOnly: !isDevMode(), 
      autoPause: true, 
      trace: false,
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      connectInZone: true // If set to true, the connection is established within the Angular zone
    }),
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
