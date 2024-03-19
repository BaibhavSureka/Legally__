from astrapy.db import AstraDB, AstraDBCollection
import sys
import dotenv
dotenv.load_dotenv()
sys.path.append("api")
from local_creds import *

astra_db = AstraDB(
    token=ASTRA_DB_APPLICATION_TOKEN,
    api_endpoint=ASTRA_DB_API_ENDPOINT,
)
collection = AstraDBCollection(collection_name="recommendations", astra_db=astra_db)

def get_product(medicine_name):
    response = collection.find_one(filter={"Medicine Name": medicine_name})
    return response["data"]["document"]

def get_product_vector(medicine_name):
    return get_product(medicine_name)["$vector"]

def get_products(pagingState):
    if pagingState is None:
        global res
        res = collection.paginated_find()
    documents = []
    for _ in range(20):
        document = next(res, None)
        if document is not None:
            documents.append(document)
        else:
            break
    return documents

def get_similar_products(vector, count):
    product_list = collection.vector_find(vector=vector, limit=count)
    print(product_list)
    provided_vector_removed_product_list = [
        row for row in product_list if row["$vector"] != vector
    ]
    remove_vector_field = lambda a_dict: {
        key: a_dict[key] for key in ["query"] if key in a_dict
    }
  
    return [remove_vector_field(row) for row in provided_vector_removed_product_list]