import { answerToQuestion } from '~/index';

test("Answer to question", () => {
  expect(answerToQuestion(20, 22)).toBe("The result is 42");
});
