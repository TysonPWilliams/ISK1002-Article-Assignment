# Student Grading System API

A RESTful API backend for managing student grades, courses, teachers, and enrollments. This application is built using Node.js, Express.js, and MongoDB.

## Prerequisites

Before running this application, ensure you have the following installed:

- Node.js (version 14 or higher)
- MongoDB database
- npm package manager

## Installation

1. Clone the repository to your local machine
2. Navigate to the project directory
3. Install the required dependencies by running:
   ```
   npm install
   ```
4. Create a `.env` file in the root directory with the following variables:
   ```
   MONGODB_URI=mongodb://localhost:27017/student-grading-system
   PORT=5000
   ```
5. Start the server by executing:
   ```
   node server.js
   ```

The API server will be accessible at `http://localhost:5000`

## API Endpoints

### Students

| HTTP Method | Endpoint | Description |
|-------------|----------|-------------|
| GET | `/api/students` | Retrieve all students |
| GET | `/api/students/:id` | Retrieve a specific student by ID |
| POST | `/api/students` | Create a new student record |
| PUT | `/api/students/:id` | Update an existing student record |
| DELETE | `/api/students/:id` | Remove a student record |

### Teachers

| HTTP Method | Endpoint | Description |
|-------------|----------|-------------|
| GET | `/api/teachers` | Retrieve all teachers |
| GET | `/api/teachers/:id` | Retrieve a specific teacher by ID |
| POST | `/api/teachers` | Create a new teacher record |
| PUT | `/api/teachers/:id` | Update an existing teacher record |
| DELETE | `/api/teachers/:id` | Remove a teacher record |

### Courses

| HTTP Method | Endpoint | Description |
|-------------|----------|-------------|
| GET | `/api/courses` | Retrieve all courses |
| GET | `/api/courses/:id` | Retrieve a specific course by ID |
| POST | `/api/courses` | Create a new course record |
| PUT | `/api/courses/:id` | Update an existing course record |
| DELETE | `/api/courses/:id` | Remove a course record |

### Enrollments

| HTTP Method | Endpoint | Description |
|-------------|----------|-------------|
| GET | `/api/enrollments` | Retrieve all enrollments |
| GET | `/api/enrollments/:id` | Retrieve a specific enrollment by ID |
| POST | `/api/enrollments` | Create a new enrollment record |
| PUT | `/api/enrollments/:id` | Update an existing enrollment record |
| DELETE | `/api/enrollments/:id` | Remove an enrollment record |

### Grades

| HTTP Method | Endpoint | Description |
|-------------|----------|-------------|
| GET | `/api/grades` | Retrieve all grades |
| GET | `/api/grades/:id` | Retrieve a specific grade by ID |
| POST | `/api/grades` | Create a new grade record |
| PUT | `/api/grades/:id` | Update an existing grade record |
| DELETE | `/api/grades/:id` | Remove a grade record |

## Data Models

### Student Model
```javascript
{
  firstName: String (required),
  lastName: String (required),
  email: String (required, unique),
  enrollmentDate: Date (default: current date)
}
```

### Teacher Model
```javascript
{
  firstName: String (required),
  lastName: String (required),
  email: String (required, unique)
}
```

### Course Model
```javascript
{
  name: String (required),
  code: String (required),
  description: String,
  teacher: ObjectId (reference to Teacher)
}
```

### Enrollment Model
```javascript
{
  student: ObjectId (reference to Student, required),
  course: ObjectId (reference to Course, required)
}
```

### Grade Model
```javascript
{
  enrollment: ObjectId (reference to Enrollment, required),
  grade: String (required),
  dateAssigned: Date (default: current date)
}
```

## Usage Examples

### Creating a Student
```bash
curl -X POST http://localhost:5000/api/students \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com"
  }'
```

### Retrieving All Students
```bash
curl http://localhost:5000/api/students
```

### Creating a Course
```bash
curl -X POST http://localhost:5000/api/courses \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Mathematics",
    "code": "MATH101",
    "description": "Basic Mathematics Course"
  }'
```

## Database Seeding

To populate the database with sample data, run the following command:

```bash
node seed.js
```

This will create sample records for teachers, students, courses, enrollments, and grades.

## Error Handling

The API implements standard HTTP status codes for error responses:

- 200: Success
- 201: Created
- 400: Bad Request
- 404: Not Found
- 500: Internal Server Error

Error responses follow this format:
```json
{
  "error": "Error message description"
}
```

## Dependencies

This project utilizes the following main dependencies:

- express: Web framework for Node.js
- mongoose: MongoDB object modeling tool
- cors: Cross-Origin Resource Sharing middleware
- dotenv: Environment variable management

## Project Structure

```
ai-generated/
├── server.js              # Main application entry point
├── seed.js                # Database seeding script
├── package.json           # Project dependencies and scripts
├── models/                # Mongoose model definitions
│   ├── Student.js
│   ├── Teacher.js
│   ├── Course.js
│   ├── Enrollment.js
│   └── Grade.js
└── routes/                # API route handlers
    ├── students.js
    ├── teachers.js
    ├── courses.js
    ├── enrollments.js
    └── grades.js
```

## Testing

To test the API endpoints, you can use any HTTP client such as:

- Postman
- Insomnia
- curl command line tool
- Thunder Client (VS Code extension)

## Security Considerations

This API implementation includes basic CORS configuration to handle cross-origin requests. For production deployment, additional security measures should be implemented including:

- Input validation and sanitization
- Authentication and authorization
- Rate limiting
- HTTPS enforcement
- Security headers

## Deployment

To deploy this application to a production environment:

1. Set up a MongoDB database instance
2. Configure environment variables for production
3. Set up a Node.js hosting environment
4. Deploy the application code
5. Configure reverse proxy and SSL certificates

## Support

For technical support or questions regarding this API implementation, please refer to the project documentation or create an issue in the repository.

## License

This project is licensed under the ISC License.
