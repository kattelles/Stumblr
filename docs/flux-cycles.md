# Flux Cycles

## Post Cycles

### Posts API Request Actions

* `fetchAllPosts`
  0. invoked from `PostFeed` `didMount`/`willReceiveProps`
  0. `GET /api/notes` is called.
  0. `receiveAllPosts` is set as the callback.

* `createPost`
  0. invoked from new post button `onClick`
  0. `POST /api/posts` is called.
  0. `receiveSinglePost` is set as the callback.

* `fetchSinglePost`
  0. invoked from `PostDetail` `didMount`/`willReceiveProps`
  0. `GET /api/posts/:id` is called.
  0. `receiveSinglePost` is set as the callback.

* `updatePost`
  0. invoked from `PostForm` `onSubmit`
  0. `PATCH /api/posts` is called.
  0. `receiveSinglePost` is set as the callback.

* `destroyPost`
  0. invoked from delete note button `onClick`
  0. `DELETE /api/posts/:id` is called.
  0. `removePost` is set as the callback.

### Posts API Response Actions

* `receiveAllPosts`
  0. invoked from an API callback.
  0. `PostStore` resets `_posts` and emits change.

* `receiveSinglePost`
  0. invoked from an API callback.
  0. `PostStore` updates `_posts[id]` and emits change.

* `removePost`
  0. invoked from an API callback.
  0. `PostStore` removes `_posts[id]` and emits change.

### Store Listeners

* `PostFeed`, `PostFeedItem`, & `PostDetail` components listens to `Post` store.
* `BlogFeed`, `BlogFeedItem`, & `BlogPostDetail` components listens to `Post` store.
* `AccountDropdown` component listens to the `Post` Store.


## Follow Cycles

### Follows API Request Actions

  * `fetchFollows`
    0. invoked by SnippetDetail `componentDidMount`/ `willReceiveProps`
    0. 'GET /api/follows' is called.
    0. receiveAllFollows is set as the callback.

  * `receiveFollow`
    0. invoked by follow button `onClick` on ExploreFollow or BlogShowFollow
    0. `POST /api/follows` is called.
    0. receiveOneFollow is set as the callback

  * `removeFollow`
    0. invoked by unfollow button `onClick` on ExploreFollow or BlogShowFollow
    0. `DELETE /api/follows/:id` is called
    0. removeFollow is set as the callback

### Likes API Response Actions

  * `receiveAllFollows`
    0. invoked from an API callback
    0. FollowStore resets follow and emits change.

  * `receiveFollow`
    0. invoked from an API callback.
    0. FollowStore receives a follow and emits change.

  * `removeFollow`
    0. invoked from an API callback.
    0. FollowStore removes a follow and emits change.

### Store Listeners

  * `PostDetail` component listens to the Follow Store.
  * `BlogPostDetail` component listens to the Follow Store.
  * `AccountDropdown` component listens to the Follow Store.


## SearchBar Cycles

### SearchBar API Request Actions

* `fetchSearchSuggestions`
  0. invoked from `SearchBar` `onChange` when there is text
  0. `GET /api/posts` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the callback.

### SearchBar API Response Actions

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. `SearchSuggestion` store updates `_suggestions` and emits change.

* `removeSearchSuggestions`
  0. invoked from `SearchBar` `onChange` when empty
  0. `SearchSuggestion` store resets `_suggestions` and emits change.

### Store Listeners

* `SearchBar` component listens to `SearchSuggestion` store.

----------------------------------------------------------------------------
