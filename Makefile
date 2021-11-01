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



### Local

# Builds the image
build-local:
	cd client && $(MAKE) build-local && cd ../nginx && $(MAKE) build-local

# Runs the image
run-local:
	ENV=production docker-compose -f docker-compose-local.yml up -d

# Stops the image
stop-local:
	docker-compose -f docker-compose-local.yml down

# Deletes the image
delete-local: 
	docker rmi client-local -f && docker rmi nginx-local -f



### Production

# Builds the image
build-production:
	cd client && $(MAKE) build-production && cd ../nginx && $(MAKE) build-production

# Runs the image
run-production:
	ENV=production docker-compose -f docker-compose-production.yml up -d

# Stops the image
stop-production:
	docker-compose -f docker-compose-production.yml down

# Deletes the image
delete-production: 
	docker rmi client-production -f && docker rmi nginx-production -f



### General

# Cleaning docker system
clean:
	docker system prune -a -f