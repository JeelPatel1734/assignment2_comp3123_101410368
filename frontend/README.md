Features
Authentication:
User Signup and Login using secure hashed passwords.
Protected routes for managing employee data.


Employee Management:
List all employees with a clean UI.
Add new employees with validation.
Update existing employee details.
View employee details in a separate screen.
Delete employee records.


Search Functionality:
Search employees by department or position.


Validation:
Frontend and backend validation for all forms.
Error messages for invalid inputs.


Responsive Design:
Uses Material UI or Bootstrap for professional UI/UX.
Mobile-friendly design.


Deployment:
Backend deployed on Heroku (or any hosting platform).
Frontend deployed on Vercel or Netlify.




Technologies Used
Frontend
ReactJS: Component-based UI development.
React Router: Routing for navigation between pages.
Axios: HTTP client for API communication.
Material UI/Bootstrap: Styling and responsive design.

Backend
Node.js: Runtime environment for JavaScript.
Express.js: Framework for REST API development.
MongoDB: Database for storing employee and user data.
Mongoose: ODM for MongoDB.
JWT/Bcrypt: Secure user authentication.


Setup and Installation
Prerequisites
Node.js installed on your machine.
MongoDB server running (local or cloud like MongoDB Atlas).



Backend Setup
Clone the repository:
git clone <assignment2_comp3123_101410368>
cd backend
Install dependencies:
npm install


Create a .env file in the backend folder with the following variables:
makefile
MONGO_URI=<mongodb+srv://jeelppatel1734:xTSBB8cFLfJvFAkv@cluster0.vo47s.mongodb.net/COMP3123_LAB6?retryWrites=true&w=majority&appName=Cluster0>
PORT=5000
Start the server:
npm run dev



Frontend Setup
cd employee-management-app
Install dependencies:
npm install
Start the React app:
npm start
![Home page front end](image.png)

![Dashboard](image-1.png)

![Login page](image-2.png)

![Signup page](image-3.png)
