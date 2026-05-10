from fastapi import FastAPI, HTTPException
from yami import Yami
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()


origins = [
   "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)




class Request(BaseModel):
    message: str 

@app.post("/chat")
def consult(request: Request):
    try:
        return Yami().consult(
            input=request.message,
            configuration={"configurable": {"thread_id": "user_1"}}
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

