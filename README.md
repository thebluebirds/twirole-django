# twirole-django
Website for the classifier. This website is ordered in a typical Django project fashion.

This project is meant to run under [pipenv](https://pipenv.readthedocs.io/en/latest/). If you choose not to run under pipenv, you can install the packages as specified in the Pipfile in conda, or raw via pip.


## Configuration (development)

This project requires a few things to be installed:

1. [Pipenv](https://pipenv.readthedocs.io/en/latest/)
2. [NPM](https://nodejs.org/en/download/)
3. [Python 3.7+](https://www.python.org/downloads/release/python-372/)

Now run the following commands from this directory:
1. `pipenv install`
2. `npm install`

In the `project/settings.py` file, there is a Python variable **TWIROLE_DIR**. This must point to a valid TwiRole classifier directory on the local file system.

As can be seen in the `api/twirole.py` script, it runs the `./classify.sh` script in the TwiRole classifier. This script should be adjusted to meet your configuration needs.
However, this project assumes that `./classify.sh` will correctly classify a user. 

## Running the server

Once properly configured, you can run the script:

`./runserver.sh`

**DEBUG** and **PORT** are variables configurable from within `runserver.sh`.

## File hierarchy
The project is organized into 5 folders.

`api` - A Django app that contains code pertaining to the API. Exposes a GraphQL endpoint and contains functions to call the [TwiRole](https://github.com/liuqingli/TwiRole) model (see: `twirole.py`).

`assets` - The static assets directory. By default, these are served on `/static`. Contains Javascript libraries, CSS, and some images such as the spinner and TwiRole logo.

`page` - A Django app that contains page-serving code. This currently only serves one route, as you can see in `views.py`.

`project` - The project configuration folder. This contains the `settings.py` file, which is used to configure the project. **MAKE SURE TO SET DEBUG=False**

`templates` - The HTML template files. Currently, `index.html` is the only file that is served, but it is composed of many templates in `partials`.
