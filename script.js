let issuedBooks = [];

      function issueNewBook() {
        const bookName = document.getElementById("book-Name").value;
        const issuedTo = document.getElementById("to-Issue").value;
        const issuedTime = new Date();
        const bookId = issuedBooks.length + 1;
        const bookStatus = "not returned"
        issuedBooks.push({
          id: bookId,
          book_name: bookName,
          issued_to: issuedTo,
          issued_time: issuedTime,
          status: bookStatus,
        });

        addNewTable();
      }

      function addNewTable() {
        const tableBody = document.getElementById("issue-book-Table");
        tableBody.innerHTML = "";


        //Adding Table data
        issuedBooks.forEach((book) => {
          const row = document.createElement("tr");
          row.innerHTML = `
					<td>${book.id}</td>
					<td>${book.book_name}</td>
					<td>${book.issued_to}</td>
					<td>${book.issued_time}</td>
					<td class="status ${book.status.replace(" ", "-")}">${book.status}</td>
				`;
          row.onclick = () => editBookStatus(book);
          tableBody.appendChild(row);
        });
      }

      // call editBookStatus function  and check book return or not
      function editBookStatus(book) {
        if (book.status === "not returned") {
          book.status = "returned";
        } else {
          book.status = "not returned";
        }
        addNewTable();
      }
