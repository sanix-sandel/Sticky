from django.urls import path
from . import consumers
from channels.auth import AuthMiddlewareStack
import notes.routing

websocket_urlpatterns=[
    path('ws/notes', consumers.NoteConsumer)
]
