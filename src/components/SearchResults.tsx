import React from 'react';

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

type SearchResultsProps = {
    results: BuchApiResponse;
};

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
    if (!results || results.content.length === 0) {
        return <div>Keine Suchergebnisse gefunden.</div>;
    }

    return (
        <div>
            <h2>Suchergebnisse</h2>
            <ul>
                {results.content.map((buch) => (
                    <li key={buch.id}>
                        <strong>{buch.titel.titel}</strong>
                        {buch.titel.untertitel && <>: {buch.titel.untertitel}</>}
                        <div>ISBN: {buch.isbn}</div>
                        <div>Preis: {buch.preis} €</div>
                        <div>Lieferbar: {buch.lieferbar ? 'Ja' : 'Nein'}</div>
                        <div>Bewertung: {buch.rating}</div>
                    </li>
                ))}
            </ul>
            <div>
                Seite {results.page.number + 1} von {results.page.totalPages}
            </div>
            <div>
                Insgesamt {results.page.totalElements} Ergebnisse
            </div>
        </div>
    );
};

export default SearchResults;