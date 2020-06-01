import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table'
import { MatSortModule } from '@angular/material/sort';

const material = [ MatButtonModule,MatTableModule,MatSortModule ]

@NgModule({
  imports: [material],
  exports : [material]
})
export class MaterialModule { }
