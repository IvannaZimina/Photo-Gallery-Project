## Task
Create web-app for photographers.

## Stack
Node.js, Express.js, EJS, JS native, JWT (access & refresh token), AJV validation with JSON-schema, Ajax, localStorage, WayForPay API, Multer for images, MongoDB, Mongoose, NPM, Sass (SCSS), Materialize library.

## Description
There was created Node.js app with Express.js using EJS. There were created models of DB entities: users, albums, orders.
There were made registration and login forms for users. There were created access & refresh tokens for users with adding them to user DB entity. There was made middleware in routers to check if a user is logged in by access token to enter a personal page.
There was created a view of web-site using own styles by Sass (SCSS) and Materialize library.
The personal space contains the following functional options:
	1) edit personal information on profile page;
	2) create/delete albums/images in albums, create link for buyers;
	3) review orders and their status;
	4) log out of personal cabinet. 
There was created a buyer’s page with selection of options and making of order.
There was configured a connection to WayForPay technology with testing parameters to make payment. 

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
