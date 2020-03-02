import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StringOpsComponent } from './string-ops/string-ops.component';
import { FirstChildComponent } from './first-child/first-child.component';
import { TemplateFormComponent } from './template-form/template-form.component';

@NgModule({
  declarations: [
    AppComponent,
    StringOpsComponent,
    FirstChildComponent,
    TemplateFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
