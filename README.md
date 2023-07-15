# Travelog App
Presentations:

## Serter Iyigunlu presentation:

I added my presentation : https://youtu.be/Ols0jTex2RE

## R1: Description of your website, including purpose, functionality/features, target audience, tech stack. 

Welcome to Serter and Duncan’s Travelog.

**Purpose**

Our Travelog app is a dynamic platform designed to bring travelers and explorers together by allowing them to share their travel experiences. Its core purpose is to create a community of passionate travelers and to build a comprehensive database of travel experiences. Our app will give them a platform to share their experiences, whether users prefer to share stunning photographs or write short narratives that detail the unique local heritage, and recommend places to visit or activities that others might like to try.

Simultaneously our Travelog serves as a helpful resource for individuals planning their next adventure. Users can browse the experiences of others to research potential travel destinations, and will be able to gain first-hand insights e.g. to get an idea of costs of travel. The app will facilitate easy browsing of these posts, allowing users to explore locations based on various categories such as geographical region, activities, local attractions, and more. In this way, Travelog not only fosters a shared community of travel enthusiasts but also provides an invaluable tool for planning travel, acting as a bridge between the past experiences of others and the future journeys of its users.

The purpose of the Wanderlust app is to inspire, inform, and connect travelers from around the world.

**Functionality/Features**

The app will have a range of features allowing users to:
- Create accounts
- Share photos
- Travel Experience Browse: Explore a vast collection of travel experiences shared by fellow travelers. Read captivating narratives, view stunning photographs, and gain valuable insights about various destinations worldwide.
- Travel Experience Creation: Write posts detailing their travel that might include the cost of travel, local history, recommendations of places to visit.
- Edit/delete those posts
- Browse other user’s posts
- Comment on other’s user’s posts e.g. asking a question or just letting the author know you thought their post was cool.

**Target Audience**

- Anyone planning a trip and seeking first-hand, authentic travel advice and recommendations would find value in our app. As such our target audience for the Travelog app encompasses a wide range of travel enthusiasts. From seasoned globetrotters eager to share their off-the-beaten-path experiences, to amateur explorers seeking inspiration for their first journey, or  casual travelers looking for unique, local experiences instead of mainstream tourist destinations. In time we also see great potential in attracting travel bloggers and photographers, for whom the platform could serve as an exciting outlet to share their stories and images, (though we recognise this is a congested space!)
Travel Enthusiasts: Individuals who have a deep passion for travel and are always seeking new adventures and experiences. They are eager to explore new destinations, immerse themselves in different cultures, and continuously expand their travel horizons.

- Aspiring Adventurers: Individuals who may be new to travel or have limited experience but have a strong desire to embark on exciting journeys. They are looking for inspiration, guidance, and resources to plan and execute their travel dreams.

- Community Seekers: People who enjoy being part of a vibrant community of fellow travelers. They are interested in connecting with like-minded individuals, exchanging travel tips, seeking advice, and engaging in conversations about their shared passion for exploration.

- Responsible Travel Advocates: Travelers who prioritize responsible and sustainable tourism practices. They are conscious of their impact on the environment and local communities and seek resources and information to make ethical choices during their travels.

- Trip Planners: Individuals who appreciate having a comprehensive platform for gathering information, evaluating destinations, and planning their trips effectively. They rely on features like cost assessments, local insights, must-visit recommendations, and transportation options to create personalized itineraries.

- Photography Enthusiasts: Travelers who love capturing and sharing their travel experiences through photography. They value features that allow them to showcase their images and visually communicate the beauty and essence of the destinations they visit.

- Cultural Explorers: People who have a deep interest in learning about different cultures, traditions, and local heritages. They seek travel experiences that provide insights into the history, art, cuisine, and lifestyle of the places they visit.
**Tech Stack**

Serter and I will use the MERN stack to create our Travelog app. MERN comprises MongoDB, Express.js, React.js, and Node.js -  four powerful, open-source components that provide a complete end-to-end framework for developers.

Our decision to use the MERN stack was not only guided by it being a central part of our bootcamp curriculum, but also by the significant advantages it offers. Being a full JavaScript stack, MERN facilitates seamless development across both client and server sides, which should assist us achieve improved efficiency and consistency in our application. MongoDB, a NoSQL database, supports flexible and scalable data management. Express.js streamlines server-side coding, and Node.js provides a robust environment for server-side JavaScript execution, which should mean our app is both fast and scalable. Furthermore, React.js, known for its component-based architecture and efficient rendering which will  allow us to create a user-friendly, efficient interface that helps users enjoy a positive user experience.

Beyond the tech advantages though, as budding developers, we found the MERN stack to be particularly approachable. Its open-source nature and the strong backing from a vast community offer an array of benefits, including regular updates, a rich selection of libraries and tools, comprehensive documentation, and readily available support. We will likely draw on all of these resources as we build the app and they will hopefully expedite our development process and allow us to produce an effective app in the timeframe available.  
  
