### Development

# Builds the image
build-development:
	cd client && $(MAKE) build-development

# Runs the image
run-development:
	ENV=development docker-compose -f docker-compose-development.yml up -d

# Stops the image
stop-development:
	docker-compose -f docker-compose-development.yml down -v --rmi all



### Production

# Builds the image
build-production:
	cd client && $(MAKE) build-production

# Runs the image
run-production:
	ENV=production docker-compose -f docker-compose-production.yml up -d

# Stops the image
stop-production:
	docker-compose -f docker-compose-production.yml down

# Deletes the image
delete-production: 
	docker rmi client-production -f



### General

# Cleaning docker system
clean:
	docker system prune -a -f