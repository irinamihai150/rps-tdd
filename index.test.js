// it("should work", () => {
// 	const left = 1;
// 	const right = 2;

// 	const result = left + right;

// 	expect(result).toBe(3);
// });
function rps() {
  return "left";
}

describe("rock, paper, scissors", () => {
	it("should say left wins for rock vs. scissors", () => {
		const left = "rock";
		const right = "scissors";

		const outcome = rps(left, right);

		expect(outcome).toBe("left");
	});
});