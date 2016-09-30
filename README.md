
# Django Front-end Integration

This is not a plugin (library) for Django but `Sample app` to explain my thought. 

[http://blog.tomoyukikashiro.me/post/I-will-build-frontend-backend-separately/](http://blog.tomoyukikashiro.me/post/I-will-build-frontend-backend-separately/)

I think It is better to build front-end source code and back-end source code separately.
This prject do that.

# Structure

Django project is so simple. This has 3 apps (app1, app2 and common) and 2 pages.
Front-end source code comes from [web-starter-kit](https://github.com/google/web-starter-kit) which is best scaffold for front-end.

If you want to know [web-starter-kit](https://github.com/google/web-starter-kit) please check that repository.

## Directory

```
static
├── favicon.ico
├── images
├── robots.txt
├── scripts
├── service-worker.js
├── styles
└── tests

staticfiles
└── .gitkeep

.tmp
└──

```

**static**

This directory has all static files.

**staticfiles**

Build script generate code into this directory for production.

**.tmp**

front-end source code will be generate into this directory in development.

## Process

The build process which is defined in `bin/collectstatic` like this...

1. `npm run build` call gulp build task which generate code into `.tmp` directory
2. `./manage.py collectstatic` copy above generated front-end code into `staticfiles`

# Prepare

```
$ pip install -r requirements.txt
$ npm install
$ ./manager.py migrate
$ ./manager.py runserver
```

# Development

To compile front-end source code continuously.

```
$ npm run watch
```

# Build

```
$ ./bin/collectstatic
```

You know Django has `./manage.py collectstatic` to build fron-end source code but we manage front-end source code outside of Django (`static` directory). So we have to run that command after front-end build process. This script wrap those command.

## Run scripts tests

```
# run test only 1 time.
$ npm test

# watch file and if the file is updated re-run it automatically.
$ npm run test-watch
```
