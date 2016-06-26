# Stumblr

[Heroku link][heroku] coming soon...

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Stumblr is a web application inspired by Tumblr that will be built using Ruby on Rails and React.js.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] A production README, replacing this README
- [ ] Post Forms (for various post types)
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Feed
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Follows
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Likes
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: docs/views.md
[components]: docs/components.md
[flux-cycles]: docs/flux-cycles.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Deploy to Heroku, User Authentication, Blog Model (1.5 day, W1 Wed 12pm)

**Objective:** Functioning rails project with Authentication and basic Blog model.

- [ ] Deploy to Heroku
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/sign-in pages
- [ ] blank landing page after sign-in
- [ ] create `Blog` model
- [ ] create BlogsController (create, show)

### Phase 2: Post Model, JSON API, Post CRUD and Flux Architecture (1.5 days, W1 Th 6pm)

**Objective:** Posts can be created, edited and destroyed through
the API. Post components and flux loop are built out.

- [ ] create `Post` model
- [ ] jBuilder views for posts
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for posts (`PostsController`)
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.
- [ ] implement each Blog component, building out the flux loop as needed.
  - [ ] PostFeed
    - [ ] Post
      - [ ] Post Detail
  - [ ] Post Form

### Phase 3: Blog Show (1 day, W1 F 6pm)

**Objective:** Posts can be viewed on Blog Show page.

- [ ] setup React Router
- [ ] implement each Blog component, building out the flux loop as needed.
  - [ ] BlogHeader
  - [ ] BlogFeed


### Weekend: Finish anything left from phase 1-3. Focus on the completion of post and blogShow features. (2 day, W1 Sun 6pm)

### Phase 4: Likes (1 days, W2 Tu 12pm)

**Objective:** Posts can be liked and unliked. Posts display their numLikes.

- [ ] create 'Like' model and join table
- [ ] implement each Like component, building out the flux loop as needed.
  - [ ] LikeForm
  - [ ] LikesDisplay

### Phase 5: Follows (1.5 days, W2 Wed 6pm)

**Objective:** Users can follow and unfollow blogs. Blogs display numFollowers.

- [ ] create `Follow` model and join table
- [ ] JSON API for follows
- [ ] Setup up follow flux loop
  - [ ] setup Follow Actions and ApiUtil
  - [ ] make Follow Store
  - [ ] Build out follow component
    - [ ] BlogShowFollow

### Phase 6: Search (1 day, W2 Th pm)

**Objective:** Posts and blogs can be searched by post title or blog title.

- [ ] create `Search` model and join table
- [ ] JSON API for Search
- [ ] Setup up Search flux loop
  - [ ] setup Search Actions and ApiUtil
  - [ ] make Search Store
  - [ ] Build out SearchBar component

### Phase 7: Seeding (1 day, W2 Fri 6pm)

**objective:** Provide deep and lush seed data for application.

- [ ] get seed data

### Weekend: Dashboard and Styling Cleanup (2 days, W2 Sun 6pm)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Make Dashboard Component and integrate into flux loop as needed.
- [ ] Improve HTML and CSS.
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Explore Page
- [ ] Taggings

[phase-one]: docs/phases/phase1.md
[phase-two]: docs/phases/phase2.md
[phase-three]: docs/phases/phase3.md
[phase-four]: docs/phases/phase4.md
[phase-five]: docs/phases/phase5.md
