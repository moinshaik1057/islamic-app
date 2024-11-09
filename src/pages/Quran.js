import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HTMLFlipBook from 'react-pageflip';

const QuranReader = () => {

  
  const [quranPages, setQuranPages] = useState([]);

  useEffect(() => {
    const fetchQuranData = async () => {
      try {
        const response = await axios.get('https://api.alquran.cloud/v1/quran/quran-uthmani');
        const surahs = response.data.data.surahs;
        
        // Split the surah text into smaller chunks for pagination
        const pages = [];
        surahs.forEach(surah => {
          const ayahChunks = chunkAyahs(surah.ayahs, 400); // Adjust the chunk size based on content length
          ayahChunks.forEach(chunk => {
            pages.push({
              surahName: surah.englishName,
              text: chunk.join(' ')
            });
          });
        });

        setQuranPages(pages.reverse());
      } catch (error) {
        console.error("Error fetching Quran data:", error);
      }
    };

    fetchQuranData();
  }, []);

  // Function to split ayahs into smaller chunks
  const chunkAyahs = (ayahs, maxLength) => {
    const chunks = [];
    let currentChunk = [];
    let currentLength = 0;

    ayahs.forEach(ayah => {
      const ayahText = ayah.text;
      if (currentLength + ayahText.length > maxLength) {
        chunks.push(currentChunk);
        currentChunk = [];
        currentLength = 0;
      }
      currentChunk.push(ayahText);
      currentLength += ayahText.length;
    });

    if (currentChunk.length) {
      chunks.push(currentChunk);
    }
    //console.log(chunks);
    return chunks;
  };
  console.log(quranPages);
  return (
    <div className="quran-reader-container container">
    
      {quranPages.length > 0 ? (
        <HTMLFlipBook
          width={400}
          height={300}
          size="stretch"
          minWidth={300}
          maxWidth={700}
          minHeight={400}
          maxHeight={300}
          startPage={quranPages.length - 1}  // Start with the last page
        >
          {quranPages.map((page, index) => (
            <div className="page" key={index}>
              <h3>{page.surahName}</h3>
              <p className='font-scheherazade' style={{fontSize: 28}}>{page.text}</p>
              <div className="page-number position-absolute start-50" style={{ bottom: 10 }}>
                Page {quranPages.length - index }
              </div>
            </div>
          ))}
        </HTMLFlipBook>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default QuranReader;