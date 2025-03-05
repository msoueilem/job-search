// Example: Log the page title
console.log("Job Search Assistant content script loaded.\nPage Title:", document.title);

// Listen for messages from the background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "copyPrompt") {
        // Copy the prompt to the clipboard
        navigator.clipboard.writeText(message.prompt)
            .then(() => {
                console.log("Prompt copied to clipboard!", message.prompt);
            })
            .catch((err) => {
                console.error("Failed to copy prompt:", err);
            });
    }
});