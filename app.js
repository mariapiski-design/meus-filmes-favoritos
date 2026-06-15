// ===== DADOS DOS FILMES =====
const movies = [
  {
    id: 1,
    title: "Velozes e Furiosos",
    genre: "ação",
    year: 2001,
    rating: 6.8,
    duration: "106 min",
    thumbnail: "https://images.unsplash.com/photo-1489599849228-ed4dc6900d4e?w=300&h=400&fit=crop",
    synopsis: "Dominic Toretto é um criminoso procurado pela polícia que lidera um grupo de pilotos de rua. Quando um agente federal infiltra seu grupo, tudo muda. Uma ação acelerada que revolucionou o cinema de corridas.",
    cast: "Vin Diesel, Paul Walker, Michelle Rodriguez, Jordana Brewster",
    director: "Rob Cohen",
    iframeUrl: "https://www.youtube.com/embed/R5G0vNyD0QE"
  },
  {
    id: 2,
    title: "Velozes e Furiosos 2",
    genre: "ação",
    year: 2003,
    rating: 5.9,
    duration: "107 min",
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=400&fit=crop",
    synopsis: "Brian O'Conner se vê forçado a trabalhar com a polícia para derrotar um traficante de drogas. A sequência traz mais ação, mais carros e mais adrenalina.",
    cast: "Paul Walker, Tyrese Gibson, Eva Mendes, Cole Hauser",
    director: "John Singleton",
    iframeUrl: "https://www.youtube.com/embed/pVpVmAELZfQ"
  },
  {
    id: 3,
    title: "Homem-Aranha",
    genre: "ação",
    year: 2002,
    rating: 7.3,
    duration: "121 min",
    thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=400&fit=crop",
    synopsis: "Peter Parker é um jovem que ganha poderes de aranha após ser picado por uma aranha geneticamente modificada. Ele deve aprender a usar seus poderes para combater o crime.",
    cast: "Tobey Maguire, Kirsten Dunst, Willem Dafoe, James Franco",
    director: "Sam Raimi",
    iframeUrl: "https://www.youtube.com/embed/eKJbYIH1YKY"
  },
  {
    id: 4,
    title: "Matrix",
    genre: "ficção científica",
    year: 1999,
    rating: 8.7,
    duration: "136 min",
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=400&fit=crop",
    synopsis: "Thomas Anderson, conhecido como Neo, descobre que o mundo em que vive é uma simulação. Ele se junta a um grupo de rebeldes para lutar contra as máquinas.",
    cast: "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving",
    director: "Lana Wachowski, Lilly Wachowski",
    iframeUrl: "https://www.youtube.com/embed/vKQi3bBA1y8"
  },
  {
    id: 5,
    title: "Toy Story",
    genre: "animação",
    year: 1995,
    rating: 8.3,
    duration: "81 min",
    thumbnail: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300&h=400&fit=crop",
    synopsis: "Um boneco de ação chamado Woody e um astronauta de brinquedo chamado Buzz Lightyear devem trabalhar juntos para encontrar seu caminho de volta para casa.",
    cast: "Tom Hanks, Tim Allen, Annie Potts, John Ratzenberger",
    director: "John Lasseter",
    iframeUrl: "https://www.youtube.com/embed/KYz2wyBy3kw"
  },
  {
    id: 6,
    title: "Titanic",
    genre: "drama",
    year: 1997,
    rating: 7.8,
    duration: "194 min",
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=400&fit=crop",
    synopsis: "A história de dois passageiros de classes sociais diferentes que se apaixonam a bordo do navio Titanic, que está destinado a afundar.",
    cast: "Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates",
    director: "James Cameron",
    iframeUrl: "https://www.youtube.com/embed/CHYlDqjlpno"
  },
  {
    id: 7,
    title: "O Sexto Sentido",
    genre: "terror",
    year: 1999,
    rating: 8.1,
    duration: "107 min",
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=400&fit=crop",
    synopsis: "Um psicólogo infantil trabalha com um menino que afirma poder ver pessoas mortas. Juntos, eles tentam ajudar os espíritos a encontrar paz.",
    cast: "Bruce Willis, Haley Joel Osment, Toni Collette, Olivia Williams",
    director: "M. Night Shyamalan",
    iframeUrl: "https://www.youtube.com/embed/3-VrIVzgJ0I"
  },
  {
    id: 8,
    title: "Jurassic Park",
    genre: "aventura",
    year: 1993,
    rating: 8.1,
    duration: "127 min",
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=400&fit=crop",
    synopsis: "Um parque temático contendo dinossauros clonados abre suas portas, mas tudo dá errado quando os dinossauros escapam.",
    cast: "Sam Neill, Laura Dern, Jeff Goldblum, Richard Attenborough",
    director: "Steven Spielberg",
    iframeUrl: "https://www.youtube.com/embed/QWBKEmWWL38"
  },
  {
    id: 9,
    title: "Forrest Gump",
    genre: "drama",
    year: 1994,
    rating: 8.8,
    duration: "142 min",
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=400&fit=crop",
    synopsis: "A vida de um homem com deficiência intelectual que, apesar de suas limitações, consegue realizar feitos extraordinários.",
    cast: "Tom Hanks, Sally Field, Gary Sinise, Mykelti Williamson",
    director: "Robert Zemeckis",
    iframeUrl: "https://www.youtube.com/embed/bLvqoHBptjg"
  },
  {
    id: 10,
    title: "Rápidos e Furiosos 7",
    genre: "ação",
    year: 2015,
    rating: 7.1,
    duration: "137 min",
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=400&fit=crop",
    synopsis: "Dominic Toretto e sua equipe enfrentam um vilão que busca vingança. O filme marca o retorno de Paul Walker e oferece ação de tirar o fôlego.",
    cast: "Vin Diesel, Paul Walker, Dwayne Johnson, Michelle Rodriguez",
    director: "James Wan",
    iframeUrl: "https://www.youtube.com/embed/dKi6DzJfqJ8"
  },
  {
    id: 11,
    title: "Homem de Ferro",
    genre: "ação",
    year: 2008,
    rating: 7.9,
    duration: "126 min",
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=400&fit=crop",
    synopsis: "Tony Stark, um bilionário inventor, cria uma armadura de alta tecnologia para se tornar o Homem de Ferro e lutar contra o crime.",
    cast: "Robert Downey Jr., Terrence Howard, Gwyneth Paltrow, Jeff Bridges",
    director: "Jon Favreau",
    iframeUrl: "https://www.youtube.com/embed/8dgUHWMsWQo"
  },
  {
    id: 12,
    title: "Avatar",
    genre: "ficção científica",
    year: 2009,
    rating: 7.8,
    duration: "162 min",
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=400&fit=crop",
    synopsis: "Um soldado paralítico é enviado para um planeta alienígena onde pode habitar um corpo de um nativo azul. Ele se apaixona pela filha do chefe local.",
    cast: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    director: "James Cameron",
    iframeUrl: "https://www.youtube.com/embed/d9MyW72ELq0"
  }
];

