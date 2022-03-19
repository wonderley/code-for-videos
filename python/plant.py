import datetime
import math
import time

class Plant:
    def __init__(self,
        amount_to_water_ml=30, water_freq_hours=24):
        self.amount_to_water_ml = amount_to_water_ml
        self.water_freq_hours = water_freq_hours
        self.last_watered_time_s = time.time()

    def water(self, amount_ml):
        self.last_watered_time_s = time.time()

    def seconds_since_water(self):
        return round(time.time() - p.last_watered_time_s, 2)

if __name__ == '__main__':
    p = Plant()
    print(f'use {p.amount_to_water_ml} mL of water')
    print(f'every {p.water_freq_hours} hours')
    print('watering then waiting a second')
    p.water(30)
    time.sleep(1)
    print(f'last watered {p.seconds_since_water()} seconds ago')
    print('watering again')
    p.water(30)
    print(f'last watered {p.seconds_since_water()} seconds ago')

