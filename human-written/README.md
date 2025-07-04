# Student Grading System API

A RESTful backend API for managing student grades, courses, teachers, and enrollments. Built with Node.js, Express, and MongoDB.

## Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/TysonPWilliams/ISK1002-Article-Assignment

   cd ISK1002-Article-Assignment/human-written
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL=mongodb://localhost:27017/student-grading-system
   PORT=3000
   ```

4. **Seed the database**
   ```bash
   npm run seed
   ```

5. **Start the server**
   ```bash
   # Development mode with auto-restart
   npm run dev
   
   # Production mode
   node index.js
   ```

The API will be available at `http://localhost:3000`

## API Endpoints

### Students

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/student` | Get all students |
| GET | `/student/:id` | Get student by ID |
| POST | `/student` | Create new student |
| PUT | `/student/:id` | Update student |
| DELETE | `/student/:id` | Delete student |

**Student Schema:**
```json
{
  "firstName": "string (required)",
  "lastName": "string (required)",
  "email": "string (required, unique, valid email)",
  "dateOfBirth": "string (DD-MM-YYYY format)",
  "enrollmentDate": "string (DD-MM-YYYY format)"
}
```

### Teachers

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/teacher` | Get all teachers |
| GET | `/teacher/:id` | Get teacher by ID |
| POST | `/teacher` | Create new teacher |
| PUT | `/teacher/:id` | Update teacher |
| DELETE | `/teacher/:id` | Delete teacher |

**Teacher Schema:**
```json
{
  "firstName": "string (required)",
  "lastName": "string (required)",
  "email": "string (required, unique, valid email)",
  "department": "string (required)"
}
```

### Courses

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/course` | Get all courses (with teacher info) |
| GET | `/course/:id` | Get course by ID (with teacher info) |
| POST | `/course` | Create new course |
| PUT | `/course/:id` | Update course |
| DELETE | `/course/:id` | Delete course |

**Course Schema:**
```json
{
  "courseName": "string (required)",
  "courseCode": "string (required)",
  "teacherId": "ObjectId (references Teacher)"
}
```

### Enrollments

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/enrollment` | Get all enrollments |
| GET | `/enrollment/:id` | Get enrollment by ID (with student & course info) |
| POST | `/enrollment` | Create new enrollment |
| PUT | `/enrollment/:id` | Update enrollment |
| DELETE | `/enrollment/:id` | Delete enrollment |

**Enrollment Schema:**
```json
{
  "studentId": "ObjectId (required, references Student)",
  "courseId": "ObjectId (required, references Course)",
  "enrollmentDate": "string (DD-MM-YYYY format)",
  "status": "string (active|completed|dropped, default: active)"
}
```

### Grades

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/grade` | Get all grades |
| GET | `/grade/:id` | Get grade by ID (with full enrollment details) |
| POST | `/grade` | Create new grade |
| PUT | `/grade/:id` | Update grade |
| DELETE | `/grade/:id` | Delete grade |

**Grade Schema:**
```json
{
  "enrollmentId": "ObjectId (required, references Enrollment)",
  "gradeValue": "string (A|B|C|D|E|F)",
  "gradeDate": "string (DD-MM-YYYY format)"
}
```

## Usage Examples

### Using Bruno (Recommended API Client)

I recommend using [Bruno](https://www.usebruno.com/) - a modern, fast API client that's perfect for testing REST APIs. It's free, open-source, and has a great UI.

#### Creating a Student
**Method:** POST  
**URL:** `http://localhost:3000/student`  
**Headers:** `Content-Type: application/json`  
**Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "dateOfBirth": "15-03-2000",
  "enrollmentDate": "01-09-2024"
}
```

#### Getting All Courses with Teacher Info
**Method:** GET  
**URL:** `http://localhost:3000/course`  
**Headers:** None required

#### Creating a Grade
**Method:** POST  
**URL:** `http://localhost:3000/grade`  
**Headers:** `Content-Type: application/json`  
**Body:**
```json
{
  "enrollmentId": "enrollment_object_id_here",
  "gradeValue": "A",
  "gradeDate": "15-12-2024"
}
```

### Alternative API Clients

If you prefer other tools:
- **Postman** - Popular choice with great features
- **Insomnia** - Clean interface, good for REST APIs
- **Thunder Client** - VS Code extension
- **Hoppscotch** - Web-based API client

### Quick Test with curl (if needed)
```bash
# Test if server is running
curl http://localhost:3000/student
```

## Development

### Available Scripts
- `npm run dev` - Start development server with auto-restart
- `npm run seed` - Populate database with sample data
- `npm test` - Run tests (not implemented yet)

### Project Structure
```
human-written/
├── index.js              # Main server file
├── db.js                 # Database connection
├── seed.js               # Database seeding
├── models/               # Mongoose schemas
│   ├── student.js
│   ├── teacher.js
│   ├── course.js
│   ├── enrollment.js
│   └── grade.js
├── routes/               # API routes
│   ├── student_routes.js
│   ├── teacher_routes.js
│   ├── course_routes.js
│   ├── enrollment_routes.js
│   └── grade_routes.js
└── package.json
```

## Security Features

- **Helmet.js** - Security headers middleware
- **CORS** - Cross-origin resource sharing enabled
- **Input Validation** - Comprehensive schema validation with regex patterns
- **Error Handling** - Centralized error handling with proper status codes

## Data Validation

The API includes comprehensive validation:

- **Email Format**: Validates email addresses using regex
- **Date Format**: All dates must be in DD-MM-YYYY format
- **Grade Values**: Restricted to A, B, C, D, E, F
- **Enrollment Status**: Must be active, completed, or dropped
- **Required Fields**: Proper validation for all required fields

## Error Handling

The API returns consistent error responses:

```json
{
  "error": "Error message here"
}
```

Common HTTP status codes:
- `200` - Success
- `201` - Created
- `204` - No Content (for deletions)
- `400` - Bad Request
- `404` - Not Found
- `500` - Internal Server Error

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

##  License

MIT License - feel free to use this project for educational purposes.

## Troubleshooting

**Database Connection Issues:**
- Ensure MongoDB is running
- Check your DATABASE_URL in .env file
- Verify network connectivity

**Port Already in Use:**
- Change the PORT in your .env file
- Or kill the process using the current port

**Validation Errors:**
- Check that all required fields are provided
- Ensure date formats are DD-MM-YYYY
- Verify email format is valid

---

Built by TysonPWilliams 
