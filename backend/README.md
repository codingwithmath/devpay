<h1 align="center">
Devpay - Backend
</h1>

<p align="center">This project is the result of an assignment in college.</p>

<p align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License MIT">
  </a>
</p>

## About This Project

An CRUD API that register users based on their GitHub profile and professions. The main goal is to use OO and SOLID.

## Techs
- **Typescript**
- **Node Js**
- **Express**
- **PostgreSQL**
- **Docker**
## Getting started

### Installing

**Cloning the Repository**

```
$ git clone https://github.com/codingwithmath/devpay.git

$ cd devpay/backend
```

**Installing dependencies**

```
$ npm install
```
**running migrations**
```bash
$ docker-compose up

$ docker-compose exec postgres psql -U postgres -d postgres -1 -f /var/lib/postgresql/data/001_create_table_up.sql

$ docker-compose exec postgres psql -U postgres -d postgres -1 -f /var/lib/postgresql/data/002_create_table_up.sql

```
With all dependencies installed, the Database running and the environment properly configured, you can now run the server:

```
$ npm run dev
```