// ===== VARIÁVEIS GLOBAIS =====
let currentGenre = "todos";
let filteredMovies = [...movies];

// ===== INICIALIZAÇÃO =====
document.addEventListener("DOMContentLoaded", () => {
  renderMovies(movies);
});

// ===== RENDERIZAR FILMES =====
function renderMovies(moviesToRender) {
  const moviesGrid = document.getElementById("moviesGrid");
  const noResults = document.getElementById("noResults");

  if (moviesToRender.length === 0) {
    moviesGrid.innerHTML = "";
    noResults.style.display = "flex";
    return;
  }

  noResults.style.display = "none";
  moviesGrid.innerHTML = moviesToRender
    .map(
      (movie) => `
    <div class="movie-card" onclick="openModal(${movie.id})">
      <img src="${movie.thumbnail}" alt="${movie.title}" class="movie-card__thumbnail" />
      <div class="movie-card__overlay">
        <button class="movie-card__play-btn">▶</button>
      </div>
      <div class="movie-card__info">
        <h3 class="movie-card__title">${movie.title}</h3>
        <div class="movie-card__meta">
          <span class="movie-card__rating">${movie.rating}</span>
          <span>${movie.year}</span>
        </div>
      </div>
    </div>
  `
    )
    .join("");
}

// ===== SELECIONAR GÊNERO =====
function selectGenre(button) {
  // Remove a classe active de todos os botões
  document.querySelectorAll(".genre-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  // Adiciona a classe active ao botão clicado
  button.classList.add("active");

  // Obtém o gênero selecionado
  currentGenre = button.getAttribute("data-genre");

  // Atualiza o título da seção
  const sectionTitle = document.getElementById("sectionTitle");
  if (currentGenre === "todos") {
    sectionTitle.textContent = "Todos os Filmes";
  } else {
    sectionTitle.textContent =
      currentGenre.charAt(0).toUpperCase() + currentGenre.slice(1);
  }

  // Filtra e renderiza os filmes
  filterByGenre();
}

// ===== FILTRAR POR GÊNERO =====
function filterByGenre() {
  if (currentGenre === "todos") {
    filteredMovies = [...movies];
  } else {
    filteredMovies = movies.filter((movie) => movie.genre === currentGenre);
  }

  renderMovies(filteredMovies);
}

// ===== FILTRAR POR BUSCA =====
function filterMovies() {
  const searchInput = document.getElementById("searchInput");
  const searchTerm = searchInput.value.toLowerCase();

  if (searchTerm.trim() === "") {
    filterByGenre();
    return;
  }

  const searchResults = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchTerm) ||
      movie.genre.toLowerCase().includes(searchTerm) ||
      movie.year.toString().includes(searchTerm) ||
      movie.cast.toLowerCase().includes(searchTerm)
  );

  document.getElementById("sectionTitle").textContent = `Resultados para "${searchTerm}"`;
  renderMovies(searchResults);
}

