import React from 'react';
import './App.css';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Login from '../Login/Login.js';
import Notification from '../Notifications/Notifications.js';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList.js';

class App extends React.Component {
  static defaultProps = {
    isLoggedIn: true,
    logOut: () => {},
  };

  static propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      listCourses: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
      ],
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  render() {
    const { isLoggedIn } = this.props;
    const { listCourses } = this.state;

    return (
      <>
        <Notification />
        <div className="App">
          <Header />
          <main className="App-body">
            {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
          </main>
          <Footer />
        </div>
      </>
    );
  }
}

export default App;

    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="Atlas logo" />
    //     <h1>
    //       School dashboard
    //     </h1>
    //    {/* <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a> */}
    //   {/* </header> */} 
    
    // {/* <div className='App-body'>
    //   <p>Login to access the full dashboard</p>
    //   <form>
    //       <div className="form-row">
    //         <div className="form-group">
    //         <label htmlFor="email">Email:</label>
    //         <input type="email" id="email" name="email" />
    //         </div>
    //       <div className="form-group">
    //         <label htmlFor="password">Password:</label>
    //         <input type="password" id="password" name="password" />
    //       </div>
    //       <button type="button">OK</button>
    //       </div>
    //     </form>
    // </div>  */}
    // {/* <Footer /> */}
    // {/* <div className="App-footer">
    //     <p>{getFooterCopy(true)} - {getFullYear()}</p>
    //   </div> */}
    


