// 'DOMContentLoaded' event
const teachers = [
  {
    name: 'Brad',
    surname: 'Traversy',
    country: 'USA',
    subs: 1_900_000,
  },
  {
    name: 'Shaun',
    surname: 'Pelling',
    country: 'UK',
    subs: 1_000_000,
  },
  {
    name: 'Bucky',
    surname: 'Roberts',
    country: 'USA',
    subs: 2_650_000,
  },
  {
    name: 'Kyle',
    surname: 'Cook',
    country: 'USA',
    subs: 1_000_000,
  },
  {
    name: 'Eve',
    surname: 'Porcello',
    country: 'USA',
    subs: 750_000,
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const tbody = document.querySelector('tbody');

  function createRows() {
    teachers.forEach(teacher => {
      const row = document.createElement('tr');
      row.innerHTML = `
		<td>${teacher.name}</td>
		<td>${teacher.surname}</td>
		<td>${teacher.country}</td>
		<td>${teacher.subs}</td>
		`;
      tbody.append(row);
    });
  }

  createRows();

  function substituteRows() {
    const rows = tbody.querySelectorAll('tr');
    rows.forEach(row => {
      row.remove();
    });
    createRows();
  }

  function sortTeachersAZ() {
    teachers.sort((a, b) => {
      let prev = a.name.toLowerCase();
      let next = b.name.toLowerCase();
      return prev === next ? 0 : prev > next ? 1 : -1;
    });
    substituteRows();
  }

  function sortTeachersZA() {
    teachers.sort((a, b) => {
      let prev = a.name.toLowerCase();
      let next = b.name.toLowerCase();
      return prev === next ? 0 : prev < next ? 1 : -1;
    });
    substituteRows();
  }

  document
    .querySelector('.name-down-arrow')
    .addEventListener('click', sortTeachersAZ);

  document
    .querySelector('.name-up-arrow')
    .addEventListener('click', sortTeachersZA);

  function sortSubsAscend() {
    teachers.sort((a, b) => a.subs - b.subs);
    substituteRows();
  }

  function sortSubsDescend(e) {
    teachers.sort((a, b) => b.subs - a.subs);
    substituteRows();
    console.log(e.target.className);
    console.log(e.target);
    console.log(e);
  }

  document
    .querySelector('.subs-down-arrow')
    .addEventListener('click', sortSubsAscend);

  document
    .querySelector('.subs-up-arrow')
    .addEventListener('click', sortSubsDescend);

  // DOM

  // Once the HTML document is loaded in the browser, the browser creates an object which models this document, and this object is called the document object. Programmatically, the document seen on the web page is modelled by this document object created by the browser, and inside our JavaScript code we have access to that document object and we can use it to interact with our HTML pages using document object's properties and methods

  // Tree of nodes

  // The DOM sees our HTML page as hierarchical tree of nodes with html tag (root node) at the top (root) of the page, and everything else is inside it. Each one of the elements is considered a node in the DOM, and some of the element nodes have text nodes inside. The idea is that if we want to interact with a web page, we'd use the DOM to reach into this tree of nodes, select a particular element (node) and get a reference to it, and this action is known as querying the DOM

  // Querying & traversing
  console.log(tbody.nodeType);
  console.log(tbody.nodeName);
  console.log(tbody.children);
  console.log(tbody.childNodes);
  console.log(tbody.hasChildNodes());
  console.log(tbody.cloneNode());
  console.log(tbody.cloneNode(true));
  console.log(tbody.previousElementSibling);
  console.log(tbody.parentElement);
  console.log(tbody.parentNode);
  console.log(tbody.offsetParent);
  console.log(tbody.parentElement.parentElement);
  console.log(
    tbody.parentElement.parentElement.parentElement.parentElement
      .firstElementChild
  );

  // Setting, removing, and manipulating attributes
  tbody.id = 't-body';
  tbody.setAttribute('class', 'table-body');
  tbody.dataset.tbodyName = 'table-body-name';

  console.log(tbody.hasAttribute('id'));
  console.log(tbody.hasAttribute('class'));
  console.log(tbody.getAttribute('class'));
  console.log(tbody.getAttribute('data-tbody-name'));

  console.log(tbody);

  tbody.removeAttribute('id');

  tbody.classList.toggle('table-body', false);
  tbody.classList.toggle('table-body', true);
  tbody.style.backgroundColor = 'hsla(120, 95%, 95%, 0.35)';
  tbody.style.fontSize = '1.62rem';

  console.log(tbody);

  tbody.parentNode.previousElementSibling.innerHTML += ` =)<br/><span>Too cool for everyone else!!</span><span>!</span>`;

  const spanToRemove = tbody.parentNode.previousElementSibling.lastElementChild;

  console.log(spanToRemove);

  spanToRemove.parentNode.removeChild(spanToRemove);

  // Preventing link default behavior
  const link = document.createElement('a');
  link.innerHTML = `
	<a href="https://gitlab.com/mi.podgurska">Mila's GitLab</a>
	`;
  document.body.insertAdjacentElement('beforeend', link);
  link.addEventListener('click', e => {
    e.preventDefault();
    console.log(`Navigation to ${e.target.textContent} was prevented.`);
  });

  // Event bubbling and capturing
  const triggers = document.querySelectorAll('.triggered');

  function logText() {
    console.log(this);
    console.log(this.classList.value);
  }

  triggers.forEach(trigger => trigger.addEventListener('click', logText));

  // triggers.forEach(trigger =>
  //   trigger.addEventListener('click', logText, { capture: true })
  // );

  // triggers.forEach(trigger =>
  //   trigger.addEventListener('click', logText, { once: true })
  // );

  const list = document.querySelector('.book-list');
  list.addEventListener('click', e => {
    if (e.target.className === 'delete triggered') {
      const li = e.target.parentElement;
      list.removeChild(li);
      const message = document.createElement('p');
      message.textContent = `Book "${e.target.previousElementSibling.textContent}" has been successfully removed from the list.`;
      list.append(message);
      setTimeout(() => {
        message.remove();
      }, 3500);
    }
  });

  // Form events

  // 'Submit' event
  const addForm = document.forms['add-book'];
  addForm.addEventListener('submit', e => {
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    if (value !== '') {
      const li = document.createElement('li');
      li.innerHTML = `
			<h3>${value}</h3>
			<button class="delete">delete</button>
			`;
      li.classList.add('book-item');
      list.appendChild(li);
      addForm.querySelector('input[type="text"]').value = '';
    }
  });

  // 'Change' event
  const hideBox = document.querySelector('#hide');
  hideBox.addEventListener('change', () => {
    if (hideBox.checked) {
      list.style.display = 'none';
    } else {
      list.style.display = 'initial';
    }
  });

  // 'Keyup' event
  const searchBar = document.forms['search-books'].querySelector('input');
  searchBar.addEventListener('keyup', e => {
    const term = e.target.value.toLowerCase();
    const books = list.querySelectorAll('li');
    books.forEach(book => {
      const title = book.firstElementChild.textContent;
      if (title.toLowerCase().indexOf(term) !== -1) {
        book.style.display = 'flex';
      } else {
        book.style.display = 'none';
      }
    });
  });

  // 'Keydown' event
  const element = document.querySelector('.message input');
  element.addEventListener('keydown', event => {
    const value = event.target.value;
    console.log(event.key);

    if (event.key === 'Enter' && value.length > 0) {
      document.querySelector('.result').textContent =
        value.charAt(0).toUpperCase() + value.slice(1);
      event.target.value = '';
    }
  });

  const tabs = document.querySelector('.tabs');
  tabs.dataset.index = '#index';
  const panels = document.querySelectorAll('.panel');
  tabs.addEventListener('click', e => {
    if (e.target.tagName === 'LI') {
      const targetPanel = document.querySelector(e.target.dataset.name);
      console.log(e.target.dataset.name);
      panels.forEach(panel => {
        if (panel === targetPanel) {
          panel.classList.add('active');
          e.target.classList.remove('inactive');
          if (panels[0] === targetPanel) {
            e.target.nextElementSibling.classList.add('inactive');
          }
          if (panels[1] === targetPanel) {
            e.target.previousElementSibling.classList.add('inactive');
          }
        } else {
          panel.classList.remove('active');
        }
      });
    }
  });
});

// Scroll event
document.addEventListener('scroll', e => console.log(e, 'I scrolled'), {
  once: true,
});
