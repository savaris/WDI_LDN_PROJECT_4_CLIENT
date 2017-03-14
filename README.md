# WDI PROJECT 4
My final at WDI London involved the use of an Angular front end utilising a Rails back end as the API for data access. The app's concept was to create a gaming database of the games you own/played and adding them to the user profile so you could keep track of them accordingly. In order to make the app more versatile an external API known as the Internet Game Databse was used to seed in the a list of possible games from an array of 20,000 individual titles. More information regarding the API can be found here: https://igdb.github.io/api/about/welcome/

After finding a suitable API, requests were made in order to view that database collection of the objects within the array for selected parameters. Below is an example of the request to the API using Insomnia and as with most API, registration is required in order to recieve the authorization header for the API. The Data recieved was JSON thus no xml conversion was required.

---

<img width="1012" alt="screen shot 2017-03-13 at 22 05 46" src="https://cloud.githubusercontent.com/assets/23128874/23877258/571395e4-0839-11e7-90b6-eddc3cc38b6b.png">

---

# The Application

Now that the data was tangible, I went onto create my wireframes to envision what I wanted my appliaction to look like. Below are the examples which I generated and used as template to display the data from the API.


---

<img width="1270" alt="screen shot 2017-03-13 at 23 01 02" src="https://cloud.githubusercontent.com/assets/23128874/23878744/1ceda38e-0841-11e7-9938-93191ea85bcc.png">

<img width="1269" alt="screen shot 2017-03-13 at 23 01 20" src="https://cloud.githubusercontent.com/assets/23128874/23878751/29b0879e-0841-11e7-9bab-9ccb9c6c8089.png">

<img width="794" alt="screen shot 2017-03-13 at 23 01 46" src="https://cloud.githubusercontent.com/assets/23128874/23878762/357e26d0-0841-11e7-9a02-2829d2fb3ced.png">


---

Once the layout had been conceptualised I had to work out what models I needed as well as creating tables and reference to the games model. Overall I decided to use four models: comment, game, library ( so that games would persist to the userprofile when either own/played were clicked and updated via the view page) and user. 
I layed out the schema I wanted to use for each of my models and decided to create a join table between my game and user model through a migration. 
Below is the relationship all these models share:

---

<img width="1069" alt="screen shot 2017-03-13 at 23 15 57" src="https://cloud.githubusercontent.com/assets/23128874/23879131/251edff8-0843-11e7-90f4-8ceb90a34978.png">

<img width="952" alt="screen shot 2017-03-13 at 23 35 22" src="https://cloud.githubusercontent.com/assets/23128874/23879559/cb482f7c-0845-11e7-8442-4fb3421c6b24.png">


---

As with Rails you can create the MVC format with a single command and as such controller were generated through the scaffold method. With the controller sorted, serializers were generated to show the explicit nature of how the models interacted with each other in relation to the attributes compiled.


---

<img width="1014" alt="screen shot 2017-03-13 at 23 24 53" src="https://cloud.githubusercontent.com/assets/23128874/23879349/5b67326c-0844-11e7-9f24-f903d71f9c83.png">


---

After creating the relationship between serializers/models I started to work on creating a script that would seed data from the IGDB to my postgreSQL database. Within my seeds file I used specific selectors to pick the key:value pairs I wanted to be present within my show pages using Angular. As the script is rather long, please refer to the seeds.rb file for the exact syntatic code.


As with any Angular app the module has to be initiated with the resources given within an array. For this app I used ui.router, ngResource, angular-jwt and yaru22.angular-timeago. The yaru22.angular-timeago resource is used to post the time difference when an item is first posted to the present time. I used this resource as it would let other users know how frequented a game is and how long since another user commented on that said game.

The app compromised of both Angular front/back end authentications storing a token in local storage when a registered user signs in. It uses the same base principle as my 3rd WDI project but making sure the the model on the front end correlates to that of the back end. 

For factories I had to create 4 in total. These compromised of comment, game library and user. 


---

<img width="1028" alt="screen shot 2017-03-14 at 00 34 10" src="https://cloud.githubusercontent.com/assets/23128874/23880808/012db3d4-084e-11e7-8d62-5dc39a11610e.png">


---

One of the most challenging aspect of the build was how to make game persist to the user profile with the update function. One of the issues I encountered whilst pushing data to the user profile was that any game the said user viewed, would automatically be added to his/her profile. This was unintended as these changes should only persist once the update button is activated. As such a set timeout function was devised in order to by pass this. 

---

<img width="1016" alt="screen shot 2017-03-14 at 00 43 54" src="https://cloud.githubusercontent.com/assets/23128874/23881037/77e2f722-084f-11e7-8e32-6b530dfc93ca.png">

---

By console logging that the function worked, I created a saveGame and updateLibrary function to push the changes directly into the user profile page. As I was also posting comment within the game show pages, I also created a submitComment function using promises.

---

<img width="1028" alt="screen shot 2017-03-14 at 00 56 46" src="https://cloud.githubusercontent.com/assets/23128874/23881245/2cb6144e-0851-11e7-9498-f54086cc00b2.png">

---

By using all these functions in conjunction with each other and utilising scss the final app was created. Below is a few screenshots of the finished product at this point in time but further improvements will be added later on.


---

<img width="1280" alt="screen shot 2017-03-14 at 01 03 37" src="https://cloud.githubusercontent.com/assets/23128874/23881544/09566baa-0853-11e7-92cb-7055c6a51dbc.png">

---

<img width="1280" alt="screen shot 2017-03-14 at 01 05 30" src="https://cloud.githubusercontent.com/assets/23128874/23881599/5bd756be-0853-11e7-8e98-5ffe67a7163c.png">

---

<img width="1280" alt="screen shot 2017-03-14 at 01 07 28" src="https://cloud.githubusercontent.com/assets/23128874/23881623/7ef428b6-0853-11e7-826b-f62b1d92b449.png">

---

<img width="1280" alt="screen shot 2017-03-14 at 01 07 42" src="https://cloud.githubusercontent.com/assets/23128874/23881633/8b58820a-0853-11e7-8d92-ad517df71545.png">

---

<img width="1280" alt="screen shot 2017-03-14 at 01 07 50" src="https://cloud.githubusercontent.com/assets/23128874/23881639/94ed1df8-0853-11e7-8dfc-f0901694f408.png">

---

<img width="1280" alt="screen shot 2017-03-14 at 01 08 41" src="https://cloud.githubusercontent.com/assets/23128874/23881644/9db3423c-0853-11e7-9d56-3275a53923dc.png">

---

A fully workinf version of the app can be found on:

# Further implementations for the future.
As with any piece of code further functionality/styling is always part of its core. As such, additional features I would like to include further down the line are:  

* Create a new show page showing the most current/active users alongside the most played/owned games.
* Add a rating system to each game so users can vote on their favourite games.
* Introduction of a forum type system where users can post ingame issues/difficulties and whereby other users can offer to help.
* A system where users can add each other to their friends list.
* Making the website mobile responsive.
* Creating a user edit page with more diverse settings to let them have greater control over the games they own/play.
* Incorporating the Twitch Stream API, where user can directly log into their Twitch account from a hosted website and upload their streams.
* Utilising the above API,users can get a greater sense of what a gaming database system can offer.

