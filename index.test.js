// it("should work", () => {
// 	const left = 1;
// 	const right = 2;

// 	const result = left + right;

// 	expect(result).toBe(3);
// });
// function rps() {
//   return "left";
// }


function rps(left) {
	return left === "rock" ? "left" : "right";
}
describe("rock, paper, scissors", () => {
	// it("should say left wins for rock vs. scissors", () => {
	// 	const left = "rock";
	// 	const right = "scissors";

	// 	const outcome = rps(left, right);

	// 	expect(outcome).toBe("left");
	// });

  it("should say right wins for scissors vs. rock", () => {
		const left = "scissors";
		const right = "rock";

		const result = rps(left, right);

		expect(result).toBe("right");
	});
});