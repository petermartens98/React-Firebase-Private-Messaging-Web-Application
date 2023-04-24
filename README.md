# Realtime-Private-Messaging-Web-Application
#### Deployment coming soon!
### Note: 
If interested in cloning: user will have to set up their own firebase backend, and update credentials in src/firebase.js
## Description

## Technologies Utilized
#### Front End: SCSS, React.js
#### Back End: Firebase


# Pages
## Home
### Home Screenshot
![image](https://user-images.githubusercontent.com/87671757/234015426-7ca5eb3c-9b43-48ff-b79f-51121f35d575.png)
## Home React Components
### Chat.jsx
This is a React component called "Chat" that displays the chat interface. It imports and uses other components such as "Messages" and "Input". It also imports images for icons, and uses the context from the "ChatContext" to display the current user's display name.
### Chats.jsx
### Input.jsx
### Message.jsx
### Messages.jsx

## Register
This is a functional component in a React web application for registering a user. It uses Firebase for authentication and storage.

The component includes a form for users to enter their display name, email, password, and upload an avatar image. When the form is submitted, it creates a new user using createUserWithEmailAndPassword function from Firebase, uploads the avatar image to Firebase storage, updates the user profile with the uploaded image URL using updateProfile function, and creates a new user document in Firestore with the user's information. It also creates a new empty user chats document in Firestore.

If there are any errors during the registration process, an error message is displayed to the user. Once the registration is complete, the user is redirected to the home page of the web application.
### Register Screenshot
![image](https://user-images.githubusercontent.com/87671757/234019890-a7b7d65a-1945-4d22-9dff-78ae37bfcb6e.png)
## Login
This is a React component for the login page of an application, which allows users to sign in with their email and password. It imports necessary Firebase authentication modules to handle the sign-in process, and uses the useNavigate hook from react-router-dom to navigate to the home page upon successful login. The component includes a form for users to input their email and password, and displays an error message if there is an issue with the login. The component also provides a link to the registration page for users who do not yet have an account.
### Login Screenshot
![image](https://user-images.githubusercontent.com/87671757/234019988-d8f4ca1d-e432-46cf-a3c3-70ccff32154a.png)
