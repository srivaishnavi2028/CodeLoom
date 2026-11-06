# CodeLoom – AI-Powered E-Learning Platform

CodeLoom is a full-stack e-learning platform built to provide students with an interactive learning experience, secure authentication, course management, quizzes, and AI-powered DSA practice using a locally hosted Ollama LLM.

## 🚀 Features

### 1. Authentication and Security
- Student registration and login.
- JWT-based authentication.
- Role-based access control.
- BCrypt password hashing.

### 2. Course Management
- View available courses.
- Manage course information.
- Assign instructors to courses.
- Student course enrollment.

### 3. Student Learning Module
- Student profile management.
- My Learning section.
- Course access and learning activities.

### 4. Quiz Module
- Interactive quizzes.
- Quiz submission and result tracking.
- Student quiz-result management.

### 5. AI-Powered DSA Practice
- Integrated locally hosted Ollama LLM.
- Generates beginner-friendly DSA problems and solutions.
- Supports seven topics:
  - Arrays
  - Strings
  - Linked Lists
  - Stacks
  - Queues
  - Trees
  - Sorting

## 🛠️ Technology Stack

| Component | Technologies |
|---|---|
| Backend | Java, Spring Boot |
| ORM | Spring Data JPA, Hibernate |
| Database | MySQL |
| Security | Spring Security, JWT, BCrypt |
| AI Integration | Ollama LLM |
| Frontend | HTML, CSS, JavaScript |
| Build Tool | Maven |
| Version Control | Git, GitHub |

## 📁 Project Structure

```text
CodeLoom/
│
├── HTML/
├── CSS/
├── JS/
│
├── springboot-first-app/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   └── resources/
│   │   └── test/
│   ├── pom.xml
│   ├── mvnw
│   └── mvnw.cmd
│
└── README.md
```

## ⚙️ Installation and Setup

### Prerequisites
- Java 21
- MySQL
- Ollama
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/srivaishnavi2028/CodeLoom.git
cd CodeLoom
```

### 2. Configure MySQL

Create the database:

```sql
CREATE DATABASE elearning;
```

Configure your database username and password in:

`springboot-first-app/src/main/resources/application.properties`

### 3. Start Ollama

Install Ollama and download a compatible language model.

```bash
ollama pull llama3
```

Start the Ollama service and ensure the model name matches the one configured in the application.

### 4. Run the Spring Boot Backend

```bash
cd springboot-first-app
./mvnw spring-boot:run
```

The application uses port `8052` in the current local configuration.

### 5. Run the Frontend

Open `HTML/index.html` using VS Code Live Server or another local web server.

Ensure the frontend API URLs point to the running Spring Boot backend.

## 🎯 Learning Outcomes

- Building RESTful APIs using Spring Boot.
- Implementing authentication and authorization using Spring Security and JWT.
- Managing relational data using MySQL and Spring Data JPA.
- Integrating locally hosted Large Language Models into backend applications.
- Connecting frontend applications with backend REST APIs.
- Developing modular full-stack applications.

## 👩‍💻 Author

**Sri Vaishnavi**

B.Tech – Computer Science and Engineering (Data Science)

GitHub: [srivaishnavi2028](https://github.com/srivaishnavi2028)

---

**CodeLoom – Making Learning Interactive and Accessible.**