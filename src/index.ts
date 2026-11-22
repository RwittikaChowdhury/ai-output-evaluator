import { evaluateResponse } from "./evaluator";

const aiResponse = "This is a sample AI generated answer.";

const result = evaluateResponse(aiResponse);

if (result.length === 0) {
  console.log("Response looks good");
} else {
  console.log("Issues found:", result);
}