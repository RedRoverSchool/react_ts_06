const Header = ({title}) => <h1>{title}</h1>;

const Content = ({p1, p2, p3, e1, e2, e3}) => 
        <p>
          Part 1: {p1}. Number od exercises are {e1}<br/>
          Part 2: {p2}. Number od exercises are {e2}<br/>
          Part 3: {p3}. Number od exercises are {e3}
        </p>

const Total = ({e1, e2, e3}) => <p>Total number of exercises are {e1 + e2 + e3}</p>
  
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
           <Content p1={part1} e1={exercises1} 
                    p2={part2} e2={exercises2} 
                    p3={part3} e3={exercises3} />
            <Total e1={exercises1} e2={exercises2} e3={exercises3} />
        </div>
    );
}

export default App;