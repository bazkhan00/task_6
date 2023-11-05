
const books = [
    { title: "The Grass is Always Greener", author: "Jeffrey Archer", isbn: "1-86092-049-7" },
    { title: "The Open Boat", author: "Stephen Crane ", isbn: "1-86092-025-x" },
    { title: "The Five Orange Pips", author: "Arthur Conan Doyle", isbn: "1-86092-031-4" },
    { title: "A Chance for Mr Lever", author: "Graham Greene", isbn: "	1-86092-021-7" },
    { title: "Murder!", author: "Arnold Bennett", isbn: "1-86092-012-8" },
  
  ];
  
 
  const bookList = document.getElementById("book-list");
  const addBookForm = document.getElementById("add-book-form");
  const searchInput = document.getElementById("search-input");
  
 
  function populateBookList() {
    bookList.innerHTML = '';
    books.forEach(book => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<span>${book.title} by ${book.author} (ISBN: ${book.isbn})</span>`;
      bookList.appendChild(listItem);
    });
  }
  
  
  addBookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;
  
    if (!books.some(book => book.isbn === isbn)) {
      books.push({ title, author, isbn });
      populateBookList();
    } else {
      alert("This book already exists in the library.");
    }
  
    
    addBookForm.reset();
  });
  
  
  document.getElementById("search-button").addEventListener("click", () => {
    const searchQuery = searchInput.value.toLowerCase();
    const filteredBooks = books.filter(book =>
      book.title.toLowerCase().includes(searchQuery) || book.author.toLowerCase().includes(searchQuery)
    );
    populateBookList(filteredBooks);
  });
  
  
  populateBookList();