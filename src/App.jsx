import { useEffect, useState } from 'react';
import api from './services/api';
import { PokemonCard } from './components/PokemonCard';
import './App.css';

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      setError(null);

      const listResponse = await api.get('/pokemon?limit=135&offset=251');
      const detailsPromises = listResponse.data.results.map((item) =>
        api.get(`/pokemon/${item.name}`)
      );

      const detailsResponses = await Promise.all(detailsPromises);
      setPokemons(detailsResponses.map((res) => res.data));
    } catch (err) {
      setError('Não foi possível carregar os Pokémons. Tente novamente...');
      console.error('Erro na requisição:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Pokemon React: Hoenn</h1>
        <p>Pokedex da 3ª Região consumindo a PokéAPI com Axios</p>
      </header>

      <main>
        {loading && (
          <div className="feedback-box">
            <span className="spinner"></span>
            <p>Carregando dados...</p>
          </div>
        )}

        {error && !loading && (
          <div className="feedback-box error">
            <p>{error}</p>
            <button onClick={fetchPokemons} className="retry-button">
              Tentar novamente
            </button>
          </div>
        )}

        {!loading && !error && (
          <section className="pokemon-grid">
            {pokemons.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
          </section>
        )}
      </main>
    </div>
  );
}