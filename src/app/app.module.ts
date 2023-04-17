import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent} from "./products/product-list.component";
import { NgOptimizedImage } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
