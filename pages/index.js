import React, { useState, useEffect } from 'react';
import Head from 'next/head';

// All your component code remains the same, just add Head at the top of the App component
const App = () => {
  // ... (all your existing App code)

  return (
    <>
      <Head>
        <title>קלפי העצמה</title>
        <meta name="description" content="אפליקציית קלפי העצמה והשראה" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div style={containerStyle}>
        {/* ... rest of your existing JSX */}
      </div>
    </>
  );
};

// Export the App directly
export default App;
