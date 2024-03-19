import streamlit as st
from langchain.llms import OpenAI
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain
from langchain.chains import SequentialChain
from langchain_openai import ChatOpenAI


from dotenv import load_dotenv
import os

load_dotenv()


def generate_grocery_list(message):
    llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0, openai_api_key=os.getenv("OPENAI_API_KEY"))
    message = message
    prompt_template_grocery = PromptTemplate(
        input_variables = ['message'], 
        template ='You are Legally, the AI chat assistant and you have knowledge specifically related to Indian law and constitution.{message}, Print the message in the same language in whichinput has been provided. Dont answer irrelevant question which is not related to our context. And be specifically to Indian constitution.'
    )

    grocery_chain = LLMChain(llm=llm, prompt=prompt_template_grocery, output_key="response")

    response = grocery_chain({'message':message})
    
    return response