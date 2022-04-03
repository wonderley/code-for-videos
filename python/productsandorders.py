class Product:
    def __init__(self, id):
        self.id = id

class Order:
    def __init__(self, id, product_id):
        self.id = id
        self.product_id = product_id

def join_orders_and_products(orders, products):
    combined = []
    for o in orders:
        for p in products:
            if p.id == o.product_id:
                combined.append((o, p))
    return combined

if __name__ == '__main__':
    products = [
        Product(0), Product(1), Product(2)
    ]
    orders = [
        Order(0, 0), Order(1, 0),
        Order(2, 1), Order(3, 1)
    ]
    res = join_orders_and_products(orders, products)
    for o, p in res:
        print(f'order {o.id} for product {p.id}')