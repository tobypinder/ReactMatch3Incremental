import React from 'react'
import { AppRegistry } from 'react-native'
import App from './components/App.js'

class Match3Incremental extends React.Component {
  render() {
    return (
      <App />
    );
  }
}

// rendering
const rootTag = document.getElementById('react-root');
AppRegistry.registerComponent('Match3Incremental', () => Match3Incremental);
AppRegistry.runApplication('Match3Incremental', { rootTag });
