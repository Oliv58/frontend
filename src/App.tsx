import { useState } from 'react';
import buchApi from './api/axios';
import './App.css';
import BuchSuchForm, { type BuchSuchFormValues } from "./components/BuchSuchenForm";
import NavBar from "./components/NavBar";
import SearchResults from './components/SearchResults';

type BuchTitel = {
  id: number;
  titel: string;
  untertitel: string | null;
};

type Buch = {
  id: number;
  version: number;
  isbn: string;
  rating: number;
  art: string;
  preis: string;
  rabatt: string;
  lieferbar: boolean;
  datum: string;
  homepage: string;
  schlagwoerter: string[];
  titel: BuchTitel;
  erzeugt: string;
  aktualisiert: string;
};

type BuchPage = {
  size: number;
  number: number;
  totalElements: number;
  totalPages: number;
};

type BuchApiResponse = {
  content: Buch[];
  page: BuchPage;
};

export default function App() {
  const [searchResponse, setSearchResponse] = useState<BuchApiResponse | null>(null);
  const handleFormSubmit = async (data: BuchSuchFormValues) => {
    const { titel } = data;
    const response = await buchApi.get<BuchApiResponse>('',{
      params: { titel }
    });

    setSearchResponse(response.data);
    console.log(response);
  };

  return (
    <>
      <NavBar />
      <div className="App" style={{ padding: '2rem' }}>
      <BuchSuchForm onSubmit={handleFormSubmit} />
      { searchResponse ? <SearchResults results={searchResponse} /> : null }
    </div> 
    </>
  );
}
