# The Saint Albans Vitae

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

_**The Saint Albans Vitae** is a blog app where users can share St. Albans' rich history._

### Core Features

_The site will allow users to create blog posts and photos, with the ability to comment on community members' photos/articles. Users will be able to:_


- _Log in_
- _Write blog posts_
- _Post photos_
- _Comment on blog posts_


### Team

Created, designed, and developed by [Yolea Mayers](https://github.com/yoleamayers) for the General Assembly Software Engineering Immersive (May '20 Cohort) Unit 4 Project.

<br>

## MVP

_The **Saint Albans Vitae** MVP is for the app to have full CRUD functionality and working authorization. The App will be styled similarly to wireframes, below. The **Saint Albans Vitae** will be responsive in Desktop, Mobile and iPad views._

### Client (Front End)

#### Wireframes


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

> Use this section to display an image of a computer generated ERD model.

#### Data Heirarchy

> Use this section to display the database, table, and attribute heirarchy.

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

Post MVP, I'd like to implement an interactive timeline of the history of Saint Albans. I'd also like to expand the site to include current community events and happenings.

---
