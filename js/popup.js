 // Save settings when the button is clicked
 document.getElementById("saveSettings").addEventListener("click", () => {
    const expCount = document.getElementById("expCount").value;
    const questions = document.getElementById("questions").value;

    // Send the values to the background script
    chrome.runtime.sendMessage({ action: "updateSettings", expCount, questions }, (response) => {
      if (response && response.success) {
        console.log("Settings saved successfully!");
      } else {
        console.log("Failed to save settings. Please try again.");
      }
    });
  });