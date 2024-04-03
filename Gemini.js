import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyDwBhTsKHEl2cMLKPrBeaK5SjVW9JKadY4");

async function run() {
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const prompt = "Suggest me job recommendation on my technology where i have skills in java and node js just give me 5 fields"

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();