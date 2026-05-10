from decouple import config
from langchain_core.messages import HumanMessage
from langchain_openai import ChatOpenAI
from langgraph.checkpoint.memory import InMemorySaver  
from langchain.agents import create_agent
from langchain.tools import tool
from rag import search_db


API_KEY=config('OPEN_AI_KEY')
TEMPREATURE = 0.1
MAX_TOKENS = 1000
REASONING_EFFORT="low"
MAX_RETRIES=2
MODEL="gpt-5-mini"

with open("instructions.md","r") as file:
    INSTRUCTIONS = file.read()





checkpointer = InMemorySaver()


@tool
def check_rag(msg: str) -> str:
    """Search the RAG database for content relevant to the yu gi oh game , other th"""
    result = search_db(msg)
    if result is None:
        return "not found"
    context = "\n".join([doc.page_content for doc, score in result])
    return context


class Yami :
    def __init__(self):
        self.llm = ChatOpenAI(api_key=API_KEY, model=MODEL,temperature=TEMPREATURE)
        self.agent = create_agent(
            model=self.llm,
            system_prompt=INSTRUCTIONS,
            checkpointer=checkpointer,
            tools=[check_rag],
            debug=True,
            
        )
       
    
    def consult(self, input: str, configuration: dict):
        res = self.agent.invoke(
            {"messages": [HumanMessage(content=input)]},
            config=configuration
        )
        return res["messages"][-1].content
  
        



