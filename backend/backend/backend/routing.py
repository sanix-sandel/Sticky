from channels.routing import ProtocoleTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
import notes.routing


application=ProtocoleTypeRouter({
    "websocket":AuthMiddlewareStack(
        URLRouter(
            notes.routing.websocket_urlpatterns
        )
    )
})
