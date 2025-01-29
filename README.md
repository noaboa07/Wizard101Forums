# Wizard101 Forums 🧙‍♂️✨

**Live Website:** [View the app on Netlify](https://662edd266a9762348bb37cdc--serene-toffee-8c531c.netlify.app/)

**Author:** Noah Russell

**Project Description:**
Welcome to the **Wizard101 Forums**! This web application allows users to create, edit, and delete posts about their wizarding adventures. Users can share their experiences with others, engage with the community by upvoting and commenting on posts, and explore other users' wizard stories. A perfect place to connect with fellow fans and learn more about the magical world! ✨🎮

**Time Spent:** 8 hours ⏰

---

## Features 🔧

### Required Features ✔️
- **Create Posts**: Users can create posts with a title, optional text content, and an image (via an external image URL).
- **Home Feed**: A dynamic feed displaying all previously created posts, with the time of creation, title, and upvotes count.
- **Post Details Page**: Clicking on any post takes the user to a detailed page for that specific post.
- **Sorting Posts**: Users can sort posts by their creation time or upvote count.
- **Search Functionality**: Users can search for posts by title.
- **Comment System**: Users can leave comments under any post on its individual page.
- **Upvote System**: Each post has an upvote button that increases its upvote count by one. Users can upvote multiple times.
- **Post Editing & Deletion**: Users can edit or delete their posts directly from the post's page.

### Optional Features (Not Implemented) ❌
- **Secret Key for Edit/Delete**: Users can set a secret key during post creation, required to edit or delete posts and comments.
- **Random User ID**: Upon launching, a random user ID is assigned, displayed on posts and comments they create.
- **Reposting Posts**: Users can repost previous posts, linking back to the original to create a thread.
- **Customizable Interface**: Users can customize the web app’s interface.
- **Web Video Sharing**: Users can share and view videos within the app.
- **Flagging Posts**: Users can flag posts during creation, allowing them to filter posts by flag in the feed.
- **Image Upload**: Users can upload images directly from their local machine as part of their posts.
- **Loading Animation**: Display a loading animation whenever data is being fetched.

### Additional Features ✨
- **Visually Appealing Background**: A cool, engaging background image enhances the visual appeal of the app.
- **Post Deletion**: When a post is deleted, all associated comments are also deleted.
- **HTML Customization**: Updated the `index.html` to accommodate the forum’s layout and structure.

---

## Video Walkthrough 🎥

Here’s a visual walkthrough of the implemented features:

![Video Walkthrough](client/src/components/FinalProject.gif)

*GIF created with VEED.io*

---

## Notes 📝
The most challenging part of this project was getting the **comment functionality** to work correctly. I struggled with linking comments to their corresponding posts through the `post_id`. Initially, comments would either store a null value or appear on every post, rather than being correctly tied to the post they were meant for. After some debugging and adjusting the Supabase tables, I successfully resolved the issue, making the comment system functional.

---

## License 📜

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