INSTALLED_APPS = [ ..., "blog" ]
TEMPLATES = [ { ..., "APP_DIRS": True, ... } ]
STATIC_URL = "/static/"
MEDIA_URL = "/media/"
MEDIA_ROOT = BASE_DIR / "media"