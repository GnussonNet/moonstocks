#
# Development
#

# Build 
build-development:
	cd client && $(MAKE) build-development
	cd server && $(MAKE) build-development

# Run
run-development:
	ENV=development SERVER_URL='http://localhost:8080/api/v1' MONGO_URL='mongodb://mongo:27017/moonstocks' ACCESS_TOKEN_SECRET=3f8e3373abca370e8ac2c0c1df4df7d518e136806dd571ab9117581c70568adf3d65e0225dd35b3d4d6e4793895c59a8a1258364b85d15d43cff018a9e042e4c REFRESH_TOKEN_SECRET=cfd30d6ca90bcec3a59306dab9b927955e69ba0c5b772f0453f670df701645a6e45cc1838aea94be339b118f47e273f01d581d8596eea5748f07128de16e3961 docker-compose -f docker-compose-development.yaml up -d

# Stop
stop-development:
	ENV=development docker-compose -f docker-compose-development.yaml down

# Rebuild
rebuild-development:
	cd client && $(MAKE) build-development
	cd server && $(MAKE) build-development
	make run-development

# Clean
clean-development:
	docker system prune -a -f && docker volume rm $$(docker volume ls)

#
# Local
#

# Build
build-local:
	cd client && $(MAKE) build-local
	cd server && $(MAKE) build

# Run
run-local:
	ENV=local MONGO_URL='mongodb://mongo:27017/moonstocks' docker-compose -f docker-compose-local.yaml up -d

# Stop
stop-local:
	docker-compose -f docker-compose-local.yaml down

#
# Production
#

# Build
build-production:
	cd client && $(MAKE) build-local
	cd server && $(MAKE) build

# Run
run-production:
	ENV=production MONGO_URL='mongodb://mongo:27017/moonstocks' docker-compose -f docker-compose-production.yaml up -d

# Stop
stop-production:
	docker-compose -f docker-compose-production.yaml down