#!/bin/bash

DEBUG=1
PORT=3001

if [ $DEBUG ]; then
    echo "Running in DEBUG mode."
    ./node_modules/.bin/webpack --config webpack.config.js --watch & python manage.py runserver 0.0.0.0:$PORT
else
    ./node_modules/.bin/webpack --config webpack.config.js
    python manage.py runserver 0.0.0.0:$PORT
fi
