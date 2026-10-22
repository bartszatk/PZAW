import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


interface WhichYearProps {
  year: number;
}

interface FilmProps {
  okladka: string;
  tytul: string;
  rokProdukcji: number;
  rating: number;
}

interface FilmData extends FilmProps {
  id: number;
}


interface KsiazkaProps {
  okladka: string;
  tytul: string;
  rokWydania: number;
  liczbaStron: number;
}

interface KsiazkaData extends KsiazkaProps {
  id: number;
}

interface UtworMuzyczny {
  tytul: string;
  czasTrwania: string;
}

interface MuzykaProps {
  okladka: string;
  nazwaAlbumu: string;
  nazwaZespolu: string;
  gatunek: string;
  rokWydania: number;
  listaPiosenek: UtworMuzyczny[];
}

interface MuzykaData extends MuzykaProps {
  id: number;
}

const filmy: FilmData[] = [
  {
    id: 1,
    okladka: "/queens_gambit.jpg",
    tytul: "Queens Gambit",
    rokProdukcji: 2020,
    rating: 9,
  },
  {
    id: 2,
    okladka: "/dzien_swira.jpg",
    tytul: "Dzień Świra",
    rokProdukcji: 2002,
    rating: 8,
  },
  {
    id: 3,
    okladka: "/avengers_endgame.jpg",
    tytul: "Avengers Endgame",
    rokProdukcji: 2019,
    rating: 10,
  },
];

const ksiazki: KsiazkaData[] = [
  {
    id: 1,
    okladka: "/notatki_z_podziemia.jpg",
    tytul: "Notatki z podziemia",
    rokWydania: 1864,
    liczbaStron: 420,
  },
  {
    id: 2,
    okladka: "/zbrodnia_i_kara.jpg",
    tytul: "Zbrodnia i kara",
    rokWydania: 1866,
    liczbaStron: 213,
  },
  {
    id: 3,
    okladka: "/czerwone_krzeslo.jpg",
    tytul: "Magiczne drzewo: Czerwone krzesło",
    rokWydania: 2009,
    liczbaStron: 676,
  },
];

const muzyka: MuzykaData[] = [
  {
    id: 1,
    okladka: "/epicentrum.jpg",
    nazwaAlbumu: "Epicentrum",
    nazwaZespolu: "Livka",
    gatunek: "Pop/Alternatywa",
    rokWydania: 2025,
    listaPiosenek: [
      { tytul: "z papieru", czasTrwania: "3:15" },
      { tytul: "Echo", czasTrwania: "2:50" },
    ],
  },
  {
    id: 2,
    okladka: "/frascati.jpg",
    nazwaAlbumu: "Frascati",
    nazwaZespolu: "Taco Hemingway",
    gatunek: "Hip-hop/Rap/Pop",
    rokWydania: 2024,
    listaPiosenek: [
      { tytul: "Latarnie wszędzie dawno zgasły", czasTrwania: "3:40" },
      { tytul: "Gelato", czasTrwania: "3:10" },
    ],
  },
];

function WhichYear({ year }: WhichYearProps) {
  return <h3>Rok produkcji: {year}</h3>;
}

function Film({ okladka, tytul, rokProdukcji, rating }: FilmProps) {
  return (
    <div className="col">
      <div className="card h-100 shadow-sm">
        <img src={okladka} className="card-img-top" alt={tytul} />
        <div className="card-body">
          <h5 className="card-title">{tytul}</h5>
          <WhichYear year={rokProdukcji} />
          <p className="card-text mb-2">Ocena: {rating}/10</p>
          {rating >= 8 && <span className="badge bg-success">Polecany</span>}
        </div>
      </div>
    </div>
  );
}


function Ksiazka({ okladka, tytul, rokWydania, liczbaStron }: KsiazkaProps) {
  return (
    <div className="col">
      <div className="card h-100 shadow-sm">
        <img src={okladka} className="card-img-top" alt={tytul} />
        <div className="card-body">
          <h5 className="card-title">{tytul}</h5>
          <p className="card-text mb-1 text-muted">Rok wydania: {rokWydania}</p>
          <p className="card-text mb-2">Liczba stron: {liczbaStron}</p>
          {rokWydania < 2000 && <span className="badge bg-secondary">Klasyka</span>}
        </div>
      </div>
    </div>
  );
}

