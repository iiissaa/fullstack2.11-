import React from 'react';

const Header = ({name}) => {
  return <h1>{name}</h1>;
}

const Part = ({part}) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
}

const Content = ({parts}) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
}

const Total = ({parts}) => {
  const all = parts.reduce((total, part) => total + part.exercises, 0);

  return <p>Yhteensä: {all}</p>;
}

const Course = ({courses}) => {
  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <Header name={course.name} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </div>
      ))}
    </div>
  );
}

export default Course;
