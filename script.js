// Функция, которая принимает объект поста и возвращает строку HTML-разметки
function createPostElement(post) {
  return `
      <div class="post">
        <h2>Заголовок: ${post.title}</h2>
        <p>Статья: ${post.body}</p>
      </div>
    `;
}

// Функция, которая добавляет разметку в контейнер
function appendElementToContainer(container, element) {
  container.innerHTML += element;
}

// Получение списка постов с сервера и добавление их на страницу
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => {
    const container = document.getElementById("postsContainer");
    posts.forEach((post) => {
      const element = createPostElement(post);
      appendElementToContainer(container, element);
    });
  });
