import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component ({
    selector: 'post-list',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})

export class PostsComponent {
    @Input() posts;
    @Input() isSelected;
    @Output() onGetData = new EventEmitter<object>();
    @Output() onSelectElm = new EventEmitter<boolean>();
    onSelect(data) {
        this.onGetData.emit(data);
        this.onSelectElm.emit(true);
    }
}