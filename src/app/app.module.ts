import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostsComponent } from './content/posts/posts.component';
import { CategoriesComponent } from './categories/categories.component';
import { FooterComponent } from './footer/footer.component';
import { PostDetailComponent } from './content/post-detail/post-detail.component';
import { ContentComponent } from './content/content.component'; 
import { imgCheckDirective } from './directives/imgdr/imgdr';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostsComponent,
    CategoriesComponent,
    FooterComponent,
    PostDetailComponent,
    ContentComponent,
    imgCheckDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
