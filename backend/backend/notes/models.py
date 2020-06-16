from django.db import models

# Create your models here.
class Note(models.Model):
    title=models.CharField(max_length=150)
    content=models.TextField()
    created=models.DateTimeField(auto_now_add=True)
    updated=models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.title}"
