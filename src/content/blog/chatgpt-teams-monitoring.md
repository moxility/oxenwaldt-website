---
title: 'ChatGPT Monitored Microsoft Teams Chats'
description: 'Building an automated Power Automate flow that uses ChatGPT API to analyze Teams messages for clarity and prevent misinterpretation.'
pubDate: 'Mar 13 2023'
---

Remote work has transformed how we communicate, but it's also introduced new challenges. Messages in Microsoft Teams can easily be misinterpreted, assigning incorrect intent or meaning to what was written. To address this, I built an automated solution using Power Automate and the newly released ChatGPT API.

## The Challenge

In digital communication, tone and context are easily lost. What seems clear to the sender might be ambiguous to the receiver. Misunderstandings can cascade into larger issues, affecting team morale and productivity. The question became: could AI help catch these potential misinterpretations before they cause problems?

## The Solution

I created a Power Automate workflow that automatically reviews Teams messages for clarity issues. The system leverages ChatGPT's natural language understanding to analyze messages and suggest rewrites when it detects ambiguity, multiple interpretations, or spelling errors.

### Key Components

The solution uses three main components:

1. **Custom Connector to OpenAI ChatGPT API** — Sends message text for AI analysis
2. **Custom Connector to Microsoft Graph API** — Updates Teams messages with suggestions
3. **Power Automate Flow** — Orchestrates the entire workflow

### How It Works

Here's the workflow in action:

1. Team members prefix messages with "#" to trigger analysis
2. ChatGPT evaluates the text and assigns a risk score (1-100) for potential misinterpretation
3. Messages scoring above 75 receive AI-suggested rewrites
4. The system updates the original message with clarity improvements

I intentionally set the temperature parameter low to minimize creativity in the responses, making them more predictable and focused on clarity rather than stylistic changes.

## Real-World Impact

This automated clarity check has proven valuable for our team collaboration, particularly in:

- Cross-cultural communication where language nuances matter
- Complex technical discussions that require precision
- Time-sensitive situations where misunderstandings are costly

## Technical Considerations

When implementing this solution, I focused on:

- **Privacy**: Messages are only analyzed when explicitly triggered with "#"
- **Performance**: Low temperature settings ensure consistent, predictable results
- **Integration**: Seamless workflow within existing Teams infrastructure

## Lessons Learned

Building this integration taught me several things about practical AI implementation:

1. **AI as an assistant, not replacement**: The system suggests improvements but doesn't force them
2. **Context matters**: The scoring system helps prioritize which messages need attention
3. **User control is crucial**: The opt-in approach (#) ensures people maintain autonomy

## Looking Forward

This project demonstrates how AI can augment human communication rather than replace it. The ChatGPT API opens up possibilities for improving collaboration tools across the enterprise, from email to documentation to project management.

As organizations continue embracing remote and hybrid work, tools like this become increasingly valuable. The key is implementing them thoughtfully—enhancing human capabilities while respecting autonomy and privacy.

If you're interested in implementing similar solutions, the combination of Power Automate, Microsoft Graph API, and OpenAI's API provides a powerful foundation for workplace AI integration.
