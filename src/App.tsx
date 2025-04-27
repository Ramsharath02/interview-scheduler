import React from 'react';
import { Calendar } from 'lucide-react';
import Layout from './components/Layout';
import SchedulerContainer from './components/SchedulerContainer';

function App() {
  return (
    <Layout>
      <SchedulerContainer />
    </Layout>
  );
}

export default App;