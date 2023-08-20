import React, { useState } from 'react';
import LiveSearch from '../LiveSearch/LiveSearch';
import useSWR from 'swr';
import { fetcher } from '@/utils/api';

const SearchInput: React.FC = () => {
  const [results, setResults] = useState<{ id: string; title: string }[]>();
  const [selectedProfile, setSelectedProfile] = useState<{
    id: string;
    title: string;
  }>();

  const { data: bookData } = useSWR(
    'http://localhost:8080/api/v1/audio-book',
    fetcher
  );

  // const { data: bookData } = useSWR(
  //   'https://373d-14-232-135-216.ngrok-free.app/api/v1/audio-book',
  //   fetcher
  // ); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    if (!query.trim()) return setResults([]);

    const filteredValue = bookData?.data?.results?.filter((book: { title: string; author: string; }) => {
      const lowercaseTitle = book.title.toLowerCase();
      
      // Check if author is a string before using toLowerCase()
      const lowercaseAuthor = typeof book.author === 'string' ? book.author.toLowerCase() : '';
  
      return lowercaseTitle.startsWith(query) || lowercaseAuthor.includes(query);
    });
    setResults(filteredValue);
  };

  return (
    <LiveSearch
      results={results}
      value={selectedProfile?.title}
      renderItem={(item) => <p>{item.title}</p>}
      onChange={handleChange}
      onSelect={(item) => setSelectedProfile(item)}
    />
  );
};

export default SearchInput;






