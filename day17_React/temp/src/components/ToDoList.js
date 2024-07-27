import React, { useState, useEffect } from 'react';

const ToDoList = () => {
  const [courses, setCourses] = useState(() => {
    const savedCourses = localStorage.getItem('courses');
    return savedCourses ? JSON.parse(savedCourses) : [];
  });
  const [courseName, setCourseName] = useState('');

  useEffect(() => {
    localStorage.setItem('courses', JSON.stringify(courses));
  }, [courses]);

  const addCourse = () => {
    if (courseName.trim() !== '') {
      setCourses([courseName, ...courses]);
      setCourseName('');
    }
  };

  const removeCourse = (index) => {
    setCourses(courses.filter((_, i) => i !== index));
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Course To-Do List</h2>
      <div className="row justify-content-center mb-4">
        <div className="col-md-8">
          <div className="input-group input-group-lg">
            <input 
              type="text" 
              value={courseName} 
              onChange={(e) => setCourseName(e.target.value)} 
              placeholder="Enter Course Name" 
              className="form-control form-control-lg"
            />
            <div className="input-group-append">
              <button onClick={addCourse} className="btn btn-primary btn-lg px-4">Add</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8">
          {courses.map((course, index) => (
            <div key={index} className="input-group mb-3">
              <input 
                type="text" 
                value={course} 
                readOnly 
                className="form-control"
              />
              <div className="input-group-append">
                <button onClick={() => removeCourse(index)} className="btn btn-outline-danger">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToDoList;