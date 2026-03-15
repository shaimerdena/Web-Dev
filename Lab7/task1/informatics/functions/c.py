def f(x, y):
    if x == 1 and y == 1:
        return 1
    else:
        return 0

x, y = map(int, input().split())
print(f(x, y))