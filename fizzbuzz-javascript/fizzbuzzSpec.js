describe('Fizzbuzz knows', function(){

	var fizzbuzz;

	beforeEach(funtion {
			fizzbuzz = new Fizzbuzz();
	});

	describe('when a number is divisible', function(){

		it('by 3', function(){
				expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
		});

		it('by 5', function(){
			expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
		});

		it('by 15', function(){
			expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
		});

	}); // Close describe

	describe('when number is not divisible', function(){

		it('by 3', function(){
			expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
		});

		it('by 5', function(){
			expect(fizzbuzz.isDivisibleByFive(1)).toBe(false);
		});

		it('by 15', function(){
			expect(fizzbuzz.isDivisibleByFifteen(1)).toBe(false);
		});

	}); // Close describe

	describe('motorhead returns', function(){

		it('"Fizz" when divisible by the number 3', function(){
			expect(fizzbuzz.motorhead(3)).toEqual("Fizz");
		});

		it('"Buzz" when divisible by the number 5', function)({
			expect(fizzbuzz.motorhead(5)).toEqual("Buzz");
		});

		it('"FizzBuzz" when divisible by the number 15', function)({
			expect(fizzbuzz.motorhead(15)).toEqual("FizzBuzz");
		});

	}); //close describe

});