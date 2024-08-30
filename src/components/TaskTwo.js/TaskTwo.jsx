import React, {useState, useEffect} from 'react'
import './TaskTwo.css'


// Function to generate a random word
const generateRandomWord = () => {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const wordLength = Math.floor(Math.random() * 7) + 3; // Random word length between 3 and 9
  let word = '';
  for (let i = 0; i < wordLength; i++) {
    const randomIndex = Math.floor(Math.random() * 26);
    word = word + letters[randomIndex];
  }
 //  console.log("the random word is " + word);
  return word;
};

// Function to generate an array of unique random words
const generateWordsinArray = (numWords) => {
  const words = new Set(); //declaring a set for holding only unique values in it.
  while (words.size < numWords) {
    words.add(generateRandomWord());
  }
  const myArr = [...words]; //destructuring the set into an array. This array contains random words as it's elements
  return myArr; //returning the whole array with 12 or 24 words in it.
};

const TaskTwo = () => {
  // State to store the number of boxes (12 or 24)
  const [boxCount, setBoxCount] = useState(12);
  // State to store the random words
  const [words, setWords] = useState([]);
  // State to store the sorted words
  const [sortedWords, setSortedWords] = useState([]);
  // State to manage copy feedback
  const [copySuccess, setCopySuccessMsg] = useState('');


  // Generate words whenever boxCount changes
  useEffect(() => {
    const newWords = generateWordsinArray(boxCount); // newWords contains 12 or 24 words and not alphabetically sorted
   // console.log("new words: " + newWords);
    setWords(newWords);
    setSortedWords([]);
    setCopySuccessMsg('');
  }, [boxCount]);

  // Sort words alphabetically
  const handleSortWords = () => {
    const sorted = [...words].sort(); //sort function is used to sort the words alphabetically
    //console.log(sorted);
    setSortedWords(sorted);
    setCopySuccessMsg('');
  };

  // Copy sorted words to clipboard
  const handleCopyToClipboard = () => {
    let combinedWords = sortedWords.join('');
    //console.log("combinedWords to form a single string : ",combinedWords);
    navigator.clipboard.writeText(combinedWords) // combine the elements of array to form a single string separated by ','
      .then(() => {    // when promise is resolved
      // console.log("successfully copied to clipboard");
        setCopySuccessMsg('Words copied to clipboard!');
        alert('successfully copied to clipboard');
      })
      .catch(() => {   // when promise is rejected
        setCopySuccessMsg('Failed to copy words.');
      });
  };

  return (
    <div>
      {/* Buttons to select the number of boxes */}
      <div className="controls">
        <button onClick={() => setBoxCount(12)}>12 Boxes</button>
        <button onClick={() => setBoxCount(24)}>24 Boxes</button>
      </div>

      {/* Grid layout to display the boxes with random words */}
      <div className="grid-container">
        {words.map((word, index) => (
          <div key={index} className="grid-item">
            {word}
          </div>
        ))}
      </div>

      {/* Button to sort words and display them in another component */}
      <div className="sort-controls">
        <button onClick={handleSortWords}>Sort Words Alphabetically</button>
      </div>

      {/* Display sorted words if available */}
      {sortedWords.length > 0 && (
        <div className="sorted-words">
          <h2>Sorted Words</h2>
          <p>{sortedWords.join(', ')}</p>
          <button onClick={handleCopyToClipboard}>Copy to Clipboard</button>
          {copySuccess && <p className="copy-feedback">{copySuccess}</p>}
        </div>
      )}
    </div>
  );
};


export default TaskTwo;

  


