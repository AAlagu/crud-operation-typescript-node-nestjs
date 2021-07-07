## To install nestjs

$ npm i -g @nestjs/cli

## To create new project

nest new project-name
eg: $ nest new server

cd server
$ npm install
$ npm run start

or
$ yarn run start

$nest
it will list out all commands

## Modules:

Generate a module (nest g mo) to keep code organized and establish clear boundaries (grouping related components)
$ nest g mo path
$ nest g mo modules/employee

## Controllers:

Generate a controller (nest g co) to define CRUD routes (or queries/mutations)
$ nest g co path
$ nest g co modules/employee employeecontroller --no-spec
where --no-spec flag is for not writting the test

## Routing in Nestjs:

Go into modules first and check the controllers.
The controllers have the process(or method) to execute.

## Service:

Generate a service (nest g s) to implement & isolate business logic
Create service and injecting the service and depends on service , the controller will work on it.

## Entity:

Generate an entity class/interface to represent the resource data shape

## Validation: class-validator in DTO

to validate the data, create dto folder. There you can create class and add some properties and have class validator.

# DTO:

Generate Data Transfer Objects (or inputs) to define how the data will be sent over the network

install yarn add class-validator

Using pipe, we can achieve the validation.
We will pass the dto through the pipes and validation will happen.
Pipes are something that executed on the request.

install yarn add class-transformer

## typeorm:

Typeorm is definitely the most mature Object Relational Mapper (ORM) available in the node.js world. Since it's written in TypeScript, it works pretty well with the Nest framework.

yarn add @nestjs/typeorm typeorm postgres

error: pg is not installed
for that,
yarn remove postgres
yarn add pg
