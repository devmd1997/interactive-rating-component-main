const ratingState = document.getElementById("rating-state");
const thankYouState = document.getElementById("thank-you-state");
const confirmationContainer = document.getElementById("confirmation-container");
const submitButton = document.getElementById("submit-button");
const ratingContainer = document.getElementById("rating-container");
let selectedRating = null;

const createRatingButton = (rating) => {
  const element = document.createElement("div");
  element.classList.add("rating-button");
  element.innerText = rating;

  element.addEventListener("click", () => {
    ratingContainer
      .querySelectorAll(".rating-button")
      .forEach((ratingButton) => ratingButton.classList.remove("selected"));

    selectedRating = rating;
    element.classList.add("selected");
    console.log("Selected rating:", selectedRating);
  });

  return element;
};

const renderRatingButtons = () => {
  for (let i = 1; i <= 5; i++) {
    const ratingButton = createRatingButton(i);
    ratingContainer.appendChild(ratingButton);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  renderRatingButtons();

  submitButton.addEventListener("click", () => {
    if (selectedRating !== null) {
      ratingState.classList.add("hidden");
      thankYouState.classList.remove("hidden");
      confirmationContainer.innerText = `You selected ${selectedRating} out of 5`;
    }
  });
});
