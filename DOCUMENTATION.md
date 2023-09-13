# zuri_stage_2
# NodeJS-CRUD-API

Are you ready ? Let's go

## Step 1: Installing dependencies

Clone the repository then run **npm install**

## Step 2: Link your api to Mongo DB

You can install mongodb locally or use Mongo Atlas (online).  In my case I use Mongo DB Atlas. Create an account or sign in (if you have an account) and replace **process.env.MONGO_URI** with your connection string. The name of my database is **Users**.

## Step 3: Launch your project

To launch your project, just type the following command : **node app.js**. Your API will therefore run on port 8008

## Step 4: Test the API endpoints

This is an API that manages names of users in a adatabase. 


So we have a total of 4 routes

1. Create player http://localhost:8008/api/create. This returns a user just created and saved on the database.
2. Find player by Id http://localhost:8008/api/user/:id. This returns a user based on the id passed as parameter in ":id"
3. Update player http://localhost:8008/api/update_user/:id. This takes in the id of the user to update and modifies the data, while keeping the same id. It is different from creating a player. Creating a player will generate a new id, updating a player just modifies the data but keeps the same id.
4. Delete player http://localhost:8008/api/delete/:id. This deletes a player from the database based on the id passed as parameter in ":id"
