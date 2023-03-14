const Header = (props) => {
  return (
    <h1>{props.title}</h1>
  );
}

const Content = (props) => {
  return (
      <p>
        Part {props.num}: {props.part}. Number od exercises are {props.exercises}
      </p>
  );
}

const Total = (props) => {
  return (
      <p>Total number of exercises are {props.total}</p>
  );
}

const App = () => {
  const course = "Half Stack application development",
        part1 = "Fundamentals of React",
        exercises1 = 10,
        part2 = "Using props to pass data",
        exercises2 = 7,
        part3 = "State of a component",
        exercises3 = 14;
return (
  <div>
    <Header title={course} />
    <Content num={1} part={part1} exercises={exercises1} />
    <Content num={2} part={part2} exercises={exercises2} />
    <Content num={3} part={part3} exercises={exercises3} />
    <Total total={exercises1+exercises2+exercises3} />
  </div>
);
}

export default App;