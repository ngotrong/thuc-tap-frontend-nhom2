import React from 'react';

const BookGenres = () => {
  const genres = ['Sách nói nuôi dậy con', 'Sách nói kỹ năng sống', 'Sách nói Tâm linh - Tôn giáo', 'Tất cả thể loại'];

  return (
    <div>
      {genres.map((genre, index) => (
        <div key={index} className='hover:text-red-300 cursor-pointer pb-1'>
          {genre}
        </div>
      ))}
    </div>
  );
};

export default BookGenres;
