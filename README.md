## Job Search Assistant - Chrome Extension

## Introduction

The **Job Search Assistant** is a Chrome Extension designed to help software developers prepare for job interviews by generating a powerful AI-powered research prompt. This prompt can be used to gather detailed insights about a specific job role and company, including interview experiences, questions, and preparation tips.

The extension extracts the job title and company name from LinkedIn job postings and creates a ready-to-use prompt that you can paste into any AI tool (e.g., ChatGPT, Gemini) to conduct deep research for interview preparation.

Inspired by this [LinkedIn Post By Anmol Gupta](https://www.linkedin.com/posts/anmol-gupta7_this-is-the-most-powerful-deep-research-ai-activity-7301858817439408128-O-0T?utm_source=share&utm_medium=member_desktop&rcm=ACoAACfkCNYBY6AC1JjxLUzsJunGTjto1bKQ_Cs)

---

## Features

### Version 1.0.1

- **Get Prompt**:
  - Right-click on any LinkedIn job posting and select **"Get Prompt"** from the context menu.
  - The extension will generate a detailed AI prompt to research the job role and company.
  - The prompt is automatically copied to your clipboard, ready to be pasted into any AI tool.

---

## How It Works

1. **Navigate to a LinkedIn Job Posting**:

   - Open a job posting on LinkedIn (e.g., `https://www.linkedin.com/jobs/view/...`).
2. **Right-Click and Select "Get Prompt"**:

   - Right-click anywhere on the page and choose **"Get Prompt"** from the context menu.
3. **Prompt Generated and Copied**:

   - The extension extracts the job title and company name from the page.
   - It generates a detailed AI prompt and copies it to your clipboard.
4. **Paste into an AI Tool**:

   - Paste the prompt into any AI tool (e.g., ChatGPT, Gemini) to get a comprehensive report on the job role and company.

---

## Folder Structure

```
Job-Search/
│
├── img/
│   └── icon48.png
│   └── icon96.png
│   └── icon144.png
│
├── js/
│   ├── background.js
│   └── content-script.js
│   └── popup.js
│
├── css/
│   └── popup.css
│
├── popup.html
└── manifest.json
```

---

## Installation

To install the Job Search Assistant Chrome Extension, follow these steps:

1. Download the extension files to your computer.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable Developer Mode by clicking the toggle in the top right corner.
4. Click 'Load unpacked' and select the directory where you downloaded the extension files.

---

## Support

If you encounter any issues or have suggestions for improvements, please open an issue on our GitHub repository. Your feedback is invaluable to us!

---

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Thank you for using the Job Search Assistant Chrome Extension. We hope it makes your job search a little easier and wish you the best of luck in finding your next software development role!
