# <center>Tiny Reddit client</center>
### <center>vite + react + redux</center>
---
**Goal** : Create tiny reddit client where you can easily browse trough subreddits and add them into your favorite list

1. [ ] create design / scetch
2. [ ] create wireframe

**Commit often and create _NEW BRANCHES_**

---
#### 25.10.2022

Today was productive day. :satisfied:

Firstly I have to figure out how to set up *CORS* in Vite. After about 30 mins I was able to set it up, and fetch data.
I have created basic app using react and react hooks. Especialy useState and useEffect.
The basic functionality is there, you can search subreddits as you wish. You can change them, and load more content.
Each post has its title set as link in unordered list. So after clicking you are redirected to reddit website.

*goals*
[ ] Add name of Subreddit as heading
[ ] Add Search
[ ] rewrite <code>data</code> so that, after fetching new data, firstly we check if any of the old data is same as new one,
    if so, we preserve the old data, and update it with new one.
[ ] Commit for ofter
[ ] Start working on router
[ ] Start on styling
[ ] *Comment*

