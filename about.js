const aboutInfo = document.getElementById("about-info");

const name = "ChatGPT";
const bio = "ChatGPT is an AI language model created by OpenAI, designed to produce text that resembles human writing. It's training data includes a large corpus of text from the internet, allowing it to respond to a wide range of questions with a high degree of accuracy. It is an artificial intelligence program, not a human, and it's responses are generated based on patterns in the data it was trained on. It's goal is to provide helpful and informative answers to the best of it's ability. It's constantly improving and learning as it receive more input and feedback. Sign up at https://chat.openai.com.";
const profileImage = "https://via.placeholder.com/150x150";

aboutInfo.innerHTML = `
  <img src="${profileImage}" alt="Profile Image">
  <h2>${name}</h2>
  <p>${bio}</p>
`;