## R2: Dataflow Diagram  

![Travelog app data flow diagram](images%2FTravel_log_app.drawio.png)

## R3: Application Architecture Diagram
  
![Travelog App Architecture diagram](images%2FTravel-Log_Application%20Architecture%20Diagram.drawio.png)

## R4: User Stories

The User stories set out below will hopefully illustrate for you some features of the app from the user's perspective. It is by no means an exhaustive list of what users will be able to do, but should give you a feel for the flow of the app. 

***User Story 1:Jamie posts a New Travel Experience*** 

**As** Jamie, a registered user,  
**I want to** share pictures and details of my recent travel,  
**So that** I can document my experience and provide insights for other users who might be interested in visiting the same location.  

**Acceptance Criteria:**  

**Given** I'm logged in to my Travelog account,  
**When** I select the option to create a new travel post,  
**Then** I should be directed to a page with a form to fill in the details of my travel experience.

**Given** I'm on the 'New Travel Post' form,  
**When** I upload my travel pictures and fill in the necessary details such as location, dates, highlights, and a description of my experience,  
**Then** these details should be saved in my draft.

**Given** I've filled out the form,  
**When** I click the 'Publish' button,  
**Then** my travel post should be publicly visible to other users on the platform.  

**Given** my post is published,  
**When** I or other users view my profile,  
**Then** the new travel post should be visible in my list of travel experiences.

***User Story 2: Brodie asks a Question on another user’s post.***  

**As** Brodie, a registered user,  
**I want to** ask another user a question about their travel experience,  
**So that** I can gain more insights or clarify doubts about a potential travel destination.  

**Acceptance Criteria:**  

**Given** I'm logged in to my Travelog account,  
**When** I navigate to a travel post,  
**Then** I should see an option to post a comment or question.  


**Given** I have written my question in the comment box,  
**When** I click the 'Submit' button,  
**Then** my question should appear in the comments section of that travel post.  

**Given** my question is posted,  
**When** the user replies to my question,  
**Then** I should receive a notification or an email alerting me to the reply.  

***User Story 3: Mish deletes a Previously Posted Picture***  

**As** Mish, a registered user,  
**I want to** delete a picture I have previously posted,  
**So that** I can manage and control the content I share on my profile.  

**Acceptance Criteria:**  

**Given** I'm logged in to my Travelog account,  
**When** I navigate to the travel post containing the picture I want to delete,  
**Then** I should see an option to edit or delete my post.  


**Given** I have clicked the 'Edit' option,  
**When** I remove a specific picture and save my changes,  
**Then** the picture should no longer appear in my travel post.  


***User story 4: Taylor creates an account to explore travel destinations.***  


**As** Taylor, a new user,  
**I want to** register for a Travelog account,  
**So that** I can explore posts about things to see and do on my upcoming trip to Sydney and Melbourne.  

**Acceptance Criteria:**  

**Given** I'm on the Travelog homepage,  
**When** I click on the 'Sign Up' button,  
**Then** I should be directed to a registration form.  

**Given** I have filled out the registration form,  
**When** I click the 'Register' button,  
**Then** my account should be created and I should be logged in to my new account.  

**Given** I'm logged in to my new account,  
**When** I search for posts related to a potential destination e.g. Sydney,  
**Then** I should be able to browse and view travel experiences and recommendations related to these destinations.  

## R5: Wireframes  
**Homepage**  

![Homepage wireframe](images%2FHomepage%20-%20all%20views.png)
  
  **About Page**  
![About Page - all views.png](images%2FAbout%20Page%20-%20all%20views.png)
    
    
**Login Page**
    
 ![Login Page-all views.png](images%2FLogin%20Page-all%20views.png)

 **New User Registration**  

![New User register Page-all views.png](images%2FNew%20User%20register%20Page-all%20views.png)

**User Profile Page**  

![User profile Page-all views.png](images%2FUser%20profile%20Page-all%20views.png)
  
**Create New Post**  

![Create New Post - all views.png](images%2FCreate%20New%20Post%20-%20all%20views.png)
  
**Edit Post**  

![Edit Post - all views.png](images%2FEdit%20Post%20-%20all%20views.png)
  
**Delete Post**  

![Delete Post - all views.png](images%2FDelete%20Post%20-%20all%20views.png)
  
**Location Page**   

![Location page - all views .png](images%2FLocation%20page%20-%20all%20views%20.png)

## R6: Trello Board  

**Link:** https://trello.com/invite/b/EJz76VMb/ATTIe595943cc6c2f9207d5d6b8d9cac59a0E97553E8/travel-log-app  
  
**Early stages of part A:**

![Trello board](<images/Trello 2.png>)  

**Further tasks complete, others to discuss in scheduled call:** 

![Trello board](<images/Trello 3.png>)  
  
**Close to completion of part A:**  

![Trello board](<images/Trello 4.png>)
