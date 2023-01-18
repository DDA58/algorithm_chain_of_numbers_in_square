init-run: init yarn-build run

init:
	docker-compose build && docker-compose run app yarn install
run:
	docker-compose run app yarn start
yarn-build:
	docker-compose run app yarn build