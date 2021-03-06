# ttt
Assignment given by Terribly Tiny Tales.

### Deployed on Heroku - 
URL: https://assignment-ttt.herokuapp.com/


![Screenshot (159)](https://user-images.githubusercontent.com/42849052/112716909-2dc37e00-8f0f-11eb-8024-410892c3877c.png)


## To run it on localhost-
Download this repo and unzip it.

Then you will get two directory:
  1. client
  2. server

Client is the frontend server\
Server is the backend server

### Steps to run backend server:
  Run the following commands.
    Step 1: Open server directory in terminal.\
    Step 2: npm install\
    Step 3: npm i nodemon\
    Step 4: nodemon app.js

### Steps to run frontend server:
  Run the following commands.\
    Step 1: Open client directory in terminal.\
    Step 2: npm install\
    Step 3: npm start

Once both the servers are running successfully-\
    Go to chrome browser and open localhost:3000

### NPM Modules used in nodejs:
1. express
2. body-parser
3. axios
4. path

### NPM Modules used in reactjs:
1. react
2. react-dom
3. materialize-css

### My approach:

1. Input is taken from frontend and send it to the backend.
2. Type of Input is String and comma seperated.
3. In the backend, converted the input string into array of rollnumbers.
4. Loop through the rollnumbers array.
5. Call external api for each rollnumbers.
6. Store the received result from api in resultObject, key is rollnumber and value is result received from api.
7. Send back the resultObject to the frontend.
8. Listed the resultObject in the form of table.

### Test Cases:

Input: 5,6,9,12,18,20,25,30,32,36,37,38,40,42,45,47,49,50 \
Output: 

5	Pass \
6	Fail \
9	Fail \
12	Fail \
18	Fail \
20	Pass \
25	Pass \
30	Fail \
32	Pass \
36	Fail \
37	Pass \
38	Pass \
40	Pass \
42	Fail \
45	Fail \
47	Pass \
49	Pass \
50	Pass

Screenshots are added in the test cases directory.
