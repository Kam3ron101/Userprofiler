import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import image from './personaltrainer.jpg';



import { Link } from 'react-router-dom';

interface UserProfile {
  Position: string;
  age: number;
  weight: number;
  height: number;

 
    
}

  interface FitnessGoals{

  Monday: string;
  Tuesday: string;
  Wednesday: string;
  Thursday: string;
  Friday: string;
  Saturday: string;
  Sunday: string;


  }



  interface SocialMedia {
    facebook?: string;
    twitter?: string;
    instagram?: string;
  }


const userProfile: UserProfile = {
  Position: 'Trainer',
  age: 30,
  weight: 75,
  height: 180,
  
};


const FinessGaols: FitnessGoals={

Monday: 'Push-ups: 3 sets of 10-12 reps Dumbbell Chest Press: 3 sets of 8-10 reps Incline Dumbbell Press: 3 sets of 8-10 reps Cable Flyes: 3 sets of 10-12 reps  ',
Tuesday: 'Squats: 3 sets of 8-10 reps Deadlifts: 3 sets of 8-10 reps Lunges: 3 sets of 10-12 reps (each leg) Leg Press: 3 sets of 8-10 repsCalf Raises: 3 sets of 12-15 reps',
Wednesday: 'Rest Day',
Thursday: 'Push-ups: 3 sets of 10-12 reps Dumbbell Chest Press: 3 sets of 8-10 reps Incline Dumbbell Press: 3 sets of 8-10 reps Cable Flyes: 3 sets of 10-12 reps', 
Friday: 'Pull-ups or Assisted Pull-ups: 3 sets of 8-10 reps Seated Cable Rows: 3 sets of 8-10 reps Dumbbell Rows: 3 sets of 8-10 reps Lat Pulldowns: 3 sets of 8-10 reps',
Saturday: 'Overhead Press: 3 sets of 8-10 reps Dumbbell Lateral Raises: 3 sets of 10-12 reps Front Raises: 3 sets of 10-12 reps Barbell Squats: 3 sets of 8-10 reps' ,
Sunday: "Rest day"
};




 const  socialMedia: SocialMedia= {
  facebook: 'johndoe',
  twitter: 'johndoe',
  instagram: 'johndoe',

 };

 export const NavBar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};




const App: React.FC = () => {
  return (
    <div className="User_info">
      <div className="flip-box-inner">
      <div className="flip-box-front">
        <h1>John Doe</h1>
        <img src={image} alt="personaltrainer" className="my-image" style={{ width: '250px', height: '200px', marginLeft: '20px' }} />

        <div>
          <strong>Position:</strong> {userProfile.Position}
        </div>
        <div>
          <strong>Age:</strong> {userProfile.age}
        </div>
        <div>
          <strong>Weight:</strong> {userProfile.weight} kg
        </div>
        <div>
          <strong>Height:</strong> {userProfile.height} cm
        </div>

        <div className="social-media-icons">
          {socialMedia.facebook && (
            <a href={`https://www.facebook.com/${socialMedia.facebook}`}>
              <FontAwesomeIcon icon={faFacebook} size="4x" />
            </a>
          )}
          {socialMedia.twitter && (
            <a href={`https://www.twitter.com/${socialMedia.twitter}`}>
              <FontAwesomeIcon icon={faTwitter} size="4x" />
            </a>
          )}
          {socialMedia.instagram && (
            <a href={`https://www.instagram.com/${socialMedia.instagram}`}>
              <FontAwesomeIcon icon={faInstagram} size="4x" />
            </a>
          )}
        </div>


        </div>
        <div className="flip-box-back" >
          <div className='FitnessGoals'>
        <h1>Fitness Goals</h1>
        <div>

          <strong>Monday: </strong> {FinessGaols.Monday}
        </div>
        <div>
          <strong>Tuesday: </strong> {FinessGaols.Tuesday}
        </div>
        <div>
          <strong>Wednesday: </strong> {FinessGaols.Wednesday}
        </div>
        <div>
          <strong>Thursday: </strong> {FinessGaols.Thursday}
        </div>
        <div>
          <strong>Friday: </strong> {FinessGaols.Friday}
        </div>
        <div>
          <strong>Saturday: </strong> {FinessGaols.Saturday}
        </div>
        <div>
          <strong>Sunday: </strong> {FinessGaols.Sunday}
        </div>

        </div>
        <div className="social-media-icons">
          {socialMedia.facebook && (
            <a href={`https://www.facebook.com/${socialMedia.facebook}`}>
              <FontAwesomeIcon icon={faFacebook} size="4x" />
            </a>
          )}
          {socialMedia.twitter && (
            <a href={`https://www.twitter.com/${socialMedia.twitter}`}>
              <FontAwesomeIcon icon={faTwitter} size="4x" />
            </a>
          )}
          {socialMedia.instagram && (
            <a href={`https://www.instagram.com/${socialMedia.instagram}`}>
              <FontAwesomeIcon icon={faInstagram} size="4x" />
            </a>
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default App;


