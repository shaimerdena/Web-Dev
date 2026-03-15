class Fruit:
    def __init__(self, name, color, cost):
        self.name = name
        self.color = color
        self.cost = cost

    def get_description(self):
        return f"This {self.name} is {self.color}."

    def calculate_tax(self, rate=0.05):
        return self.cost * rate

    def __str__(self):
        return f"Name: {self.name}\nColor: {self.color}\nCost: {self.cost}"

class Apple(Fruit):
    def __init__(self, name, color, cost, variety):
        super().__init__(name, color, cost)
        self.variety = variety

    def get_description(self):
        return f"This {self.variety} apple is known for its crisp texture."

class Banana(Fruit):
    def __init__(self, name, color, cost, ripeness):
        super().__init__(name, color, cost)
        self.ripeness = ripeness

    def peel(self):
        return f"Peeling the {self.ripeness} banana..."