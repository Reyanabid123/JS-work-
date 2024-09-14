// Test file path: c:\Users\ss\OneDrive\Desktop\road maopppppp\Public\js\1.test.js

// Open file code:
// ...

// Selected Code within the open file (Lines 159-162):
function myFunction() {
  a = 10; // This will change the value of a in the global scope (window object)
  console.log(a); // Outputs: 10
}

// Unit test code for the selected code
test('Should log "10" when calling myFunction', () => {
  // Mock the console.log method
  const consoleLogSpy = jest.spyOn(console, 'log');
  
  // Call the function to be tested
  myFunction();
  
  // Assert that the console.log method was called with "10" as the argument
  expect(consoleLogSpy).toHaveBeenCalledWith(10);
});