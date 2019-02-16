"""
Runs the Twirole model.
"""

from re import search
from subprocess import (
    run,
    PIPE,
)


def twirole_classify(twitter_handle):
    cmd = f'\'source activate py27; ./classify.sh {twitter_handle}\''
    proc = run(['sh', '-c', cmd],
               cwd='/Users/kkworden/Code/school/Twirole',
               capture_output=True)

    matches = search(r'\[(.*)\]', proc.stdout.decode('utf-8'))
    male, female, brand = 0, 0, 0

    for raw_output in matches.group(1).split(', '):
        if raw_output.startswith('Male'):
            male = float(raw_output.replace('Male: ', '')[:-1])
        elif raw_output.startswith('Female'):
            female = float(raw_output.replace('Female: ', '')[:-1])
        elif raw_output.startswith('Brand'):
            brand = float(raw_output.replace('Brand: ', '')[:-1])
        else:
            raise ValueError('Unable to parse TwiRole classifer output.')

    return {
        'male': male,
        'female': female,
        'brand': brand,
    }
