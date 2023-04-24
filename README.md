# Realtime-Private-Messaging-Web-Application
#### Deployment coming soon!
### Note: 
If interested in cloning: user will have to set up their own firebase backend, and update credentials in src/firebase.js
## Description
This chat application is a secure and private messaging platform that allows users to communicate with each other in real-time. It is built using React and Firebase and features a user-friendly interface that is available on both desktop and mobile devices.

The application also includes login and registration capabilities, which allows users to create an account and securely login to the platform. Once logged in, users can create private chat rooms, join existing ones, and invite others to join.

The login and registration processes are easy to use and user-friendly, ensuring a smooth and hassle-free experience for users. Additionally, the application is designed with security and privacy in mind, ensuring that user information is kept secure and protected.

## Technologies Utilized
#### Front End: SCSS, React.js
#### Back End: Firebase


# Pages
## Home
The Home page of this chat application consists of a Sidebar component which is composed of three child components: Navbar, Search, and Chats. The Navbar component displays the application logo and the current user's name and profile picture, and provides a logout button. The Search component allows users to search for other users and start a chat with them. The Chats component displays a list of chats the current user is participating in.

The Chat component represents the chat interface and displays the messages exchanged between users. The Input component allows the user to type a message and send it, and also provides the ability to attach an image to the message. The Message component displays the chat message with the text content and image, along with the sender's profile picture and the time the message was sent.

Overall, the Home page provides users with the ability to search for and communicate with other users through the chat interface. It also provides a way for users to view and manage their ongoing chats.

### Home Screenshot
![image](https://user-images.githubusercontent.com/87671757/234015426-7ca5eb3c-9b43-48ff-b79f-51121f35d575.png)
## Home React Components
### Chat.jsx
This is a React component called "Chat" that displays the chat interface. It imports and uses other components such as "Messages" and "Input". It also imports images for icons, and uses the context from the "ChatContext" to display the current user's display name.

### Chats.jsx
This is a React component that displays a list of chats. It uses Firebase's Firestore to retrieve the chats associated with the currently logged in user and displays them in descending order based on the date of the most recent message. When a chat is selected, it dispatches an action to the ChatContext to change the current user being viewed in the chat interface. The component also displays the user's profile picture and display name, as well as the last message in the chat.

### Input.jsx
This is a React component that represents the chat input area where the user can type a message and send it. It also provides the ability to attach an image to the message by clicking on an attachment icon, which opens a file picker dialog. When the user clicks the send button, the component sends the message to the current chat using Firebase's Firestore database. If an image was attached, the component uploads the image to Firebase Storage and includes the download URL in the message object. The component also updates the last message and date for the current chat and the corresponding chat entry in the user's chat list in the Firestore database.

### Message.jsx
This is a React functional component called "Message" that receives a "message" object as a prop. The component renders a chat message with the text content and image (if present) of the message object. It also displays the sender's profile picture and the time the message was sent. If the current user is the sender of the message, the message is styled differently to indicate that it's their own message. The component uses useContext and useRef hooks from React to access the current user and chat data from the AuthContext and ChatContext components respectively. It also uses the useEffect hook to scroll the message into view when it's rendered or updated.

### Messages.jsx
The code defines a React component called Messages, which displays the chat messages in the UI. It uses Firebase's onSnapshot function to listen for changes in the chat messages document, and updates the state of messages whenever there is a change. The Message component is used to render each individual message in the chat. The component receives the data context from ChatContext, which includes the chatId of the current chat. The component subscribes to updates for the chat document with the given chatId, and updates the state of messages whenever there is a change in the document. The component then maps over the messages array and renders each message using the Message component.

### Navbar.jsx
This is a functional component that represents the Navbar of a chat application. It uses the AuthContext to access the current user's information and displays their photo, display name, and a logout button. Clicking on the logout button calls the signOut() method from Firebase's auth module to sign out the user.

### Search.jsx
This is a React component called Search that allows the user to search for another user by their display name and create a chat with them if they are found. It uses Firebase Firestore to query the users collection and Firebase Auth to get the current user's information. If a user is found, it displays their information and allows the current user to create a chat with them. If an error occurs during the search, it displays a "User not found!" message.

### Sidebar.jsx
This is a React component that represents the sidebar of a chat application. It includes three child components: Navbar, Search, and Chats. The Navbar component renders the application logo and the current user's name and profile picture, and provides a logout button. The Search component allows users to search for other users and start a chat with them. The Chats component displays a list of chats the current user is participating in.

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
