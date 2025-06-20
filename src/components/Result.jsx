function Result({ data }) {
  if (!data) return null;

  const { word, phonetics, meanings } = data;
  // Find the first phonetic entry with a valid audio URL
  const audioUrl = phonetics.find((p) => p.audio)?.audio;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-4xl font-bold">{word}</h2>
          <p className="text-purple-500">{phonetics[0]?.text}</p>
        </div>

        {audioUrl ? (
          <button
            onClick={() => new Audio(audioUrl).play()}
            className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center text-2xl shadow-md hover:bg-purple-600 transition-colors duration-300"
          >
            ▶️
          </button>
        ) : (
          <p className="text-gray-400 text-sm">No Audio Available</p>
        )}
      </div>

      {meanings.map((meaning, idx) => (
        <div key={idx} className="space-y-2 border-t pt-4">
          <p className="italic text-lg capitalize">{meaning.partOfSpeech}</p>
          <ul className="list-disc list-inside space-y-1">
            {meaning.definitions.map((def, i) => (
              <li key={i}>{def.definition}</li>
            ))}
          </ul>

          {meaning.synonyms.length > 0 && (
            <div className="mt-4">
              <span className="text-purple-500 font-semibold">Synonyms:</span>{" "}
              {meaning.synonyms.join(", ")}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Result;
