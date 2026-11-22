
/**
 * Evaluates an AI-generated response and identifies basic quality issues.
 * @param text - The AI-generated response to evaluate.
 * @returns An array of issues found in the response.
 */
export function evaluateResponse(text: string): string[] {
  const issues: string[] = [];

  const trimmedText = text.trim();

  if (trimmedText.length === 0) {
    issues.push("Empty response");
    return issues;
  }

  if (trimmedText.length < 20) {
    issues.push("Response too short");
  }

  if (trimmedText.toLowerCase().includes("error")) {
    issues.push("Contains error-like content");
  }

  return issues;
}
