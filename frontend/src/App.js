import React from 'react';
import Navbar from './components/Navbar';
import FeedbackForm from './components/FeedbackForm';
import FeedbackDashboard from './components/FeedbackDashboard';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <section id="feedback">
          <FeedbackForm />
        </section>
        <section id="dashboard">
          <FeedbackDashboard />
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
