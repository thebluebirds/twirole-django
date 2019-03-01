# twirole-django
Website for the classifier. This website is ordered in a typical Django project fashion.

This project is meant to run under [pipenv](https://pipenv.readthedocs.io/en/latest/). If you choose not to run under pipenv, you can install the packages as specified in the Pipfile in conda, or raw via pip.


## Getting started

Once the environment has the necessary dependencies installed, run `python manage.py runserver 0.0.0.0:<PORT>`. This will run the server on whatever port you specify.


## File hierarchy
The project is organized into 5 folders.

`api` - A Django app that contains code pertaining to the API. Exposes a GraphQL endpoint and contains functions to call the [TwiRole](https://github.com/liuqingli/TwiRole) model (see: `twirole.py`). 

`assets` - The static assets directory. By default, these are served on `/static`. Contains Javascript libraries, CSS, and some images such as the spinner and TwiRole logo.

`page` - A Django app that contains page-serving code. This currently only serves one route, as you can see in `views.py`.

`project` - The project configuration folder. This contains the `settings.py` file, which is used to configure the project. **MAKE SURE TO SET DEBUG=False**

`templates` - The HTML template files. Currently, `index.html` is the only file that is served, but it is composed of many templates in `partials`.
