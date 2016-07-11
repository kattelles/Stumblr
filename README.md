# Stumblr

[Stumblr live][heroku]

[heroku]: https://stumblrr.herokuapp.com/

Stumblr is a full-stack web application inspired by Tumblr.  It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Flux architectural framework on the frontend.  


## Implementation

## Ruby on Rails Backend

Stumblr uses a PostgreSQL database with the following tables: Users, Blogs, Posts, Follows, Likes, Tags and one  join table: Taggings.

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
profile_pic     | text      |

## blogs
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
owner_id    | integer   | not null, foreign key (references users), indexed
title       | string    |
description | text      |
cover_photo | text      |

There are Rails models and controllers for each of the tables.
```ruby
class Post < ActiveRecord::Base

  belongs_to(
    :user,
    :class_name => "User",
    :foreign_key => :user_id,
    :primary_key => :id
    )

  has_many :likes

  has_many :taggings, dependent: :destroy, inverse_of: :post
  has_many :tags, through: :taggings

  validates :user_id, :post_type, presence: true
end
```
```ruby
class Api::LikesController < ApplicationController
  def create
    @like = Like.new(like_params)
    if @like.save
      render :show
    else
      render json: @like.errors, status: 422
    end
  end

  def destroy
    @like = Like.find(params[:id])
    @like.destroy!

    render :show
  end
  private

  def like_params
    params.require(:like).permit(:user_id, :post_id)
  end

end
```

I utilized JBuilder to pull information from the database to the frontend.

```ruby
json.extract! @blog, :title, :description, :owner_id, :id, :cover_photo
json.avatar @blog.owner.avatar
json.follows @blog.follows
```

## React.js Frontend

Stumblr follows the React/Flux framework on the frontend.

![image of flux](https://github.com/kattelles/Stumblr/blob/master/docs/images/flux-diagram.png)

There are stores for the current session (user), blogs, and posts. Information for each blog (followers) is pulled from the database with each blog. Similarly, like and tag data is pulled with each post.

There are four main groups of React Views: the dashboard, the explore page, posts, and blogs. Each main group is broken further into several more sub-components.

The components are interacted with by the user which triggers and action creator. The action creators are responsible for hitting the database and passing that information to the Dispatcher and later the stores.


## Features

### Single-Page App

Stumblr is a fully-functional single-page. All of it's content is delivered on one static page.  

### User Authentication

Users can login, sign-up, or enter using a guest account.

![image of splash](https://github.com/kattelles/Stumblr/blob/master/docs/images/splash.png)

### Blog Creation and Rendering

Upon sign-up, a blog is created for the user. The blog has a default cover photo, title, and description, all of which can be edited by the user. The Blog show page renders that user's posts, with the most recent at the top.
When looking at another user's blog, the edit button is replaced with a follow or unfollow button.

![image of blog show page](https://github.com/kattelles/Stumblr/blob/master/docs/images/blogshow.png)

### Post Creation, Rendering, and Editing

From the dashboard, users can create 6 different types of posts: text, image, quote, link, audio, and video.

![image of post form](https://github.com/kattelles/Stumblr/blob/master/docs/images/postform.png)

Upon click, a modal unique to the type of post opens.

![image of image post modal](https://github.com/kattelles/Stumblr/blob/master/docs/images/postmodal.png)

After creation, the post is rendered on it's blog show page, the user's post feed, and the feed of that blog's followers.

![image of post show](https://github.com/kattelles/Stumblr/blob/master/docs/images/postshow.png)

For posts which the current user created, edit and delete buttons are visible on the post. These buttons allow the post's content to be edited or deleted it it's entirety.

![image of post buttons](https://github.com/kattelles/Stumblr/blob/master/docs/images/editdelete.png)

Edit modal:

![image of edit modal](https://github.com/kattelles/Stumblr/blob/master/docs/images/postedit.png)

Delete modal:

![image of delete modal](https://github.com/kattelles/Stumblr/blob/master/docs/images/deletemodal.png)

### Dashboard and Feed

The root page of the app is the user's Dashboard which includes the search feature, navigation bar, new post forms, post feed, and a side bar including recommended blogs, trending tags and a trending post.

![image of dashboard](https://github.com/kattelles/Stumblr/blob/master/docs/images/dashboard.png)

The NavBar has links the user's blog, an explore page, user settings, and a button to logout.

![image of navbar](https://github.com/kattelles/Stumblr/blob/master/docs/images/navbar.png)

The recommended blogs sidebar displays several default blogs which can be followed.

![image of recblogs](https://github.com/kattelles/Stumblr/blob/master/docs/images/recblogs.png)

Trending tags are buttons for the most recently used tags. On click, these buttons bring you to the search result page for that tag.

![image of tags](https://github.com/kattelles/Stumblr/blob/master/docs/images/tags.png)

The radar section of the sidebar displays a trending post.

![image of radar](https://github.com/kattelles/Stumblr/blob/master/docs/images/radar.png)

The feed is a collection of the user's posts and the posts of the blogs the user follows.

![image of feed](https://github.com/kattelles/Stumblr/blob/master/docs/images/feed.png)

### Follows

Users are able to follow or unfollow other blogs. When a user follows a blog, the latter's content will appear in that user's feed. The number of followers a blog has is rendering on the blog show page.

![image of follow](https://github.com/kattelles/Stumblr/blob/master/docs/images/follow.png)

### Likes

Posts can be liked or unliked. The number of total likes is displayed on each post.

![image of like](https://github.com/kattelles/Stumblr/blob/master/docs/images/like.png)

### Search

Users can search for posts with a specific tag in the search bar at the top of the dashboard. Search results will be displayed upon submit.

![image of search](https://github.com/kattelles/Stumblr/blob/master/docs/images/search.png)

### Explore

The explore page contains the most recent posts made on Stumblr.

![image of explore](https://github.com/kattelles/Stumblr/blob/master/docs/images/explore.png)

### Future Directions for the Project

I plan to continue working on this project. Future features I'd like to implement include: reblogging, post comments, and notifications.
