from django.db import models
from django.contrib.auth.models import User
class Booking(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)  # ผู้จอง
    service = models.CharField(max_length=255)  # บริการที่จอง
    date = models.DateField()  # วันที่จอง
    time = models.TimeField()  # เวลาที่จอง
    created_at = models.DateTimeField(auto_now_add=True)  # เวลาที่ทำรายการ

    def __str__(self):
        return f"{self.user.username} - {self.service} ({self.date} {self.time})"
'''
class User(models.Model):
    username = models.CharField(max_length=150, unique=True)
    password = models.CharField(max_length=128)
    email = models.EmailField(blank=True, null=True)  # Optional

    def __str__(self):
        return self.username

class Booking(models.Model):
    service = models.CharField(max_length=200)
    date = models.DateField()
    time = models.TimeField()
    customer = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.service} on {self.date} at {self.time}"
'''