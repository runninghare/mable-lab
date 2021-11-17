import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiNodeComponent } from './ui-node.component';
import { UiFileTreeComponent } from './ui-file-tree.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UiNodeComponent, UiFileTreeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    UiNodeComponent,
    UiFileTreeComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UiModule { }
