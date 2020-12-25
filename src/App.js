import React, {useContext} from 'react';

import Layout from './views/layout';
import Header from './components/Header';

import './App.css';

import ThemeContext, {ThemeContextProvider} from './context/theme.context';

function App() {
  const {theme} = useContext(ThemeContext);
  console.log(theme)
  return (
    <ThemeContextProvider>
      <Layout>
        <Header />
      </Layout>
    </ThemeContextProvider>
  );
}

export default App;
