## Task
Create web-app for photographers.

## Stack
### Backend:
JavaScript, Node.js, Express.js, REST API, JWT, JSON validation, AJAX, WayForPay API, MongoDB.
### Libraries:
Mongoose, AJV, crypto, jsonwebtoken, deep-freeze, multer for images.
### Frontend:
JavaScript, EJS, localStorage, Sass (SCSS), Materialize library.


## Description
### Backend
There was created Node.js app with Express.js using MVC. There were created next modules:
-	Server module: contain main app file with base configurations of app and connection to DB;
-	Configuration module: contain configuration of: PORT, WayForPay, deepfreeze;
-	Model module: created models of DB entities in MongoDB - users, albums, orders;
-	Controller module: created functions of interaction with the DB entities (CRUD), created access & refresh tokens (JWT) for users using private and public keys, WayForPay configurations using test data;
-	Routes module: built REST API architecture using POST and GET methods, made middleware to check if a user is logged in by access token to enter a personal page.
-	Schemas module: create JSON validation scheme for validate the data from front.
	
### Frontend
There were made view of web-site using EJS, localStorage for JWT, own styles by Sass (SCSS) and Materialize library:
-	registration and login forms for users on separate link;
-	the personal space contains the following functional options (on separates links):
1) edit profile: to edit personal information on profile page;
2) albums: create/delete albums, create link for buyers;
3) images page in albums: add photos using separate inputs form, delete photos using checkbox form;
4) orders: review orders and their status;
5) log out of personal cabinet.
-	buyer’s page without JWT: using checkbox form and making an order using WayForPay technology with testing parameters to make payment.

## Environment
Clone project to your machine. Use npm install to add all dependencies in project and open web-app.

## View
Log in page	 
![image](https://user-images.githubusercontent.com/46706194/146981954-391924c0-5d58-4ee4-a7fd-d5bcbdd11c98.png)

Registration page 
![image](https://user-images.githubusercontent.com/46706194/146981971-6330a31d-4d1c-4cca-9e35-15a8b054f147.png)

Profile page
![image](https://user-images.githubusercontent.com/46706194/146981991-2c01ef9c-686d-488f-ab44-139b9ab4e599.png)

Albums page
![image](https://user-images.githubusercontent.com/46706194/146982020-d1b36435-c860-48b6-bc2c-3d1393914d86.png)

Orders page
![image](https://user-images.githubusercontent.com/46706194/146982041-1dcd7695-e45d-4caa-823d-1a2c369fc945.png)

User buying page
![image](https://user-images.githubusercontent.com/46706194/146982066-520555be-b83b-4491-acfc-7bc1916582a9.png)
![image](https://user-images.githubusercontent.com/46706194/146982073-c76a10bf-7f79-4d66-beeb-864c64135f5e.png)
