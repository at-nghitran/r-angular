import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PostsComponent } from './components/content/posts/posts.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostDetailComponent } from './components/content/post-detail/post-detail.component';
import { ContentComponent } from './components/content/content.component';
import { imgCheckDirective } from './directives/imgCheck/imgCheck';
import { checkPhonePipe } from './pipe/checkPhone/checkPhone.pipe';
import { EmployeeListComponent } from './components/content/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './components/content/employee-detail/employee-detail.component';
import { CheckPositionPipe } from './pipe/checkPosition/check-position.pipe';
import { CheckEmployeeTypePipe } from './pipe/checkType/check-employee-type.pipe';
import { ChecPhoneDirective } from './directives/checkPhone/chec-phone.directive';
import { TableListComponent } from './components/content/table-list/table-list/table-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostsComponent,
    CategoriesComponent,
    FooterComponent,
    PostDetailComponent,
    ContentComponent,
    imgCheckDirective,
    checkPhonePipe,
    EmployeeListComponent,
    EmployeeDetailComponent,
    CheckPositionPipe,
    CheckEmployeeTypePipe,
    ChecPhoneDirective,
    TableListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
