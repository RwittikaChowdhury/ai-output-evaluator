export function evaluateResponse(text: string) {
  const issues: string[] = [];

  if (!text || text.trim().length === 0) {
    issues.push("Empty response");
  }

  if (text.length < 20) {
    issues.push("Response too short");
  }

  if (text.toLowerCase().includes("error")) {
    issues.push("Contains error-like content");
  }

  return issues;
}