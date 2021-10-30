build:
	cd client && $(MAKE) build

run:
	ENV=development docker-compose -f docker-compose.yml up -d

stop:
	docker-compose -f docker-compose.yml down

clean:
	docker system prune -a -f