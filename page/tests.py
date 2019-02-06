from django.test import TestCase
from django.urls import reverse


class PageTests(TestCase):
    def test_index(self):
        response = self.client.get(reverse('index'))
        self.assertEqual(response.status_code, 200)
