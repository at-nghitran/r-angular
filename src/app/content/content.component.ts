import { Component } from '@angular/core';
import { Post } from '../posts';
import { POST } from '../post_list';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css']
})

export class ContentComponent{
    posts = POST ;
    selectedPost = {};
    isSelected = false;
    onSelect(post){
        this.selectedPost = post;
        this.isSelected = true;
    }
    onShow(event) {
        this.isSelected = event;
    }
    onGetData(data){
        this.selectedPost = data;
    }
    onSelectElm(event){
        this.isSelected = event;
    }
}