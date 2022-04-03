class Product:
    def __init__(self, id):
        self.id = id

class Order:
    def __init__(self, id, product_id):
        self.id = id
        self.product_id = product_id

def join_orders_and_products(orders, products):
    combined = []
    # An index that maps product IDs to orders
    pids_to_os = {}
    for o in orders:
        orders = pids_to_os.get(o.product_id)
        if orders == None:
            orders = []
        orders.append(o)
        pids_to_os[o.product_id] = orders
    for p in products:
        if not p.id in pids_to_os:
            continue
        product_orders = pids_to_os[p.id]
        for o in product_orders:
            combined.append((o, p))
    return combined

if __name__ == '__main__':
    products = [
        Product(0), Product(1), Product(2)
    ]
    orders = [
        Order(0, 0), Order(1, 0),
        Order(2, 1), Order(3, 1),
    ]
    res = join_orders_and_products(orders, products)
    for o, p in res:
        print(f'order {o.id} for product {p.id}')