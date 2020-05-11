# The Saint Albans Vitae

![Billie Holiday](https://i.pinimg.com/originals/6f/68/ac/6f68aca8aa1723798b5a19bb8a9c403e.gif)![Coltrane/Davis](https://thumbs.gfycat.com/SoreFloweryAdmiralbutterfly-small.gif)

- [Overview](#Overview)
  - [Core Features](#Core-Features)
  - [Goals](#Goals)
  - [Team](#Team)
  - [Permissions](#Permissions)
- [MVP](#MVP)
  - [Client (Front End)](#Client-Front-End)
    - [Wireframes](#Wireframes)
    - [Component Hierarchy](#Component-Hierarchy)
    - [Component Breakdown](#Component-Breakdown)
    - [Component Estimates](#Component-Estimates)
  - [Server (Back End)](#Server-Back-End)
    - [ERD Model](#ERD-Model)
    - [Data Heirarchy](#Data-Heirarchy)
    - [Data Heirarchy](#Data-Heirarchy-1)
  - [Dependencies](#Dependencies)
- [Post-MVP](#Post-MVP)
- [Code Showcase](#Code-Showcase)
- [Code Issues & Resolutions](#Code-Issues--Resolutions)

<br>

## Overview

_From the 1920s - 1970s, a small encalve of Southeastern Queens - St. Albans - was a place where famed musicians, athletes and professionals called home. **The Saint Albans Vitae** is a commemoration app, where users can share the community's rich history._

### Core Features

_The site will allow users to create blog posts and upload photos, with the ability to comment on other community members' posts. Users will be able to:_

- _Register_
- _Log in_
- _Write blog posts_
- _Post photos_
- _Comment on blog posts_ -_Learn about St. Albans' History from other Users_

### Team

Created, designed, and developed by [Yolea Mayers](https://github.com/yoleamayers) for the General Assembly Software Engineering Immersive (May '20 Cohort) Unit 4 Project.

<br>

## MVP

_The **Saint Albans Vitae** MVP is for the App to have full CRUD functionality and working authorization for registration and login functions. Styling of the App will be similar to wireframes, below with responsiveness for Desktop, Mobile and iPad views._

### Client (Front End)

#### Wireframes

![Desktop Landing](https://imgur.com/OTYZ4RS.png)

- Desktop Landing

![Desktop Sign Up](https://imgur.com/cUFLMK7.png)

- Desktop Sign Up

![Desktop Sign In](https://imgur.com/sdWbU6C.png)

- Desktop Sign In

![Desktop Home Page](https://imgur.com/S1X4Viw.png)

- Desktop Home Page

![Desktop Single Post Page](https://imgur.com/7WfiMQy.png)

- Desktop Single Post Page

![Desktop Create Post Page](https://imgur.com/TaFnvq6.png)

- Desktop Create Post Page

![Desktop Edit Post Page](https://imgur.com/05hTYi0.png)

- Desktop Edit Post Page

![Mobile Landing](https://imgur.com/nettmrK.png)

- Mobile Landing

![Mobile Sign Up](https://imgur.com/ttVnfAM.png)

- Mobile Sign Up

![Mobile Sign In](https://imgur.com/XmFA4rN.png)

- Mobile Sign In

![Mobile Home Page](https://imgur.com/wHjblaX.png)

- Mobile Home Page

![Mobile Single Post Page](https://imgur.com/AVmXQwd.png)

- Mobile Single Post Page

![Mobile Create Post Page](https://imgur.com/rOSR96Z.png)

- Mobile Create Post Page

![Mobile Edit Post Page](https://imgur.com/fb93gT7.png)

- Mobile Edit Post Page

![iPad Landing](https://imgur.com/prrxphv.png)

- iPad Landing

![iPad Sign Up](https://imgur.com/nEhPw4e.png)

- iPad Sign Up

![iPad Sign In](https://imgur.com/vQmuP6I.png)

- iPad Sign In

![iPad Home Page](https://imgur.com/lI0tvrg.png)

- iPad Home Page

![iPad Single Post Page](https://imgur.com/MbXg4ZH.png)

- iPad Single Post Page

![iPad Create Post Page](https://imgur.com/DZ4VhHU.png)

- iPad Create Post Page

![iPad Edit Post Page](https://imgur.com/yjZ6tTL.png)

- iPad Edit Post Page



#### Component Hierarchy

```structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Shared/
        |__ Layout.jsx
        |__ Header.jsx
        |__ Footer.jsx
      |__ App.jsx
      |__ Main.jsx
      |__ Sigup.jsx
      |__ Signin.jsx
      |__ CreatePost.jsx
      |__ EditPost.jsx
      |__ CreateComment.jsx
      |__ EditComment.jsx
|__ services/
      |__ API_Helper.jsx

```

#### Component Breakdown

|   Component   |    Type    | state | props | Description                                                   |
| :-----------: | :--------: | :---: | :---: | :------------------------------------------------------------ |
|    Layout     | functional |   n   |   y   | _The Layout will contain the header and footer._              |
|    Header     | functional |   n   |   n   | _The Header will provide a link to each of the pages._        |
|    Footer     | functional |   n   |   n   | _The Footer will contain copyright and contact information._  |
|      App      |   class    |   n   |   y   | \_App will house all of the data and pass down info as props. |
|     Main      |   class    |   y   |   y   | _Main will display all of the posts._                         |
|    Signup     |   class    |   y   |   y   | _Signup will use Auth to provide access to create content._   |
|    Signin     |   class    |   y   |   y   | _Signin will use Auth to provide access to content._          |
|  CreatePost   |   class    |   y   |   y   | _CreatePost will use props from App to create posts._         |
|   EditPost    |   class    |   y   |   y   | _EditPost will use props from App to edit posts._             |
| CreateComment |   class    |   y   |   y   | _CreateComment will use props from App to create comments._   |
|  EditComment  |   class    |   y   |   y   | _EdittComment will use props from App to edit comments._      |

#### Component Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Layout              |    H     |     3 hrs      |     2 hrs     |     TBD     |
| Create CRUD Actions |    H     |     6 hrs      |     1 hrs     |     TBD     |
| SignUp/SignIn       |    H     |     2 hrs      |     2 hrs     |     TBD     |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |     TBD     |
| TOTAL               |          |     14 hrs     |     3 hrs     |     TBD     |

<br>

### Server (Back End)

- _Backend - Ruby on Rails_
- _Backend Deployment - Heroku_

#### ERD Model

![ERD](https://imgur.com/gQ3ZtHT.png)

#### Data Heirarchy

```structure

savitae_db
|__ users/
|__ posts/
|__ comments/

```

#### Data Heirarchy - Expected API Endpoints

/home <br>
/user/:id <br>
/user/:id/createpost <br>
/user/:id/:post_id <br>
/user/:id/:post_id/edit <br>

<br>

### Dependencies

|   Library    | Description            |
| :----------: | :--------------------- |
|    React     | _Front End rendering._ |
| React Router | _Front End rendering._ |
|     CORS     | _Front End rendering._ |

<br>

---

## Post-MVP

Post MVP, I'd like to implement an interactive timeline of the history of Saint Albans. I'd also like to expand the site to include current community events and happenings. Incorporation of the Framer Motion library is also a Post-MVP goal.

---

![Ella Fitzgerald](https://66.media.tumblr.com/ba7f7d7db109cd3b8c81124194e6f675/tumblr_ooxr8h2mlX1qa8arko5_250.gif)
