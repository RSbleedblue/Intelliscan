const searchBox = document.getElementById("searchVal");
const generateBtn = document.getElementById("generateBTN");
const spinner = document.getElementById("spinner");
const welcomeText = document.getElementById("welcomeText");

import { GoogleGenerativeAI } from "@google/generative-ai";
const API_KEY = "AIzaSyDwBhTsKHEl2cMLKPrBeaK5SjVW9JKadY4"; 
const genAI = new GoogleGenerativeAI(API_KEY);
let prompt = "";

generateBtn.addEventListener("click", async () => {
    spinner.classList.remove("hidden");

    if(generateBTN.value === "job"){
        prompt ="Give me five job profile based on my skills set only give me there title this is my skill language " + searchBox.value;
    searchBox.value = ""; 
    }
    else{
        prompt ="Give me five projects based on my tech stack set only give me there title this is my skill language " + searchBox.value;
    searchBox.value = ""; 
    }
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = await response.text();

        spinner.classList.add("hidden");

        displayGeneratedContent(text);
    } catch (error) {
        console.error("Error generating content:", error);
        spinner.classList.add("hidden");
    }
});

function displayGeneratedContent(content) {
    
    welcomeText.innerText = content;
}
