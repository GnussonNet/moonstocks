build:
	cd client && $(MAKE) build

run:
	ENV=production docker-compose -f docker-compose.yml up -d

stop:
	docker-compose -f docker-compose.yml down

delete: 
	docker rmi client/

clean:
	docker system prune -a -f