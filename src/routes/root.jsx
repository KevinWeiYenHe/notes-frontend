import { Outlet, Link } from "react-router-dom";


export default function Root() {
    return (
      <>
      <div>
        <nav>
            <ul>
            <li>
                <Link to={`notes/1`}>Note 1</Link>
            </li>
            <li>
                <Link to={`notes/2`}>Note 2</Link>
            </li>
            <li>
                <Link to={`notes/3`}>Note 3</Link>
            </li>
            <li>
                <Link to={`notes/4`}>Note 4</Link>
            </li>
            <li>
                <Link to={`notes/5`}>Note 5</Link>
            </li>
            <li>
                <Link to={`notes/6`}>Note 6</Link>
            </li>
            <li>
                <Link to={`notes/7`}>Note 7</Link>
            </li>
            </ul>
        </nav>
        <div>
            <h1>Hello World</h1>
            <p>This is my root page</p>
        </div>
      </div>
      </>
    );
  }