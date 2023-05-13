//blog.jonrshar.pe/2020/Aug/31/js-tdd-ftw.html

// it("should work", () => {
// 	const left = 1;
// 	const right = 2;

// 	const result = left + right;

// 	expect(result).toBe(3);
// });
// function rps() {
//   return "left";
// }

// function rps(left) {
// 	return left === "rock" ? "left" : "right";
// }

// function rps(left, right) {
// 	return left === "rock" ? "left" : right === "paper" ? "left" : "right";
// }

// function rps(left, right) {
// 	return left === "rock" || right === "paper" ? "left" : "right";
// }

// function rps(left, right) {
// 	return (left === "rock" && right === "scissors") ||
// 		(left === "scissors" && right === "paper") ||
// 		(left === "paper" && right === "rock")
// 		? "left"
// 		: "right";
// }

https: function rps(left, right) {
	if (left === right) {
		return "draw";
	}
	return (left === "rock" && right === "scissors") ||
		(left === "scissors" && right === "paper") ||
		(left === "paper" && right === "rock")
		? "left"
		: "right";
}
describe("rock, paper, scissors", () => {
	//first test
	it("should say left wins for rock vs. scissors", () => {
		const left = "rock";
		const right = "scissors";

		const outcome = rps(left, right);

		expect(outcome).toBe("left");
	});
	//second test
	it("should say right wins for scissors vs. rock", () => {
		const left = "scissors";
		const right = "rock";

		const result = rps(left, right);

		expect(result).toBe("right");
	});
	//third test
	it("should say left wins for scissors vs. paper", () => {
		const left = "scissors";
		const right = "paper";

		const result = rps(left, right);

		expect(result).toBe("left");
	});

	// fourth test
	it("should say right wins for paper vs. scissors", () => {
		const left = "paper";
		const right = "scissors";

		const result = rps(left, right);

		expect(result).toBe("right");
	});
	// fifth test
	it("should say left wins for paper vs. rock", () => {
		const left = "paper";
		const right = "rock";

		const result = rps(left, right);

		expect(result).toBe("left");
	});
});

["rock", "paper", "scissors"].forEach((both) => {
	it(`should say draw for ${both} vs. ${both}`, () => {
		expect(rps(both, both)).toBe("draw");
	});
});
