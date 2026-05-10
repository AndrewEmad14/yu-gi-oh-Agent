from decouple import config
from langchain_openai import OpenAIEmbeddings 
from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import Chroma
import pathlib
import os

API_KEY=config('OPEN_AI_KEY')
embeddings=OpenAIEmbeddings(
    model="text-embedding-3-small",
    api_key=API_KEY
)
pathes=list(pathlib.Path('./data').glob('**/*.pdf'))

load_docs=[]
for path in pathes:
    loader=PyPDFLoader(path)
    load_docs.extend(loader.load())

spiltter=RecursiveCharacterTextSplitter(
    chunk_size=600,
    chunk_overlap=150,
    separators=['\n\n','\n' ,' ','']
)
chunks=spiltter.split_documents(load_docs)


if os.path.exists('./chroma_db'):
    db = Chroma(
        collection_name='my_collection',
        embedding_function=embeddings,
        persist_directory='./chroma_db'
    )
else:
    db = Chroma.from_documents(
        chunks,
        embeddings,
        collection_name='my_collection',
        persist_directory='./chroma_db'
    )

def search_db(prompt):
    result = db.similarity_search_with_score(prompt ,k=3)
    if not result:
        return None
    else:
        return result