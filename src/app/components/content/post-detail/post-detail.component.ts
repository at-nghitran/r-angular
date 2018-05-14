import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../../posts';

@Component({
  selector: 'post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})

export class PostDetailComponent {
  @Input() post: Post;
  @Input() isSelected: boolean;
  @Output() onShow = new EventEmitter<boolean>();
  
  onClick() {
    this.onShow.emit(false);
  }
}
