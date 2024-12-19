import React, { createContext, FC, PropsWithChildren, useState } from "react";

interface InterestsContextProps {
  sports: string[];
  setSports: React.Dispatch<React.SetStateAction<string[]>>;
  music: string[];
  setMusic: React.Dispatch<React.SetStateAction<string[]>>;
  food: string[];
  setFood: React.Dispatch<React.SetStateAction<string[]>>;
  movies: string[];
  setMovies: React.Dispatch<React.SetStateAction<string[]>>;
  books: string[];
  setBooks: React.Dispatch<React.SetStateAction<string[]>>;
  travel: string[];
  setTravel: React.Dispatch<React.SetStateAction<string[]>>;
}

export const InterestsContext = createContext({} as InterestsContextProps);

const InterestsContextProvider: FC<PropsWithChildren> = ({ children }) => {
    
  const [sports, setSports] = useState<string[]>([]);

  const [music, setMusic] = useState<string[]>([]);

  const [food, setFood] = useState<string[]>([]);

  const [movies, setMovies] = useState<string[]>([]);

  const [books, setBooks] = useState<string[]>([]);

  const [travel, setTravel] = useState<string[]>([]);

  const value: InterestsContextProps = {
    sports,
    setSports,
    music,
    setMusic,
    food,
    setFood,
    books,
    movies,
    setBooks,
    setMovies,
    setTravel,
    travel,
  };

  return <InterestsContext.Provider children={children} value={value} />;
};

export default InterestsContextProvider;
