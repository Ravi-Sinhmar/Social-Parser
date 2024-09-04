
const key = process.env.ai_key;
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(key);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
console.log("outside",key);

 async function getAnswer(prompt) {
    console.log("inside",key);
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
  }

module.exports = getAnswer;

