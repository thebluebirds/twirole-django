"""
Runs the Twirole model.
"""

from subprocess import run
from json import loads
from re import match


def classify(twitter_handle):
    proc = run(['./classify.sh', twitter_handle],
               cwd='/home/cs4624s19_role/TwiRole',
               capture_output=True)

    matches = match(r'(.+?)({.*})', proc.stdout.decode('utf-8'))

    if matches:
        return loads(matches.group(2))
    else:
        raise ValueError('Unable to parse TwiRole classifer output.')
