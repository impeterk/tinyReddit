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
#### 01.11.2022
For past few days I have been working quite a lot a have done pretty much everything regarding the app. Now we have our final styling, search is working as well as changing subreddits. I have also added list of subreddits that dinamically updates based on last subreddit visited.

**Done**
- [x] subreddit/ change subreddit
- [x] render data in `<post />` component. Display no image / image / video based on data of each post
- [x] search
- [x] list of past subreddits
- [x] styling

**Problems**
- After searching, and then deleting search string, data is not re-rendered based on subreddit data, but rather searched data in different order.
- I am not using Redux. Which I might want to rewrite the whole apvp using redux, since it might help a lot.
- I have rewriten whole app, since in the beggining I was not really separating concers, but I was just building features on top of one another. In the end, it was a big mess. In order to get the app straight I had to rewrite it with *separation of concerns* in mind. I was able to handle this, pretty well. But there is for sure still room for improvement. For expample the `<data />` component is responsible for rendering `<post />`. This should be avioded.
- I am not displaying data for each posts. (e.g. comments) This is one the featueres That I would like to add in next *release*.
- React-router has not been implented as well. Another feature for "*redux version*".

---

#### 04.11.2022

**Ready to build**

For the past few days I was not really working on the APP. However today was productive. I am readdy to build this application. I believe every feature That I have decited to build into this *initial version* is ready. :grin:
The application is far from perfect. And it always will be... Main goal for now is to build it and test it in real world. I have quite an extensive list of features that I would love to implement into the application in the next versions. For now, I am ready to share my work with the world. :smile:

**Goals Done**
- [x] Styling
- [x] Data fetching
- [x] Search (broken?)
- [x] Changing subreddit
- [x] Comments on whole code

**Goals for further version**
- [ ] Redux
- [ ] React Router
- [ ] Post specific Data fetching

---

### 02.05.2023

#### RRRR 🏴‍☠️
<sup>*imagine pirate*</sup>


**RRRR** stands for React + Reddit + Redux + React Router

My goal for the next 4 weeks, that means until start of june, is to add Redux to the application as the global state management, or store if you will.As well as React router, for better user experience, but mainly for more functionality.
Current state of the application is pretty broken. Here is non-exhaustive list of what is currently wrong with the application:

- You can use the application, but it is clunky at best
- you **can not** render comments for any of the posts
- Data state is broken after searching for something
- navigation is unintuitive on mobile devices
- icons are not working

What can I fix and how?

Firstly I should reconsider the implementation of the whole application. Since at least some of the features, such as _search_ are built in to the React router.
This would mean, that some components might get simplyfied. --hopefully

Once the router is correctly implemented, I should be able to properly render each post and it's comments on separate page, well in this case as separate components.

As of right now, state and props are creating amazing waterfall from top to `<App />` to each separate component. This is pretty bad, to say at least. Redux should help with this quite a bit.
Redux should also help with creating `async` parts (slices) and components them self should get smaller and less complex. However this would also mean that I am going to have more files and more splitted code,
which might be helpful as well.


---
#### 03.05.2023

Today I have started working on the router and it going much smoother then I expected. Now I regret big time, that I did not implemented router at first, when I started working on this Application.

Anyway... I have rework whole application. Once I digged into this, i found out, how many mistakes I have made design vise. Maybe the main reason is, that I did not really implemented any good design decisions. Each component is pretty big and they are communication together in very clunky way.

I have to rethink the whole routing of the application...

So far I have implemented:
- `<Root />` Route with navigation bar and subreddit list. However none of the are currently working 
- once '/r/:subreddit' is entered into the url path, new subreddit is rendred. This is great, I have to figure out, how to implement this with buttons and other functionality

--- 

#### 20.05.2023

Today is new day. I have not worked on the app for past 2 weeks. For the past two weeks I have been refreshing my __`@redux/toolkit`__ knowledge. Since I really want to implement redux store in the `<App />`.

But in the meanwhile, there was a __Remix__ conf in which I have seen a really nice layout for web app. And I have tougth to myself, what I have built is actually Web page and not web app.

For that reason, I have decided to __Nuke__ the entire app. And I will implement a completly new layout and design.


> __New design__ 
Here is as preview of how the new disign might end up looking
![new layout for App](./public/newLayout.jpg)
