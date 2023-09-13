protoc -I=. message.proto 
  --js_out=import_style=commonjs:./ts-example 
  --grpc-web_out=import_style=typescript,mode=grpcwebtext:./ts-example