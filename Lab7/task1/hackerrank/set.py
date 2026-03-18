def average(array):
    plants = set()
    for i in array:
        plants.add(i)
    return sum(plants)/len(plants)
    

if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))
    result = average(arr)
    print(result)