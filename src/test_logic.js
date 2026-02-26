// src/test_logic.js

function calculateResults(scores) {
    const total = Object.values(scores).reduce((acc, curr) => acc + curr, 0);
    const percentage = (total / 50) * 100;

    const sortedCategories = Object.entries(scores).sort(([, a], [, b]) => a - b);
    const lowestScore = sortedCategories[0][1];
    const weakestLinks = sortedCategories
      .filter(([, score]) => score === lowestScore)
      .map(([category]) => category);

    return {
      percentage: Math.round(percentage),
      weakestLinks,
      total,
    };
}

// Test cases
const tests = [
    {
        name: "All 5s",
        input: { Market: 5, Team: 5, Product: 5, Traction: 5, Vision: 5 },
        expected: { percentage: 50, weakestLinks: ["Market", "Team", "Product", "Traction", "Vision"], total: 25 }
    },
    {
        name: "All 10s",
        input: { Market: 10, Team: 10, Product: 10, Traction: 10, Vision: 10 },
        expected: { percentage: 100, weakestLinks: ["Market", "Team", "Product", "Traction", "Vision"], total: 50 }
    },
    {
        name: "Weak Team",
        input: { Market: 8, Team: 3, Product: 7, Traction: 6, Vision: 9 },
        expected: { percentage: 66, weakestLinks: ["Team"], total: 33 }
    },
    {
        name: "Two weak links",
        input: { Market: 8, Team: 3, Product: 3, Traction: 6, Vision: 9 },
        expected: { percentage: 58, weakestLinks: ["Team", "Product"], total: 29 }
    }
];

let passed = 0;
tests.forEach(test => {
    const result = calculateResults(test.input);
    const weakestLinksMatch = JSON.stringify(result.weakestLinks.sort()) === JSON.stringify(test.expected.weakestLinks.sort());

    if (result.percentage === test.expected.percentage && weakestLinksMatch && result.total === test.expected.total) {
        console.log(`PASS: ${test.name}`);
        passed++;
    } else {
        console.error(`FAIL: ${test.name}`);
        console.error(`Expected:`, test.expected);
        console.error(`Got:`, result);
    }
});

if (passed === tests.length) {
    console.log("All tests passed!");
    process.exit(0);
} else {
    console.error("Some tests failed.");
    process.exit(1);
}
