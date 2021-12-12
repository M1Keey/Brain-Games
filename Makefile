#Makefile
install: #installing dependencies
	npm ci
brain-games: #running project
	node bin/brain-games.js
publish: #project publication
	npm publish --dry-run
make lint: #running linter
	npx eslint .
