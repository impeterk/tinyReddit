# <center>Tiny Reddit client</center>
### <center>vite + react + redux</center>
---
**Goal** : Create tiny reddit client where you can easily browse trough subreddits and add them into your favorite list

- [ ] create design / scetch
- [ ] create wireframe

**Commit often and create *NEW BRANCHES***

---
#### 25.10.2022

Today was productive day. :satisfied:

- **Redux**
  I might not even use Redux for this project. Firstly I am going to write this app only in React. After it is "done" I will recreate it with redux. Sounds like fun. :laughing: :sunglasses:

**Firstly** I have to figure out how to set up **CORS** in Vite. After about 30 mins I was able to set it up, and fetch data.

I have created basic app using react and react hooks. Especialy useState and useEffect.
The basic functionality is there, you can search subreddits as you wish. You can change them, and load more content.

Each post has its title set as link in unordered list. So after clicking you are redirected to reddit website.

**goals**
- [x] Add name of Subreddit as heading
- [ ] Add Search
- [ ] rewrite <code>data</code> so that, after fetching new data, firstly we check if any of the old data is same as new one, if so, we preserve the old data, and update it with new one.
- [x] Commit for ofter
- [ ] Start working on router
- [ ] Start on styling
- [ ] **Comment**

---
#### 26.10.2022

I have been working a little bit on the app. Heading is now dinamicaly creaded depending on subreddit.

Other feature that I have added is, that listing buttons now change color dinamicly. Unfortunately the code needs to be refactored since I strongly believe this function can be written much better. Never the less it is working.

- **Styling**
  I have not yet implemented any styling. This will be the last step, first I would like to build the functionality.

- **Router**
  This is the main focus for upcoming week. I really need to implement react router, so that the App feels more complete. 

- **Data fetching**
  This one will be a pain. Altough it is the key component of user experience. It is really imporant, that the data that is displayed is only updated with "load more" and not redrawn. Right now it is not implemented :worried:. Only time I would like to redrawn whole data is after we change the subreddit or search for something.

**Goals**
- [ ] **Branches !!!** -Really new to work on this
- [ ] **Router**
- [ ] Data fetching
- [ ] Styling
- [ ] Comments

---
#### 27.10.2022

I have only worked on simple "*search*". Simply created input field, that updates value based on user input. Than I have passed this down to `<Data>` component. For now we are simply rendering search term in `<p>` element. Later we will add search functionality completely with option to saerch only within subreddit or to search whole reddit.

I am finally using git branches :joy:. Lets see how long I will keep this up. 

---
#### 28.10.2022
Today I have implemented Search!. :thumbsup:

- **Search**
There is now option to search within specific subreddit or whole subreddit. Although, I am not sure if this function works as expected on Reddit JSON API. :confused:

- **Router** 
  in the end might not be necessary to implement. To be honest this depend on final styling and functionality

- **Data fetching** 
 I have created new `<Loading />` component.This was pretty easy thanks to bulma :smile:. It is progress bar with text, that randomly changes color

I have also added some "*error*" messages. When the subreddit you are trying to access does not exist. I believe that the functionality I wanted to build is there. So I will start to work on styling.

**Goals**

- [ ] Styling
- [ ] Comments

---
