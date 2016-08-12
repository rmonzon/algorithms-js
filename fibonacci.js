//Function to calculate the Nth Fibonacci number recursively
function fibonacci (n) {
	if (n <= 1) {
		return n;
	}
	return fibonacci(n - 1) + fibonacci(n - 2);
}

//Function to calculate the Nth Fibonacci number using DP
function fibonacciDP(n) {
	var nums = [1, 1, 2];
	for (var i = 3; i < n; ++i) {
		nums[i] = nums[i - 1] + nums[i - 2];
	}
	return nums[n-1];
}
