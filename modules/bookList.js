// Retrieve saved book collection from localStorage, if available
const savedCollection = localStorage.getItem('bookCollection');
const bookCollection = savedCollection ? JSON.parse(savedCollection) : [];

// Function to render the book list
export default renderBookList = () => {
  const bookListElement = document.getElementById('bookListItems');
  bookListElement.innerHTML = '';

  bookCollection.forEach((book, index) => {
    const li = document.createElement('li');
    li.textContent = `${book.title} - ${book.author}`;
    li.className = 'single-book';

    // Function to remove a book from the collection
    const removeBook = (index) => {
      bookCollection.splice(index, 1);
      localStorage.setItem(
        'bookCollection',
        JSON.stringify(bookCollection),
      );
      renderBookList();
    };

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';
    removeButton.addEventListener('click', () => {
      removeBook(index);
    });

    li.appendChild(removeButton);
    bookListElement.appendChild(li);
  });
};

// Function to add a new book to the collection
export const addBook = (title, author) => {
  const newBook = { title, author };
  bookCollection.push(newBook);
  localStorage.setItem('bookCollection', JSON.stringify(bookCollection));
  renderBookList();
};

// Event handler for the form submission
export const submitBook = () => {
  document
    .getElementById('addBookForm')
    .addEventListener('submit', (event) => {
      event.preventDefault();
      const titleInput = document.getElementById('title');
      const authorInput = document.getElementById('author');
      const title = titleInput.value;
      const author = authorInput.value;

      addBook(title, author);

      // Reset form inputs
      titleInput.value = '';
      authorInput.value = '';
    });
};
