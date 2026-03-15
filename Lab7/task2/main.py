from models import Apple, Banana

def main():
    a = Apple("Apple", "Red", 2.50, "Honeycrisp")
    b = Banana("Banana", "Yellow", 1.20, "Ripe")

    fruits = [a, b]

    for fruit in fruits:
        print(fruit)
        print(fruit.get_description())
        print(f"Tax: {fruit.calculate_tax()}")
        print("-" * 10)

if __name__ == "__main__":
    main()