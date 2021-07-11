import React from "react";

import "./SignInSideNotes.css";

const SignInSideNotes = () => {
  return (
    <div className='notes-main__container'>
      <h1 className='main-notes__line'>Welcome back, Hackolyte.</h1>
      <p className='main-notes__paragraph'>
        With your free Hacker Noon account you have access to:
      </p>
      <ul className='main-notes__lists'>
        <li className='main-notes__list'>The Tech Brief</li>
        <p className='main-notes__desc'>
          A weekly newsletter curated by you and your personal interests
        </p>

        <li className='main-notes__list'>The Story Submission Portal</li>
        <p className='main-notes__desc'>
          The best place for technologists to publish (with free, professional,
          editorial support)
        </p>
        <li className='main-notes__list'>The Brand-as-Author Program</li>
        <p className='main-notes__desc'>
          Get one free credit to publish branded content when you complete your
          profile for business
        </p>
      </ul>
    </div>
  );
};

export default SignInSideNotes;
