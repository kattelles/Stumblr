# Stumblr

[Stumblr live][heroku]

[heroku]: https://stumblrr.herokuapp.com/

Stumblr is a full-stack web application inspired by Tumblr.  It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Flux architectural framework on the frontend.  

## Features & Implementation

### Single-Page App

Stumblr is a fully-functional single-page. All of it's content is delivered on one static page.  

### User Authentication

### Blog Creation and Rendering

Upon sign-up, a blog is created for the user. The blog has a default cover photo, title, and description, all of which can be edited by the user. The Blog show page renders that users posts, with the most recent at the top.
When looking at another user's blog, the edit button is replaced with a follow or unfollow button.

![image of blog show page](https://github.com/kattelles/Stumblr/blob/master/docs/images/blogshow.png)

### Post Creation, Rendering, and Editing

From the dashboard, users can create 6 different types of posts: text, image, quote, link, audio, and video.

![image of post form](https://github.com/kattelles/Stumblr/blob/master/docs/images/postform.png)

Upon click, a modal unique to the type of post opens.

![image of image post modal](https://github.com/kattelles/Stumblr/blob/master/docs/images/postmodal.png)

After creation, the post is rendered on it's blog show page, the user's post feed, and the feed of that blogs followers.

![image of post show](https://github.com/kattelles/Stumblr/blob/master/docs/images/postshow.png)

For posts which the current user created, edit and delete buttons are visible on the post. These buttons allow the post's content to be edited or deleted it it's entirety.

![image of post buttons](https://github.com/kattelles/Stumblr/blob/master/docs/images/editdelete.png)

Edit modal:

![image of edit modal](https://github.com/kattelles/Stumblr/blob/master/docs/images/postedit.png)

Delete modal:

![image of delete modal](https://github.com/kattelles/Stumblr/blob/master/docs/images/postdelete.png)

### Dashboard and Feed

The root page of the app is the user's Dashboard which includes the search feature, navigation bar, new post forms, post feed, and a side bar including recommended blogs, trending tags and a trending post.

![image of dashboard](https://github.com/kattelles/Stumblr/blob/master/docs/images/dashboard.png)

### Follows

### Likes

### Tags

### Search and Explore

### Future Directions for the Project
