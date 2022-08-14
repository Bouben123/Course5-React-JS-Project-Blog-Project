import React from 'react';
import HeroSection from '../../HeroSection';
import {homeObjThree} from './Data.js';

function SignUp() {
  return (
    <>
        <HeroSection {...homeObjThree} />
    </>
  );
}

export default SignUp;