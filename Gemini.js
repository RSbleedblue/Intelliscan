const searchBox = document.getElementById("searchVal");
const generateBtn = document.getElementById("generateBTN");
const spinner = document.getElementById("spinner");
const welcomeText = document.getElementById("welcomeText");
const geminiResult = document.getElementById("geminiResult");
const resultDisplay = document.getElementById("resultDisplay");

import { GoogleGenerativeAI } from "@google/generative-ai";
const API_KEY = "AIzaSyDwBhTsKHEl2cMLKPrBeaK5SjVW9JKadY4"; 
const genAI = new GoogleGenerativeAI(API_KEY);
let prompt = "";

generateBtn.addEventListener("click", async () => {
    
    const labelResult = document.getElementById("labelResult");
    spinner.classList.remove("hidden");


    if(generateBTN.value === "job"){
        prompt ="Give me five job profile based on my skills set only give me there title this is my skill language " + searchBox.value; + " if the text or stack is irrevalant which means user has inputted wrong value simply send him a alert response to type correct stack"
    searchBox.value = ""; 
    }
    else{
        prompt ="Give me five projects based on my tech stack set only give me there title this is my skill language " + searchBox.value + "if the text or stack is irrevalant which means user has inputted wrong value simply send him a alert response to type correct stack";
    searchBox.value = ""; 
    }
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = await response.text();
        geminiResult.classList.remove("-left-[4000px]");
        geminiResult.classList.add("left-0");
        spinner.classList.add("hidden");

        displayGeneratedContent(text);
    } catch (error) {
        console.error("Error generating content:", error);
        spinner.classList.add("hidden");
    }
});

function displayGeneratedContent(content) {
    
    resultDisplay.innerText = content;
    labelResult.classList.add("typewriter2");
}
