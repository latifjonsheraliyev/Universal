fetch("http://localhost:3000/fetchCards")
  .then((response) => response.json())
  .then((data) => {
    const fetchContainer = document.querySelector(".fetch-left");
    data.forEach((card) => {
      const cardElement = document.createElement("div");
      cardElement.classList.add("fetch-card");
      cardElement.innerHTML = `
        <div class="fetch-card-left">
          <img src="${card.image}" alt="img" />
        </div>
        <div class="fetch-card-right">
          <div class="saved">
            <h5>${card.category}</h5>
            <button><i class="fa-solid fa-bookmark"></i></button>
          </div>
          <h3>${card.title}</h3>
          <p>${card.description}</p>
          <div class="comments">
            <h5>${card.date}</h5>
            <h6><i class="fa-solid fa-message"></i> ${card.comments}</h6>
            <h6><i class="fa-solid fa-heart"></i> ${card.likes}</h6>
          </div>
        </div>
      `;
      fetchContainer.appendChild(cardElement);
    });
  })
  .catch((error) => console.error("Error fetching data:", error));
