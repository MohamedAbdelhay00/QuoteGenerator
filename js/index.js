var quotes = [
    {
      quote: "“Be yourself; everyone else is already taken.”",
      author: "― Oscar Wilde",
    },
    {
      quote:
        "“A friend is someone who knows all about you and still loves you.”",
      author: "― Elbert Hubbard",
    },
    {
      quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
      author: "― Albert Einstein",
    },
    {
      quote: "“So many books, so little time.”",
      author: "― Frank Zappa",
    },
    {
      quote: "“A room without books is like a body without a soul.”",
      author: "― Marcus Tullius Cicero",
    },
    {
      quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
      author: "― Bernard M. Baruch",
    },
    {
      quote: "“If you tell the truth, you don't have to remember anything.”",
      author: "― Mark Twain",
    },
    {
      quote: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
      author: "― Dr. Seuss",
    },
    {
      quote: "“You only live once, but if you do it right, once is enough.”",
      author: "― Mae West",
    },
    {
      quote: "“Be the change that you wish to see in the world.”",
      author: "― Mahatma Gandhi",
    },
  ];

  function shuffleArray(shuffled) {
    for (var i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
  }
  
  function createQuoteIterator() {
    let i = 0;
    shuffleArray(quotes);
  
    return function getNextQuote() {
      if (i >= quotes.length) {
        shuffleArray(quotes);
        i = 0;
      }
      return quotes[i++];
    };
  }

  const getNextQuote = createQuoteIterator();
  
  function generateQuote() {
    var newQuote = getNextQuote();
    document.getElementById("quote-area").innerHTML = `<p class="sub text-center text-black mb-5">${newQuote.quote}</p>
      <p class="sub text-center text-black mb-5">${newQuote.author}</p>`;
  }
  