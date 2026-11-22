
import { strict as assert } from "node:assert";
import { test } from "node:test";
import { evaluateResponse } from "../src/evaluator";

test("should detect an empty response", () => {
  assert.deepEqual(evaluateResponse(""), ["Empty response"]);
});

test("should detect a response that is too short", () => {
  assert.deepEqual(evaluateResponse("Hi"), ["Response too short"]);
});

test("should detect error-like content", () => {
  assert.deepEqual(
    evaluateResponse("There is an error in this response."),
    ["Contains error-like content"]
  );
});

test("should accept a normal response", () => {
  assert.deepEqual(
    evaluateResponse("This is a normal AI response with enough text."),
    []
  );
});

test("should detect a response containing only spaces", () => {
  assert.deepEqual(evaluateResponse("   "), ["Empty response"]);
});
