## Component Hierarchy

**Bolded** components are associated with routes.

(:exclamation: Remember, the bolded components are created by their
associated routes, so the nesting of your bolded components must
_**exactly**_ match the nesting of your routes.)

* **App**
  * SearchBar
  * **Dashboard**
    * NavBar
      * AccountDropdown
    * SideBar
    * PostForm
      * PostType
        * TextForm
        * PhotoForm
        * QuoteForm
        * LinkForm
    * PostFeed
      * Post
        * PostDetail
          * AuthorAvatar
          * Content (post title, body)
          * FeedPostLikes
            * LikeForm
            * LikesDisplay
  * **BlogShow**
    * ShowDashboard
      * BlogShowFollow
    * Blog
      * BlogHeader
      * BlogFeed
        * BlogPost
          * BlogPostDetail
            * Content (post title, body)
            * BlogShowPostLikes
              * LikeForm
              * LikesDisplay
  * **Explore**
    * ExploreNavbar
    * ExploreFeed
      * BlogSnippet
        * SnippetDetail
        * ExploreFollow

## Routes

* **component:** `App` **path:** `/`
  * **component:** `Dashboard` **path:** IndexRoute
  * **component:** `Dashboard` **path:** `/dashboard`
  * **component:** `BlogShow` **path:** `/blog/:blogId`
  * **component:** `Explore` **path:** `/explore`

***Note: Explore is a bonus feature.
