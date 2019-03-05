import React, { Component } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import DesktopView from './components/DesktopView';
import Card from './components/Card';


class App extends Component {
  render() {
    return (
      <div>
        {/* Header which includes modal & logout button */}
        <Header />
        {/* Container which includes Applied, Responded, Offered */}
        <Navigation />
        {/* Container which includes Applied, Responded, Offered */}
        <DesktopView />

        <Card />

        {/* Footer */}
      </div>
    );
  }
}

export default App;