// Permitir busca ao pressionar Enter
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      filterMovies();
    }
  });
});

// ===== ABRIR MODAL =====
function openModal(movieId) {
  const movie = movies.find((m) => m.id === movieId);

  if (!movie) return;

  // Preencher dados do modal
  document.getElementById("modalTitle").textContent = movie.title;
  document.getElementById("modalSynopsis").textContent = movie.synopsis;
  document.getElementById("modalRating").textContent = movie.rating;
  document.getElementById("modalYear").textContent = movie.year;
  document.getElementById("modalDuration").textContent = movie.duration;
  document.getElementById("modalGenre").textContent =
    movie.genre.charAt(0).toUpperCase() + movie.genre.slice(1);
  document.getElementById("modalCast").textContent = movie.cast;
  document.getElementById("modalDirector").textContent = movie.director;

  // Definir o iframe com o URL do vídeo
  const movieIframe = document.getElementById("movieIframe");
  movieIframe.src = movie.iframeUrl;

  // Mostrar modal
  const modalOverlay = document.getElementById("modalOverlay");
  modalOverlay.classList.add("active");

  // Prevenir scroll da página
  document.body.style.overflow = "hidden";
}

// ===== FECHAR MODAL =====
function closeModal(event) {
  // Se clicou no overlay (fundo), fecha o modal
  if (event && event.target.id !== "modalOverlay") return;

  const modalOverlay = document.getElementById("modalOverlay");
  modalOverlay.classList.remove("active");

  // Limpar o iframe
  document.getElementById("movieIframe").src = "";

  // Permitir scroll da página
  document.body.style.overflow = "auto";
}

// Fechar modal ao pressionar ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});
