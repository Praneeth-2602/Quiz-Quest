# Quiz Quest

A modern and interactive quiz application built using the MERN stack. Quiz Quest provides a seamless experience for creating, managing, and participating in quizzes, with features inspired by tools like Google Forms and Menti Quiz. The project focuses on enhancing engagement through real-time quizzes and user-friendly design.

## Features

### Create and Manage Quizzes
Create customizable quizzes with multiple question types and answer options. Our intuitive interface makes quiz creation simple and efficient, allowing educators and quiz masters to focus on content rather than technical details.

### Real-Time Quiz Participation
Experience interactive quizzing with live participation features. Participants can join ongoing quizzes and see results update in real-time, creating an engaging and dynamic learning environment.

### Interactive User Interface
Built with modern design principles, our interface adapts seamlessly across all devices. The responsive layout ensures a consistent experience whether you're creating quizzes on desktop or participating via mobile.

### Quiz Analytics
Gain valuable insights through comprehensive analytics. Track participant performance, identify knowledge gaps, and measure engagement with detailed statistical breakdowns for each quiz session.

### Secure User Authentication
- Robust signup and login functionality to protect user data
- Role-based access control for administrators and participants
- Secure session management using JWT tokens

## Technologies Used

### Frontend
- **React.js**: Powers our dynamic and responsive user interface
- **Material-UI**: Provides modern, accessible UI components
- **Redux**: Manages application state effectively

### Backend
- **Node.js**: Handles server-side logic and API requests
- **Express.js**: Creates robust RESTful APIs
- **MongoDB**: Stores and manages user and quiz data efficiently

### Additional Tools
- **Socket.IO**: Enables seamless real-time quiz interactions
- **JWT Authentication**: Ensures secure user sessions
- **Mongoose**: Simplifies MongoDB interactions

## Installation

### Prerequisites

Ensure you have the following installed:
- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- Git

### Setup

1. Clone the repository:
```bash
git clone https://github.com/BhattAnsh/quiz-quest.git
```

2. Navigate to the project folder:
```bash
cd quiz-quest
```

3. Install dependencies for both client and server:
```bash
npm install
```

4. Configure environment variables:
   - Create a `.env` file in the root directory
   - Add the following configuration:
```plaintext
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

5. Start the development server:
```bash
npm run dev
```

## Usage

1. Navigate to the application in your browser:
```
http://localhost:3000
```

2. Sign up or log in to access the dashboard
3. Start creating or joining quizzes!

## Future Enhancements

We're constantly working to improve Quiz Quest. Planned features include:
- Multi-language quiz support for international accessibility
- Gamification features including badges and leaderboards
- Integration capabilities with popular education platforms
- Advanced analytics and reporting tools
- Custom theming options for organizations

## Contributing

We welcome contributions to enhance Quiz Quest! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please read our [Contributing Guidelines](CONTRIBUTING.md) for more details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions, support, or collaboration:

- **Name**: Ansh Bhatt
- **Email**: anshbhatt140@gmail.com
- **Discord Server**: https://discord.gg/5nCf4jzvKh

---

Made with ❤️ by Ansh Bhatt
