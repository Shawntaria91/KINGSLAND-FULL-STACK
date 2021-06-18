let expect = require("chai").expect;

let mathEnforcer = {
	multiplyBy10: function (num) {
		if (typeof num !== "number") {
			return undefined;
		}
		return num * 10;
	},
	stringMultiplyBy3point5: function (num) {
		if (typeof num !== "number") {
			return undefined;
		}
		return String(num * 3.5);
	},
	multiplyTwoNums: function (num1, num2) {
		if (typeof num1 !== "number" || typeof num2 !== "number") {
			return undefined;
		}
		return num1 * num2;
	},
};

describe("Tests for this task", function () {
	//multiplyBy10() tests:
	describe("Check the multiplyBy10 function input", function () {
		it("with a string - undefined", function () {
			let result = mathEnforcer.multiplyBy10("10");
			expect(result).to.be.undefined;
		});

		it("with positive number", function () {
			let result = mathEnforcer.multiplyBy10(10);
			expect(result).to.equal(100);
		});

		it("with negative number", function () {
			let result = mathEnforcer.multiplyBy10(-10);
			expect(result).to.equal(-100);
		});

		it("with floating number", function () {
			let result = mathEnforcer.multiplyBy10(3.12);
			expect(result).to.be.closeTo(31.2, 0.01);
		});
	});
	//() tests:
	describestringMultiplyBy3point5(
		"Check the stringMultiplyBy3point5 function input",
		function () {
			it("with a string - undefined", function () {
				let result = mathEnforcer.stringMultiplyBy3point5("3.5");
				expect(result).to.be.undefined;
			});

			it("with positive number", function () {
				let result = mathEnforcer.stringMultiplyBy3point5(20);
				expect(result).to.equal("70");
			});

			it("with negative number", function () {
				let result = mathEnforcer.stringMultiplyBy3point5(-20);
				expect(result).to.equal("-70");
			});

			it("with floating number", function () {
				let result = mathEnforcer.stringMultiplyBy3point5(3.12);
				expect(result).to.equal(10.92);
			});
		}
	);
	//multiplyTwoNums() tests:
	describe("Check the sum function input", function () {
		it("with a 1st input incorrect - undefined", function () {
			let result = mathEnforcer.sum("1", 5);
			expect(result).to.be.undefined;
		});

		it("with a 2nd input incorrect - undefined", function () {
			let result = mathEnforcer.sum(1, "5");
			expect(result).to.be.undefined;
		});

		it("with positive number", function () {
			let result = mathEnforcer.sum(20, 10);
			expect(result).to.equal(200);
		});

		it("with negative number", function () {
			let result = mathEnforcer.sum(-20, 10);
			expect(result).to.equal(-200);
		});

		it("with floating number", function () {
			let result = mathEnforcer.sum(3.12, 3.12);
			expect(result).to.equal(6.24, 0.01);
		});

		it("with floating number", function () {
			let result = mathEnforcer.sum(-3.12, -3.12);
			expect(result).to.equal(-6.24, 0.01);
		});
	});
});
