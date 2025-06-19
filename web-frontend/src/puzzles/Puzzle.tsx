import './Puzzle.css';

export interface IPuzzleProps {
  name: string;
  image: string;
  pieceCount?: number;
  brand?: string;
}

export function Puzzle ({ name, image, pieceCount, brand }: IPuzzleProps) {
  return (
    <div className="puzzle-container">
      <img src={image} alt={`Photo of ${name}`} className="puzzle-image" />
      <div>
        <h2>{name}</h2>
        <p className="puzzle-details">
          {[
            pieceCount ? `${pieceCount}pc` : null,
            brand || null,
          ].filter(i => !!i).join(' • ')}
        </p>
      </div>
    </div>
  );
}
