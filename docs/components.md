## Component Hierarchy

* **App**
  * SearchBar
  * **Dashboard**
    * NavBar
      * AccountDropdown
    * SideBar
    * PostFeed
      * PostForm
        * PostType
          * TextForm
          * PhotoForm
          * QuoteForm
          * LinkForm
      * PostFeedItem
        * PostDetail
  * **BlogShow**
    * BlogHeader
    * BlogFeed
      * BlogFeedItem
        * BlogPostDetail

## Routes

* **component:** `App` **path:** `/`
  * **component:** `Dashboard` **path:** IndexRoute
  * **component:** `Dashboard` **path:** `/dashboard`
  * **component:** `BlogShow` **path:** `/blog/:blogId`
