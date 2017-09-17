import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { PostService } from './services/post.service';
import { AppError } from './common/app-error';
import { NotFoundError } from './common/not-found-error';
import { BadInput } from './common/bad-input';

@Component({
    selector: 'posts-component',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit { 
    posts: any[];

    constructor(private service: PostService) { }

    ngOnInit() {
        this.service.getAll()
                    .subscribe(posts => this.posts = posts);
    }

    createPost(input: HTMLInputElement) {
        let post = { title: input.value };
        this.posts.splice(0, 0, post);

        input.value = '';

        this.service.create(post)
                    .subscribe(
                       post => {
                          post['id'] = post.id;
                       }, 
                       (error: Response) => {
                           this.posts.splice(0,1);

                          if(error instanceof BadInput) {
                          //  this.form.setErrors(error.originalError);
                          }
                          else throw error;   
                    });
    }

    updatePost(post) {
        this.service.update(post)
                    .subscribe(post => console.log(post));
    }

    deletePost(post) {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);

        this.service.delete(345)
                 .subscribe(
                   null, 
                    (error: AppError) => {
                    this.posts.splice(index, 0, post);

                    if(error instanceof NotFoundError)
                        alert('This post has already been deleted.');
                    else throw error;
                 });
    }
}