init-run: init run

init:
	docker-compose build && docker-compose run app yarn install && docker-compose run app yarn build
run:
	docker-compose run app yarn start