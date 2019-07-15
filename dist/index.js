document.addEventListener('DOMContentLoaded', init);

function init() {

  const menuBtn = document.querySelector('.nav-btn');
  const nav = document.querySelector('.nav');
  let isActive = false;

  menuBtn.addEventListener('click', function() {
    const icon = this.querySelector('i');
    isActive = !isActive;
    icon.className = isActive ? 'fas fa-times' : 'fas fa-bars';
    nav.classList.toggle('active');
  });
  const db = [
    { id: 0, title: 'Red seat', img: 'product1.png' },
    { id: 1, title: 'White table', img: 'table.png' },
    { id: 2, title: 'Green seat', img: 'product1.png' },
    { id: 3, title: 'Black seat', img: 'product2.png' },
    { id: 4, title: 'Orange seat', img: 'product1.png' },
    { id: 5, title: 'Rebeccapurple seat', img: 'product2.png' }
  ];

  const input = document.querySelector('#search-textfield');
  const parent = document.querySelector('.search-page__result-row');
  const loader = document.querySelector('.loader');
  const clearBtn = document.querySelector('.search-form__clear');

  const productTemplate = ({ id, title, img }) => {
    return `
    <div class="search-page__result-col">
      <figure class="search-page__result-item">
        <a href="/product/${id}" class="search-page__result-link">
          <img src="img/${img}" alt="product 1" class="search-page__result-img">
          <span class="search-page__result-description">${title}</span>
        </a>
      </figure>

    </div>`;
  };

  input.addEventListener('keyup', function(ev) {
    const response = db.filter(product => product.title.toLowerCase().indexOf(ev.target.value.toLowerCase()) > -1);

    if (!ev.target.value.trim().length) return;

    loader.hidden = false;
    parent.hidden = true;
    document.querySelector('.result__item').parentNode.hidden = true;

    setTimeout(() => {
      loader.hidden = true;
      parent.innerHTML = '';
      response.forEach(product => {
        const child = productTemplate(product);
        parent.innerHTML += child;
      });
      parent.hidden = false;
      document.querySelector('.result__item').textContent = response.length;
      document.querySelector('.result__item').parentNode.hidden = false;
    }, 2000);
  });

  clearBtn.addEventListener('click', () => {
    if (input.value.trim().length > 0) {
      input.value = '';
    }
  });
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdCk7XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4vLz0gc3JjL2NvbXBvbmVudHMvSW5kZXgvbmF2aWdhdGlvbi9uYXYuanNcclxuLy89IHNyYy9jb21wb25lbnRzL1NlYXJjaC9IZXJvL3NlYXJjaC5qc1xyXG59Il0sImZpbGUiOiJpbmRleC5qcyJ9
