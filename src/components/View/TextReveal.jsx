export const TextReveal = ({text}) => {
  
    return (
      <h2 className="text-reveal">
        {text.split("").map((char, index) => (
          <span
            key={`${char}-${index}`}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h2>
    );
  };
  