import React from 'react';

const FeaturedAuthor = () => {
  const authors = ['Kim Dung', 'Robert Kiyosaki', 'Agatha Christie'];

  return (
    <div>
      {authors.map((authors, index) => (
        <div key={index} className='hover:text-red-300 cursor-pointer pb-1'>
          {authors}
        </div>
      ))}
    </div>
  );
}; 

export default FeaturedAuthor;
