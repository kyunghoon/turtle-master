PORT := 8081

run:
	@echo "open browser to http://localhost:$(PORT)" && \
		node --no-deprecation node_modules/.bin/http-server -p $(PORT) -s -c-1
