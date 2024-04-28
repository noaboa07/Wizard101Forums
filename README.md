# Web Development Final Project - *Wizard101 Forums*

Submitted by: **Noah Russell**

This web app: **This project allows you to create, edit, and delete your wizard experience for anyone to see. You can interact with other people's posts through upvotes and comments to make new friends and learn more peoples adventures!**

Time spent: **8** hours spent in total

## Required Features

The following **required** functionality is completed:

- [✔️] **A create form that allows the user to create posts**
- [✔️] **Posts have a title and optionally additional textual content and/or an image added as an external image URL**
- [✔️] **A home feed displaying previously created posts**
- [✔️] **By default, the time created, title, and number of upvotes for each post is shown on the feed**
- [✔️] **Clicking on a post shall direct the user to a new page for the selected post**
- [✔️] **Users can sort posts by either their created time or upvotes count**
- [✔️] **Users can search for posts by title**
- [✔️] **A separate post page for each created post, where any additional information is shown is linked whenever a user clicks a post**
- [✔️] **Users can leave comments underneath a post on the post's separate page**
- [✔️] **Each post should have an upvote button on the post's page. Each click increases its upvotes count by one and users can upvote any number of times**
- [✔️] **A previously created post can be edited or deleted from its post page**

The following **optional** features are implemented:

- [ ] Users can only edit and deleted posts or delete comments by entering the secret key, which is set by the user during post creation
- [ ] Upon launching the web app, the user is assigned a random user ID. It will be associated with all posts and comments that they make and displayed on them.
- [ ] Users can repost a previous post by referencing its post ID. On the post page of the new post, the referenced post is displayed and linked, creating a thread
- [ ] Users can customize the interface of the web app
- [ ] Users can share and view web videos
- [ ] Users can set flags while creating a post. Then users can filter posts by flags on the home feed.
- [ ] Users can upload images directly from their local machine as an image file
- [ ] Display a loading animation whenever data is being fetched

The following **additional** features are implemented:

* [✔️] Added a cool background image for user appeal
* [✔️] When deleting a post, it deletes all comments associated with that post.
* [✔️] Changed the index.html to appropriately accomodate my forum page lol

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='client\src\components\Final Project.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with VEED.io
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Making my comments function correctly was definitely the most difficult task. I kept having trouble trying to get my supabase tables to work with my functions and allow each comment to share the same post_id as id of the post. Essentially, comments would either store a null value or just show up on every post instead of just the post they're intended to be on.

## License

    Copyright [2024] [Noah Russell]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.