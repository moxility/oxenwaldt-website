---
title: 'ChatGPT monitored Microsoft Teams chats'
description: 'ChatGPT monitored Microsoft Teams chats Use ChatGPT to automatically update your team chat messages for clarity. Use ChatGPT to update chat messages to boost clarity! As we continu…'
pubDate: 2023-03-13
---
ChatGPT monitored Microsoft Teams chats 

 
 

Use ChatGPT to automatically update your team chat messages for clarity.

Use ChatGPT to update chat messages to boost clarity!

As we continue to work remotely in the wake of Covid, communication through text is more common than before. With messages flying back and forth, there is a chance of misinterpretation, which can cause serious issues. Messages can easily be misinterpreted, assigning incorrect intent or meaning. To minimize this risk , I created a Power Automate that checks my Teams messages for any risk of misinterpretation. 

To achieve this, I used the newly released ChatGPT API. ChatGPT is a large language model trained by OpenAI to understand natural language and generate human-like responses. By leveraging ChatGPT’s capabilities, I created a Power Automate that analyzes the text of the messages and checks for any potential misunderstandings. If there was content in my chat message deemed to include ambiguous content, too many alternative meanings, or obvious spelling mistakes – then the Power Automate flow would update my Teams chat message. 

To accomplish this, I used;

- A custom connector to OpenAI ChatGPT API

- A custom connector to Microsoft Graph API

- A Power Automate flow

The first step was to set up the Power Automate flow. I started by connecting it to my Microsoft Teams account and setting up a trigger that detects new messages. To not check all of them during proof-of-concept, I have added a condition that it will only check messages where I include a code. I put # start of the message as the trigger to check my text. Then, I added the action to get the text of the message. Next, I created an action to call the ChatGPT API through my custom connector. I passed in the text of the message as input and requested an analysis of the message and added the instruction for ChatGPT, so it was clear to know what to do with the text content. The API then returned a response with the analysis, including any potential risks of misinterpretation and a suggested rewrite. Finally, I added a condition to check if the analysis indicated any risks of misinterpretation. I let ChatGPT rate it between 1-100 and along the way I found that above 75 was a good rating threshold for me to have ChatGPT do rewrites. I also made sure to set the temperature parameter low to minimize the creativity in the responses – making them more predictable. 

**Sending the teams chat message to ChatGPT API with an instruction prompt.**

### Share this:

- [Twitter](http://web.archive.org/web/20230328215750/https://oxenwaldt.com/2023/03/13/chatgpt-monitored-microsoft-teams-chats/?share=twitter)
- [Facebook](http://web.archive.org/web/20230328215750/https://oxenwaldt.com/2023/03/13/chatgpt-monitored-microsoft-teams-chats/?share=facebook)
- 

### Like this:

Like Loading...

 
 

 
 
 Posted on [March 13, 2023](http://web.archive.org/web/20230328215750/https://oxenwaldt.com/2023/03/13/chatgpt-monitored-microsoft-teams-chats/)Author [Magnus Oxenwaldt](http://web.archive.org/web/20230328215750/https://oxenwaldt.com/author/magnus248a42c4e5/)Categories [Uncategorized](http://web.archive.org/web/20230328215750/https://oxenwaldt.com/category/uncategorized/)

---
*Originally published on [oxenwaldt.com](https://oxenwaldt.com/2023/03/13/chatgpt-monitored-microsoft-teams-chats/) on 2023-03-13* (recovered from web archive).
