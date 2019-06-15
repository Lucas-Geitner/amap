module.exports = {
    "roots": [
        "<rootDir>/pages",
        "<rootDir>/components",
        "<rootDir>/__tests__",
    ],
    "transform": {
        "^.+\\.tsx?$": "babel-jest"
    },
    collectCoverage: true,
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    testPathIgnorePatterns: ["/node_modules/"],
}
