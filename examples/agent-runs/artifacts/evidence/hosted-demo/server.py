from http.server import BaseHTTPRequestHandler, HTTPServer
import json
class Handler(BaseHTTPRequestHandler):
 def do_GET(self):
  rows=[{'id':'R1','file':'receipt-1.pdf'},{'id':'R2','file':None},{'id':'R3','file':'receipt-3.pdf'}]
  body=json.dumps({'synthetic':True,'rows':rows,'missing':[r['id'] for r in rows if not r['file']]}).encode()
  self.send_response(200);self.send_header('Content-Type','application/json');self.end_headers();self.wfile.write(body)
HTTPServer(('127.0.0.1',8769),Handler).serve_forever()
