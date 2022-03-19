def ticket_prices(ages):
    prices = []
    group_discount = len(ages) >= 5
    for age in ages:
        ticket_cost = 10
        if age >= 65:
            ticket_cost = 8
        if group_discount:
            ticket_cost *= 0.8
        prices.append(ticket_cost)
    return prices
        
print(ticket_prices([10, 21]))
print(ticket_prices([68, 11]))
print(ticket_prices([19, 22, 45, 27, 68]))


