# AI-Generated vs Human-Written Code: A Comprehensive Comparison

## Executive Summary

This document provides a detailed comparison between two implementations of a student grading system backend: one generated entirely by AI (Cursor) and one written manually by a student developer. The analysis evaluates both projects against the High Distinction (HD) rubric criteria, focusing on code quality, clarity, maintainability, and overall project structure.

## Project Overview

Both projects implement a RESTful API for a student grading system with the following core entities:
- Students
- Teachers  
- Courses
- Enrollments
- Grades

**AI-Generated Project**: Located in `/ai-generated/`
**Human-Written Project**: Located in `/human-written/`

---

## Detailed Analysis by HD Criteria

### 1. Code Quality Assessment

#### **Human-Written Project: A+ (95%)**

**Strengths:**
- **Modern ES6+ Syntax**: Uses ES modules (`import/export`) consistently throughout
- **Comprehensive Validation**: Implements detailed schema validation with regex patterns for email and date formats
- **Security Implementation**: Includes Helmet.js for security headers
- **Error Handling**: Centralized error handling middleware with proper status codes
- **Database Architecture**: Clean separation with dedicated `db.js` module
- **Consistent Naming**: Clear, descriptive variable names (`bodyData`, `studentId`)

**Code Quality Examples:**
```javascript
// Human-written: Comprehensive validation
email: {
    type: String,
    required: true,
    unique: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email address']
}

// Human-written: Proper error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    const statusCode = err.statusCode || 500;
    const message = err.message || "Something went wrong!";
    res.status(statusCode).send(message);
});
```

#### **AI-Generated Project: B- (75%)**

**Strengths:**
- **Functional Implementation**: All CRUD operations work correctly
- **Consistent Structure**: Follows Express.js conventions
- **Basic Error Handling**: Includes try-catch blocks

**Weaknesses:**
- **Outdated Syntax**: Uses CommonJS (`require/module.exports`) instead of modern ES modules
- **Minimal Validation**: Basic schema definitions without comprehensive validation
- **No Security Measures**: Missing security middleware
- **Inconsistent Error Responses**: Mix of error formats
- **No Centralized Error Handling**: Each route handles errors individually

**Code Quality Examples:**
```javascript
// AI-generated: Basic validation
email: { type: String, required: true, unique: true }

// AI-generated: Inconsistent error handling
res.status(500).json({ error: err.message });
// vs
res.status(400).json({ error: err.message });
```

### 2. Project Structure and Organization

#### **Human-Written Project: A (90%)**

**Strengths:**
- **Modular Architecture**: Clean separation of concerns with dedicated modules
- **Consistent File Naming**: Descriptive names with underscores (`student_routes.js`)
- **Development Scripts**: Includes `dev` and `seed` scripts in package.json
- **Environment Configuration**: Proper use of environment variables
- **Git Integration**: Includes `.gitignore` file

#### **AI-Generated Project: C+ (70%)**

**Strengths:**
- **Standard Express Structure**: Follows conventional Express.js patterns
- **Clear Route Organization**: Separate route files for each entity

**Weaknesses:**
- **Missing Development Tools**: No development scripts or utilities
- **No Git Configuration**: Missing `.gitignore` and version control setup
- **Inconsistent Naming**: Mix of naming conventions

### 3. Documentation and Readability

#### **Human-Written Project: A+ (95%)**

**Strengths:**
- **Clear Variable Names**: Self-documenting code with descriptive names
- **Consistent Formatting**: Proper indentation and spacing
- **Logical Flow**: Easy to follow code progression
- **Comprehensive Comments**: Strategic commenting where needed
- **Exceptional README**: Comprehensive, well-structured documentation with:
  - Detailed setup instructions with step-by-step guidance
  - Complete API endpoint documentation with schema examples
  - Usage examples with multiple API client recommendations
  - Development scripts and project structure explanation
  - Security features documentation
  - Hardware and software requirements
  - Data validation and error handling documentation
  - Troubleshooting section
  - Professional formatting with proper markdown structure

**Documentation Highlights:**
- **User-Friendly Setup**: Clear prerequisites and installation steps
- **API Documentation**: Complete endpoint tables with schema definitions
- **Practical Examples**: Real-world usage examples with Bruno API client recommendation
- **Developer Experience**: Development scripts, project structure, and troubleshooting
- **Comprehensive Coverage**: Security, validation, error handling, and deployment considerations

#### **AI-Generated Project: B- (75%)**

**Strengths:**
- **Basic Comments**: Some route-level comments
- **Standard Patterns**: Follows common Express.js patterns
- **Functional README**: Includes basic setup instructions and API documentation
- **Clear Structure**: Well-organized documentation sections

**Weaknesses:**
- **Minimal Inline Documentation**: Limited code comments
- **Generic Comments**: Comments don't add significant value
- **Basic README**: While functional, lacks depth and user experience considerations
- **Missing Advanced Features**: No hardware requirements, limited troubleshooting
- **Less User-Friendly**: Fewer practical examples and alternative options

### 4. Data Validation and Security

#### **Human-Written Project: A (92%)**

