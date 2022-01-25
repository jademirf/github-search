import React from 'react';

const Home = ( {children} ) => {
  return (
    <section>
      <header>Page title</header>
      {children}
    </section>
  );
};

export default Home