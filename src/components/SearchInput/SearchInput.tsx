import React, { useEffect, useState } from "react";
import LiveSearch from "../LiveSearch/LiveSearch";
import useSWR from "swr";
import { fetcher } from "@/utils/api";
import router from "next/router";

const SearchInput: React.FC = () => {
  const [results, setResults] = useState<{ id: string; title: string }[]>();
  const [selectedProfile, setSelectedProfile] = useState<{
    id: string;
    title: string;
    audiobook: any;
  }>();

  const { data: bookData } = useSWR(
    "http://localhost:8080/api/v1/audio-book",
    fetcher
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    if (!query.trim()) return setResults([]);

    const filteredValue = bookData?.data?.results?.filter(
      (book: { title: string; author: string }) => {
        const lowercaseTitle = book.title.toLowerCase();

        // Check if author is a string before using toLowerCase()
        const lowercaseAuthor =
          typeof book.author === "string" ? book.author.toLowerCase() : "";

        return (
          lowercaseTitle.startsWith(query) || lowercaseAuthor.includes(query)
        );
      }
    );
    setResults(filteredValue);
  };

  const handleSelectAudiobook = (selectedAudiobook: {
    id: string;
    title: string;
  }) => {
    const audiobook = bookData?.data?.results?.find(
      (book: { id: string }) => book.id === selectedAudiobook.id
    );
    setSelectedProfile({ ...selectedAudiobook, audiobook }); // Lưu các audiobook được chọn vào selectedProfile
    router.push(`/audiobook/${selectedAudiobook.id}`);
  };

  return (
    <LiveSearch
      results={results}
      value={selectedProfile?.audiobook?.title}
      renderItem={(item) => <p>{item.title}</p>}
      onChange={handleChange}
      onSelect={handleSelectAudiobook}
    />
  );
};

export default SearchInput;