function Muzyka({ okladka, nazwaAlbumu, nazwaZespolu, gatunek, rokWydania, listaPiosenek }: MuzykaProps) {
  return (
    <div className="col">
      <div className="card h-100 shadow-sm">
        <img src={okladka} className="card-img-top" alt={nazwaAlbumu} />
        <div className="card-body">
          <h5 className="card-title">{nazwaAlbumu}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{nazwaZespolu}</h6>
          <p className="card-text mb-1">Gatunek: {gatunek}</p>
          <p className="card-text mb-3">Rok wydania: {rokWydania}</p>
          <h6 className="text-secondary mb-2">Lista piosenek:</h6>
          {listaPiosenek.length === 0 ? (
            <div className="alert alert-warning py-2 mb-0" role="alert">
              Brak utworów
            </div>
          ) : (
            <table className="table table-striped table-hover mb-0">
              <tbody>
                {listaPiosenek.map((piosenka, index) => (
                  <tr key={index}>
                    <td>{piosenka.tytul}</td>
                    <td className="text-end">{piosenka.czasTrwania}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

function Section({ title, children }: SectionProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-4">
      <h2 
        onClick={() => setIsOpen(!isOpen)} 
        style={{ cursor: "pointer", userSelect: "none" }} 
        className="h4 mb-3 text-dark"
      >
        {isOpen ? "▾ " : "▸ "}
        {title}
      </h2>
      {isOpen && children}
    </div>
  );
}

function App() {
  const filmyPo2010 = filmy.filter((film) => film.rokProdukcji > 2010);
  const ksiazkiOdNajnowszej = [...ksiazki].sort(function(a, b) {
  return b.rokWydania - a.rokWydania;
  });
  let albumNajwiecejUtworow = muzyka[0];

  muzyka.forEach((album) => {
  if (album.listaPiosenek.length > albumNajwiecejUtworow.listaPiosenek.length) {
    albumNajwiecejUtworow = album;
  }
});
  return (
    <div className="container my-4">
      <Section title="Moje filmy">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {filmy.map((film) => (
            <Film
              key={film.id}
              okladka={film.okladka}
              tytul={film.tytul}
              rokProdukcji={film.rokProdukcji}
              rating={film.rating}
            />
          ))}
        </div>
      </Section>
      <Section title="Filmy wydane po 2010 roku">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {filmyPo2010.map((film) => (
            <Film
              key={film.id}
              okladka={film.okladka}
              tytul={film.tytul}
              rokProdukcji={film.rokProdukcji}
              rating={film.rating}
            />
          ))}
        </div>
      </Section>
        <Section title="Moje książki od A do Z">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {ksiazki.map((ksiazka) => (
            <Ksiazka
              key={ksiazka.id}
              okladka={ksiazka.okladka}
              tytul={ksiazka.tytul}
              rokWydania={ksiazka.rokWydania}
              liczbaStron={ksiazka.liczbaStron}
            />
          ))}
        </div>
        </Section>
        <Section title="Książki posortowane od najnowszej">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {ksiazkiOdNajnowszej.map((ksiazka) => (
            <Ksiazka
              key={ksiazka.id}
              okladka={ksiazka.okladka}
              tytul={ksiazka.tytul}
              rokWydania={ksiazka.rokWydania}
              liczbaStron={ksiazka.liczbaStron}
            />
          ))}
        </div>
        </Section>
        <Section title="Moja muzyka">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {muzyka.map((album) => (
            <Muzyka
              key={album.id}
              okladka={album.okladka}
              nazwaAlbumu={album.nazwaAlbumu}
              nazwaZespolu={album.nazwaZespolu}
              gatunek={album.gatunek}
              rokWydania={album.rokWydania}
              listaPiosenek={album.listaPiosenek}
            />
          ))}
        </div>
        </Section>

      
        <Section title="Album z największą liczbą utworów">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <Muzyka
            key={albumNajwiecejUtworow.id}
            okladka={albumNajwiecejUtworow.okladka}
            nazwaAlbumu={albumNajwiecejUtworow.nazwaAlbumu}
            nazwaZespolu={albumNajwiecejUtworow.nazwaZespolu}
            gatunek={albumNajwiecejUtworow.gatunek}
            rokWydania={albumNajwiecejUtworow.rokWydania}
            listaPiosenek={albumNajwiecejUtworow.listaPiosenek}
          />
        </div>
      </Section>
    </div>
    


  );
}

export default App;












