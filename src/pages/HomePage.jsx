import React, { useState, useEffect } from 'react';

export const HomePage = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/new-arrival')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setIsLoading(false);
      })
      .catch(error => {
        setError('Error fetching data.');
        console.log(error)
        setIsLoading(false);
      });
  }, []);

  return (
    <main className='mb-auto h-screen'>
      <div className='flex flex-col items-center justify-between p-5 font-medium'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum iste obcaecati possimus in? Nihil quas fuga tempore illo ducimus aperiam pariatur officia, ex, sequi dolorem at quibusdam odit nulla? Esse.
      </div>
    </main>
  );
};
