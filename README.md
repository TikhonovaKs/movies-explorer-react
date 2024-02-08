# "movies-explorer-react". frontend and backend parts
The final study project on the web faculty at Yandex.Practicum

***This is a service where you can search for movies on demand and save them in your personal account.***

## Tools and stack: 
* HTML / CSS / React / Express / MongoDB / NodeJS / API / JWT
* Third-party libraries: [react-hook-form](https://www.npmjs.com/package/react-hook-form)
* Custom hooks: "useResize" hook for tracking a screen size / "usePopupClose" for closing the popup outside
  
## Here's what was done:
* set up infrastructure and created Express server;
* connected database, created API schemas and resource models;
* implemented logging, authentication and authorization on the server;
* the backend was deployed on Yandex Сloud;
* components made up in React, markup was ported to the React format;
* described the logic and layout of registration, login, profile editing, and saved movies pages;
* asynchronous GET- and POST-requests to the API were implemented;
* authorized and unauthorized states, saving movies in the profile were worked out;
* received movies are filtered on the client side.

## Project screenshots:
***Main page***
![](./frontend/src/images/readme/main.png)

***Registration page: create your account***
![](./frontend/src/images/readme/sign-up.png)

***Login page***
![](./frontend/src/images/readme/sign-in.png)

***Movie search page: search for a movie by keyword (use only one letter)***
![](./frontend/src/images/readme/search-movies.png)

***Account: Edit your account***
![](./frontend/src/images/readme/account.png)
![](./frontend/src/images/readme/edit-account.png)

## Project links
### Website: [Visit our website](https://diploma-kseniia.nomoredomainsmonster.ru/)
### Figma Project: [Explore Figma Project](https://www.figma.com/file/LIZzsFoCCZrF381c6XbWSg/Diploma-(Copy)?node-id=891%3A3857&mode=dev)


## Project Setup Instructions
To set up this project locally, follow the steps below:

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/TikhonovaKs/movies-explorer-react.git
    ```

2. **Navigate to the Repository:**

    ```bash
    cd movies-explorer-react
    ```

3. **Navigate to the api Folder:**

    ```bash
    cd api
    ```
4. **Running the api (backend part):**
   
    ```bash
    npm run dev
    ```
   ***Make sure you see this success message: "I am listening port 3000"*** 
5. **Open a new terminal window. Navigate to the Frontend Folder:**

    ```bash
    cd frontend
    ```

6. **Install frontend dependencies:**

    ```bash
    npm install
    ```
7. **Running the frontend part:**

    ```bash
    npm run start
    ```    
   ***Make sure you see this success message: "webpack compiled successfully"***

8. **Open web site: http://localhost:3001:**

Now you can interact with the web service: register, log in, log out, search, save and delete movies.
    

