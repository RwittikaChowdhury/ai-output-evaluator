

\# AI Output Evaluator



A TypeScript-based tool that evaluates AI-generated responses using simple rule-based quality checks.



\## Overview



AI Output Evaluator is a beginner-friendly project designed to identify basic quality issues in AI-generated text. It checks responses for empty content, insufficient length, and error-like wording.



\## Features



\- Detects empty responses

\- Identifies responses that are too short

\- Flags error-like content

\- Provides clear evaluation results

\- Includes automated tests using Node.js



\## Technologies Used



\- TypeScript

\- Node.js

\- Node.js Test Runner

\- ts-node



\## Project Structure



```text

ai-output-evaluator/

├── src/

│   ├── index.ts

│   └── evaluator.ts

├── tests/

│   └── evaluator.test.ts

├── package.json

├── package-lock.json

├── tsconfig.json

├── .gitignore

└── README.md

```



\## Installation



Clone the repository:



```bash

git clone https://github.com/RwittikaChowdhury/ai-output-evaluator.git

```



Navigate to the project folder:



```bash

cd ai-output-evaluator

```



Install dependencies:



```bash

npm install

```



\## Usage



Run the project:



```bash

npm start

```



Build the TypeScript project:



```bash

npm run build

```



\## Run Tests



Execute the automated tests:



```bash

npm test

```



The test suite checks empty responses, short responses, error-like content, normal responses, and whitespace-only responses.



\## Current Test Results



\- Total test cases: 5

\- Passed: 5

\- Failed: 0



\## Future Improvements



\- Add more advanced response quality checks

\- Evaluate relevance and clarity

\- Detect repeated or irrelevant content

\- Introduce configurable evaluation rules

\- Explore AI-assisted evaluation methods



\## Author



\*\*Rwittika Chowdhury\*\*



GitHub: \[@RwittikaChowdhury](https://github.com/RwittikaChowdhury)



