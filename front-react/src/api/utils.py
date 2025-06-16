from flask import jsonify

class APIException(Exception):
    status_code = 400

    def __init__(self, message, status_code=None, payload=None):
        Exception.__init__(self)
        self.message = message
        if status_code is not None:
            self.status_code = status_code
        self.payload = payload

    def to_dict(self):
        rv = dict(self.payload or ())
        rv['message'] = self.message
        return rv

def generate_sitemap(app):
    
    sitemap = []
    for rule in app.url_map.iter_rules():
        
        if "GET" in rule.methods and any(endpoint.startswith('api.') for endpoint in [rule.endpoint]):
            sitemap.append({
                "path": rule.rule,
                "endpoint": rule.endpoint,
                "methods": list(rule.methods - {"HEAD", "OPTIONS"})
            })
    return sitemap