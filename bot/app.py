from fastapi import FastAPI, Request, HTTPException
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from langchain_helper import generate_grocery_list
import json
import requests

app = FastAPI()  

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000",'https://legally-7re2.vercel.app'], 
    allow_methods=["*"],  
    allow_headers=["*"],  
)

@app.post('/chat')
async def generate_grocery_list_route(request: Request):
    try:
        data = await request.json()
    except json.JSONDecodeError:
        raise HTTPException(status_code=400, detail="Invalid JSON")

    message = data.get('message')

    print(message)
    response = generate_grocery_list(message)
    print(response)
    return response

@app.post('/talk')
async def talk(request: Request):

    try:
        data = await request.json()
    except json.JSONDecodeError:
        raise HTTPException(status_code=400, detail="Invalid JSON")
    phone = data.get('phone')
    
    # Headers
    headers = {
        'Authorization': "",
        'Access-Control-Allow-Origin': '*'
    }

    # Full data
    data = {
        'phone_number': phone,
        'task': 'Namaste, welcome to LawExpert Associates. I\'m Raksha, the AI legal assistant. How can I assist you with your legal query today?',
        'voice': None,
        'request_data': {},
        'voice_settings': {
            'speed': 1
        },
        'interruption_threshold': None,
        'start_time': None,
        'transfer_phone_number': None,
        'answered_by_enabled': False,
        'from': None,
        'first_sentence': None,
        'record': False,
        'max_duration': 30,
        'model': 'enhanced',
        'language': 'ENG'
    }

    # API request 
    response = requests.post('https://api.bland.ai/call', json=data, headers=headers)
    print(response)
    return response.json()