import factorial from './factorial';
import Comments from './Comments';

import './style.css';

function App() {
  return (
    <div>
      <p>
        <b>Factorial</b> example with recursive function: {factorial(5)}
      </p>
      <hr />
      <div>
        <p>
          <b>Render Comments</b> example with recursive component
        </p>
        <Comments />
      </div>
    </div>
  );
}

export default App;
