import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyDwBhTsKHEl2cMLKPrBeaK5SjVW9JKadY4");
const searchValue = document.getElementById("searchVal");
async function run() {
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const prompt = `Suggest me job recommendation on my technology where i have skills in ${searchValue} just give me 5 points just name them`

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}
function test(){
    console.log("hi");
}
run();