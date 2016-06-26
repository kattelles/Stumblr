# Phase 2: Post Model, JSON API, Flux Architecture and Post CRUD (1.5 days)

## Rails
### Models

### Controllers
* Api::PostsController (create, destroy, index, show, update)

### Views
* posts/index.json.jbuilder
* posts/show.json.jbuilder

## Flux
### Views (React Components)
* Dashboard
  * PostsFeed
    * Post
      * PostDetail
  * PostForm

### Stores
* Post

## Actions
### Api Actions

* PostActions.fetchAllPosts -> triggers ApiUtil
* PostActions.fetchSinglePost -> triggers ApiUtil
* PostActions.createPost
* PostActions.editPost
* PostActions.destroyPost -> triggers ApiUtil

* ApiActions.receiveAllPosts -> triggered by ApiUtil
* ApiActions.receiveSinglePost -> triggered by ApiUtil
* ApiActions.deletePost -> triggered by ApiUtil

### ApiUtil
* ApiUtil.fetchAllPosts
* ApiUtil.fetchSinglePost
* ApiUtil.createPost
* ApiUtil.editPost
* ApiUtil.destroyPost

## Gems/Libraries
* Flux Dispatcher (npm)
* Flux Store (npm)
