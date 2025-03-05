// Default values for expCount and questions
let expCount = 7;
let questions = 30;

// Listen for messages from popup.html to update settings
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "updateSettings") {
    expCount = parseInt(message.expCount, 10);
    questions = parseInt(message.questions, 10);
    sendResponse({ success: true });
  }
});

// Check if the context menu item already exists before creating it
chrome.contextMenus.removeAll(() => {
    // Create the context menu item
    chrome.contextMenus.create({
        id: "promt",
        title: "Get Prompt",
        contexts: ["page"],
        documentUrlPatterns: ["*://www.linkedin.com/jobs/view/*"]
    });
});

// Add a listener for the context menu item
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "promt") {
        console.log("Get Prompt clicked!");
        let url = tab.url;
        let title = tab.title;
        let jobTitle = title.split("|")[0];
        let companyName = title.split("|")[1];

        let prompt = `Here is LinkedIn Url ${url}.
Generate a report on interview experiences and questions for the ${jobTitle} at ${companyName}, using web search and analysis of platforms like LeetCode Discuss, Glassdoor, Reddit, Medium, Indeed, LinkedIn, GeeksforGeeks, X, other public career forums or blogs, etc. Include:

- Brief overview of ${companyName} and ${jobTitle}.

- Typical interview process (rounds, types, duration).

- At least ${expCount} unique firsthand candidate experiences (stages, details, advice).

- Categorized list of at least ${questions} unique interview questions (technical, behavioral, etc.).
 
- Insights and preparation tips, including strategies to maximize chances of getting interview calls.

If data for ${jobTitle} is limited, use similar roles and note the extrapolation. Ensure the report is thorough, well-organized, and practical for interview preparation.`;

        // Send the prompt to the content script
        chrome.tabs.sendMessage(tab.id, { action: "copyPrompt", prompt: prompt });
    }
});