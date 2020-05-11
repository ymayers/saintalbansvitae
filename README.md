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

_The site will allow users to create blog posts and photos, with the ability to comment on community members' photos/articles.._

- _Users will be able to log in._
- _Users will be able to write blog posts._
- _Users will be able to post photos._
- _Users will be able to comment._

### Goals

- _Lorem ipsum, dolor sit amet,_
- _consectetur adipiscing elit._
- _Phasellus dapibus fermentum risus vitae bibendum._
- _Integer vel ipsum mollis odio sollicitudin ornare eu vel ex._
- _etc._

### Team

Created, designed, and developed by [Yolea Mayers](https://github.com/yoleamayers) for the General Assembly Software Engineering Immersive (May '20 Cohort) Unit 4 Project.

### Permissions

_Lorem ipsum dolor sit amet. Phasellus dapibus fermentum risus vitae bibendum. Integer vel ipsum mollis odio sollicitudin ornare eu vel ex. In quis fringilla velit, ac maximus quam. Etiam eget placerat neque. Aenean faucibus sem non nisi lobortis ullamcorper._

<br>

## MVP

> The Minimum Viable Product should be a well-planned, easily-communicated product, ensuring that the client's deliverable will be achievable and meet specifications within the time frame estimated.

_The **Saint Albans Vitae** MVP is for the app to have full CRUD functionality and working authorization. The App will be styled similarly to wireframes, below. The **Saint Albans Vitae** will be responsive in Desktop, Mobile and iPad views._

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views.

![Dummy Link](url)

- Desktop Landing

![Dummy Link](url)

- Desktop Hero

![Dummy Link](url)

- Resource Index

![Dummy Link](url)

- Resource Show

![Dummy Link](url)

- Tablet Resource Index

![Dummy Link](url)

- Mobile Resource Index

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app.

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

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

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

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Layout              |    H     |     3 hrs      |     2 hrs     |     TBD     |
| Create CRUD Actions |    H     |     6 hrs      |     1 hrs     |     TBD     |
| SignUp/SignIn       |    H     |     2 hrs      |     2 hrs     |     TBD     |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |     TBD     |
| TOTAL               |          |     14 hrs     |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evalute possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

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

> This section is not necessary for your pitch!

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

---

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.
