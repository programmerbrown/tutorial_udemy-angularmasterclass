import { LikeComponent } from './like.component';

let likeObject = new LikeComponent(10, true);

// A user likes a post
likeObject.clickLikeButton();

//A user now unlikes a post
likeObject.clickLikeButton();