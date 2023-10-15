module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
	overrides: [
		{
			env: {
				node: true
			},
			files: [".eslintrc.{js,cjs}"],
			parserOptions: {
				sourceType: "script"
			}
		}
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module"
	},
	plugins: ["@typescript-eslint"],
	rules: {
		"@typescript-eslint/no-empty-function": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"comma-dangle": ["error", "never"],
		indent: ["error", "tab"],
		quotes: ["error", "double"],
		semi: ["error", "never"],
		"no-empty": "error",
		curly: "error",
		eqeqeq: ["error", "smart"],
		"require-await": "error",
		"brace-style": "error",
		"no-trailing-spaces": "error",
		"object-curly-spacing": ["error", "always"],
		"space-in-parens": ["error", "never"],
		"func-style": ["error", "declaration", { allowArrowFunctions: true }],
		"arrow-spacing": ["error", { before: true, after: true }],
		"prefer-const": "error",
		"@typescript-eslint/no-unused-vars": [
			"warn", // or "error"
			{
				argsIgnorePattern: "^_",
				varsIgnorePattern: "^_",
				caughtErrorsIgnorePattern: "^_"
			}
		]
	}
}
