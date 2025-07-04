# Can We Trust AI to Write Our Code? A Developer’s Perspective

## By Tyson Williams

AI tools such as ChatGPT and GitHub Copilot are revolutionising software and web development. With the ability to generate entire code blocks from prompts, these tools promise faster development cycles and fewer bugs. But at what cost?

As a student developer, I’ve often wondered, “Should I trust AI to write code I cannot fully explain myself?” In this project, I explore the quality, clarity, and maintainability of AI-generated code compared to my own manually written code for the same task.

In a professional setting, maintainable and readable code is critical for team collaboration, handovers, and long-term support. If developers are deploying AI-written code without fully understanding it, this poses potential risks to project sustainability and ethical integrity.

To explore this issue, I developed two versions of a simple project: one written entirely by me, and one generated using ChatGPT. I then compared both based on code readability, maintainability, and my own level of understanding.

This concern is not mine alone; several industry leaders and researchers have raised alarms about overreliance on AI tools for production code, especially in junior teams.

[GitClear's "Coding on Copilot" Report](https://www.gitclear.com/coding_on_copilot_data_shows_ais_downward_pressure_on_code_quality?) analysed over 150 million lines of code and found that AI-assisted development with tools like GitHub Copilot can lead to a decrease in code quality. Specifically, the report highlights an increase in code churn and a decline in code reuse, suggesting that AI-generated code may be less maintainable and more prone to issues over time. These findings raise concerns about the long-term sustainability and readability of AI-produced code.

### The Rise of AI-Powered Coding Tools in Modern Development Workflows

In recent years, AI-powered coding tools have transitioned from experimental novelties to integral components of modern software development. Platforms like GitHub Copilot, Replit, and Cursor are now commonplace, assisting developers in writing, debugging, and optimising code more efficiently. This shift is driven by the demand for faster development cycles and the democratisation of coding knowledge, enabling individuals with varying levels of expertise to contribute to software projects.

According to Business Insider, (Barr, 2025\) the integration of AI into development workflows offers several opportunities:

- Accelerated Development: AI tools can generate boilerplate code, suggest functions, and even identify bugs, significantly reducing development time.  
- Knowledge Democratisation: By lowering the barrier to entry, these tools empower non-traditional developers to build functional software using natural language prompts

However, this rapid adoption also presents challenges:

- Overreliance on AI: Developers may become dependent on AI suggestions, potentially diminishing their problem-solving skills and understanding of underlying code structures.  
- Code Quality Concerns: AI-Generated code may lack the context-specific nuances that human developers provide, leading to maintainability issues.

As AI continues to reshape the development landscape, developers must balance the benefits of these tools with a critical understanding of their limitations.

### Ethical Implications of AI-Generated Code in Software Development

The integration of AI into code generation raises several ethical concerns that develops and organisations must address:

- **Intellectual Property and Plagiarism**: AI models trained on vast code repositories may inadvertently reproduce copyrighted code without proper attribution, leading to potential legal issues. For instance, GitHub Copilot has been observed generating code snippets that closely resemble existing open-source projects, sometimes without preserving original license information. (Davis & Rajamanickam, 2022\)  
- **Transparency and Accountability:** When AI-generated code leads to errors or vulnerabilities, determining responsibility becomes complex. The lack of transparency in how AI models make decisions further complicates accountability.  
- **Bias and Fairness:** AI tools may perpetuate existing biases present in their training data, leading to unfair or discriminatory outcomes in software applications. (BytePlus Editorial Team, 2025\)

To navigate these ethical challenges, developers should:

- **Coduct Code Reviews:** Regularly review AI-generated code for potential IP infringements and biases.  
- **Maintain Documentation:** Keep details records of AI tool usage and the origins of code snippets to ensure traceability.  
- **Implement Ethical Guidelines:** Establish clear policies on the use of AI in development to promote responsible practices. (Sanj.dev, 2025\)

By proactively addressing these ethical considerations, the developer community can harness the benefits of AI while upholding standards of integrity and accountability.