**Security Features:**
- **Helmet.js Integration**: Security headers middleware
- **Input Validation**: Comprehensive regex validation for emails and dates
- **Enum Validation**: Grade values restricted to valid options
- **Proper Error Messages**: User-friendly validation messages

```javascript
// Human-written: Comprehensive validation
dateOfBirth: {
    type: String,
    required: true,
    match: [
        /^\d{2}-\d{2}-\d{4}$/,
        'Date of birth must be in DD-MM-YYYY format'
    ]
}
```

#### **AI-Generated Project: D+ (55%)**

**Security Issues:**
- **No Security Middleware**: Missing Helmet.js or similar security measures
- **Basic Validation**: Minimal input validation
- **No Input Sanitization**: Potential for injection attacks
- **Generic Error Messages**: Not user-friendly

```javascript
// AI-generated: Minimal validation
grade: { type: String, required: true } // No enum restrictions
```

### 5. Maintainability and Scalability

#### **Human-Written Project: A- (87%)**

**Maintainability Features:**
- **Modular Design**: Easy to extend and modify
- **Consistent Patterns**: Predictable code structure
- **Clear Dependencies**: Well-defined module relationships
- **Environment Configuration**: Easy deployment configuration

#### **AI-Generated Project: C (65%)**

**Maintainability Issues:**
- **Tight Coupling**: Less modular structure
- **Inconsistent Patterns**: Mixed coding styles
- **Hard-coded Values**: Limited configuration options
- **No Development Tools**: Difficult to maintain and debug

### 6. Database Design and Relationships

#### **Human-Written Project: A- (85%)**

**Database Strengths:**
- **Proper Relationships**: Well-defined ObjectId references
- **Validation Constraints**: Comprehensive field validation
- **Data Integrity**: Proper required fields and unique constraints
- **Seed Data**: Realistic test data with proper relationships

#### **AI-Generated Project: B- (70%)**

**Database Issues:**
- **Basic Schema Design**: Minimal validation and constraints
- **Inconsistent Relationships**: Some missing or unclear references
- **Generic Data Types**: Limited data type specificity

### 7. API Design and Consistency

#### **Human-Written Project: A- (88%)**

**API Strengths:**
- **Consistent Response Format**: Uniform response structure
- **Proper HTTP Status Codes**: Correct status code usage
- **Clear Route Structure**: Descriptive endpoint paths
- **Error Handling**: Consistent error response format

#### **AI-Generated Project: C+ (72%)**

**API Issues:**
- **Inconsistent Responses**: Mixed response formats
- **Basic Route Structure**: Standard but not descriptive
- **Inconsistent Error Handling**: Different error formats across routes

---

## Overall Assessment

### Human-Written Project: **A (92%) - High Distinction Level**

**Strengths:**
- Modern JavaScript practices with ES6+ syntax
- Comprehensive security implementation
- Excellent data validation and error handling
- Clean, maintainable code structure
- Professional development practices
- **Exceptional documentation with comprehensive README**

**Areas for Improvement:**
- Could benefit from unit tests
- Some advanced features like API rate limiting could be added

### AI-Generated Project: **B- (72%) - Pass Level**

**Strengths:**
- Functional implementation
- Follows basic Express.js conventions
- All CRUD operations work correctly
- **Functional README with basic documentation**

**Critical Issues:**
- Security vulnerabilities
- Outdated coding practices
- Poor maintainability
- Limited validation and error handling
- **Documentation lacks depth and user experience considerations**

---

## Key Findings and Recommendations

### 1. **Security Gap**
The AI-generated code lacks essential security measures, making it unsuitable for production use without significant modifications.

### 2. **Code Quality Disparity**
The human-written code demonstrates significantly better practices in validation, error handling, and modern JavaScript usage.

### 3. **Maintainability Concerns**
AI-generated code would be difficult to maintain and extend in a team environment.

### 4. **Documentation Excellence Gap**
The human-written project demonstrates exceptional documentation quality with comprehensive README, user-friendly setup instructions, and practical examples, while the AI-generated project provides only basic functional documentation.

### 5. **Development Experience**
The human-written project provides a much better developer experience with proper tooling, scripts, and comprehensive documentation that guides users through setup, usage, and troubleshooting.

---

## Conclusion

This comparison demonstrates that while AI tools can generate functional code quickly, they often produce solutions that lack the depth, security, maintainability, and comprehensive documentation required for professional software development. The human-written project shows superior understanding of modern development practices, security considerations, code quality standards, and user experience design.

**Recommendation**: AI tools should be used as assistants to accelerate development, but human oversight and understanding remain essential for producing production-ready, maintainable code with excellent documentation. The human-written project exemplifies the level of quality, attention to detail, and user-centric documentation required for professional software development.

---

## References

1. GitClear's "Coding on Copilot" Report (2024) - Analysis of AI-assisted development impact on code quality
2. Business Insider (Barr, 2025) - AI integration in development workflows
3. Davis & Rajamanickam (2022) - Ethical implications of AI-generated code
4. BytePlus Editorial Team (2025) - Bias and fairness in AI tools
5. Sanj.dev (2025) - Ethical guidelines for AI in development 