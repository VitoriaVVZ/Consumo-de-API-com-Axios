import './styles.css';

export function PokemonCard({ pokemon }) {
  const image =
    pokemon.sprites?.other?.['official-artwork']?.front_default ||
    pokemon.sprites?.front_default;

  const formattedId = `#${String(pokemon.id).padStart(3, '0')}`;

  return (
    <article className="pokemon-card">
      <div className="pokemon-card-top">
        <span className="pokemon-id">{formattedId}</span>
        <div className="pokemon-types">
          {pokemon.types.map((item) => (
            <span
              key={item.type.name}
              className={`type-badge type-${item.type.name}`}
            >
              {item.type.name}
            </span>
          ))}
        </div>
      </div>

      <div className="pokemon-image-wrapper">
        <img src={image} alt={pokemon.name} loading="lazy" />
      </div>

      <h2 className="pokemon-name">{pokemon.name}</h2>

      <div className="pokemon-stats">
        <div>
          <span>Altura</span>
          <strong>{(pokemon.height / 10).toFixed(1)} m</strong>
        </div>
        <div>
          <span>Peso</span>
          <strong>{(pokemon.weight / 10).toFixed(1)} kg</strong>
        </div>
      </div>
    </article>
  );
}