import { log } from '@showcase/logger';

import AboutContent from '../components/AboutUs';

export default function About() {
  log('Hey! This is About Us.');
  return <AboutContent />;
}
