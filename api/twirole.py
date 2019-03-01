"""
Runs the Twirole model.
"""

from subprocess import run
from json import loads
from re import match


# Classifies the given twitter_handle using the TwiRole model. We may be able
# to import the TwiRole model in the future, but for now it simply runs it in
# a separate shell.
def classify(twitter_handle):
    proc = run(['./classify.sh', twitter_handle],
               # cwd='/Users/kkworden/Code/school/TwiRole',
               cwd='/home/cs4624s19_role/TwiRole',
               capture_output=True)

    # Parse the TwiRole command-line output using regex
    matches = match(r'(.+?)({.*})', proc.stdout.decode('utf-8'))

    if matches:
        return loads(matches.group(2))
    else:
        raise ValueError('Unable to parse TwiRole classifer output.')
