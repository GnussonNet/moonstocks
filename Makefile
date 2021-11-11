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
	cd client && $(MAKE) build-local && cd ../server && $(MAKE) build-local && cd ../nginx && $(MAKE) build-local

# Runs the image
run-local:
	ENV=production SERVER_URL='http://localhost:8080/api/v1' MONGO_URL='mongodb://mongo:27017/moonstocks' ACCESS_TOKEN_SECRET=3f8e3373abca370e8ac2c0c1df4df7d518e136806dd571ab9117581c70568adf3d65e0225dd35b3d4d6e4793895c59a8a1258364b85d15d43cff018a9e042e4c REFRESH_TOKEN_SECRET=cfd30d6ca90bcec3a59306dab9b927955e69ba0c5b772f0453f670df701645a6e45cc1838aea94be339b118f47e273f01d581d8596eea5748f07128de16e3961 docker-compose -f docker-compose-local.yml up -d

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