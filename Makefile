#Makefile
install: #installing dependencies
	npm ci
brain-even: #running brain-even.js
	node bin/brain-games.js	
brain-games: #running brain-games.js
	node bin/brain-games.js
publish: #project publication
	npm publish --dry-run
make lint: #running linter
	npx eslint .
