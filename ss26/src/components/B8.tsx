import React, { useState, useEffect } from 'react';
const LazyLoadComp = () => {
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      
      if (loading) {
        setTimeout(() => {
          setContent(prevContent => prevContent + " Lorem ipsum dolor sit amet, consectetur adipiscing elit. ");
          setLoading(false);
        }, 1000); 
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      <p>{content}</p>
    </div>
  );
};

export default LazyLoadComp;