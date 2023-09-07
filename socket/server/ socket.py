# #!/usr/bin/env python

# import asyncio
# import websockets

# class Sockets_Server :
#     def __init__(self, host, port) :
#         self.host = host
#         self.port = port
    
#     async def handler(websocket):
#         while True:
#             message = await websocket.recv()
#             print(message)

#     # 创建socket
#     async def creatSocket(self):
#         async with websockets.serve(self.handler, self.host, self.port):
#             await asyncio.Future()  # run forever 

#     def run(self):
#         try :
#             print(f'websocket server is alive! {self.host}:{self.port}')
#             asyncio.run(self.creatSocket())
#         finally:
#            print('websocket server has error!')


# if __name__ == "__main__":
#     Sockets_Server('127.0.0.1', 10099).run()
    

#!/usr/bin/env python

import asyncio
import websockets

async def hello(websocket):
    name = await websocket.recv()
    print(f"<<< {name}")

    greeting = f"Hello {name}!"

    await websocket.send(greeting)
    print(f">>> {greeting}")

async def main():
    async with websockets.serve(hello, "127.0.0.1", 10099):
        await asyncio.Future()  # run forever

if __name__ == "__main__":
    asyncio.run(main())