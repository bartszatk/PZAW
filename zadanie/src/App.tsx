import './App.css';

function WhichYear({year}:{year:number}) {
    return (
        <h3>Rok produkcji: {year}</h3>
    );
}

interface KsiazkaProps {
  okladka: string;
  tytul: string;
  rokWydania: number;
  liczbaStron: number;
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

function Ksiazka({ okladka, tytul, rokWydania, liczbaStron }: KsiazkaProps) {
  return (
    <div className="Ksiazka">
      <img src={okladka} alt={tytul} />
      <h2>{tytul}</h2>
      <p>Rok wydania: {rokWydania}</p>
      <p>Liczba stron: {liczbaStron}</p>
    </div>
  );
}

function Muzyka({ okladka, nazwaAlbumu, nazwaZespolu, gatunek, rokWydania, listaPiosenek }: MuzykaProps) {
  return (
    <div className="Utwor">
      <img src={okladka} alt={nazwaAlbumu} />
      <h2>{nazwaAlbumu}</h2>
      <h3>{nazwaZespolu}</h3>
      <p>Gatunek: {gatunek}</p>
      <p>Rok wydania: {rokWydania}</p>
      <h4>Lista piosenek:</h4>
      <ul>
        {listaPiosenek.map((piosenka, index) => (
          <li key={index}>
            {piosenka.tytul} ({piosenka.czasTrwania})
          </li>
        ))}
      </ul>
    </div>
  );
}



function App() {
    return (
      <div>
        <div>
                <h1>Moje filmy</h1>

                <div className="filmy">
                    <div className="film">
                        <img src="/queens_gambit.jpg" alt="" />
                        <h2>Queens gambit</h2>
                        <WhichYear year={2014} />
                    </div>

                    <div className="film">
                        <img src="/dzien_swira.jpg" alt="" />
                        <h2>Dzień Świra</h2>
                        <WhichYear year={2020} />
                    </div>

                    <div className="film">
                        <img src="/avengers_endgame.jpg" alt="" />
                        <h2>Avengers Endgame</h2>
                        <WhichYear year={2026} />
                    </div>
                </div>
            </div>
        <div>
        <h1>Moje książki</h1>
        <div className="Ksiazki">
          <Ksiazka 
            okladka="/notatki_z_podziemia.jpg" 
            tytul="Notatki z podziemia" 
            rokWydania={1867} 
            liczbaStron={420} 
          />
          <Ksiazka 
            okladka="/zbrodnia_i_kara.jpg" 
            tytul="Zbrodnia i kara" 
            rokWydania={1866} 
            liczbaStron={213} 
          />
          <Ksiazka 
            okladka="/czerwone_krzeslo.jpg" 
            tytul="Magiczne drzewo: Czerwone krzesło" 
            rokWydania={2000} 
            liczbaStron={676} 
          />
        </div>
      </div>
<div>
        <h1>Moja muzyka</h1>
        <div className="Muzyka">
          <Muzyka 
            okladka="/epicentrum.jpg"
            nazwaAlbumu="Epicentrum"
            nazwaZespolu="Livka"
            gatunek="Pop/Alternatywa"
            rokWydania={2025}
            listaPiosenek={[
              { tytul: "z papieru", czasTrwania: "3:15" },
              { tytul: "Echo", czasTrwania: "2:50" }
            ]}
          />
          <Muzyka 
            okladka="/frascati.jpg"
            nazwaAlbumu="Frascati"
            nazwaZespolu="Taco Hemingway"
            gatunek="Hip-hop/Rap/Pop"
            rokWydania={2024}
            listaPiosenek={[
              { tytul: "Latarnie wszędzie dawno zgasły", czasTrwania: "3:40" },
              { tytul: "Gelato", czasTrwania: "3:10" }
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default App;












