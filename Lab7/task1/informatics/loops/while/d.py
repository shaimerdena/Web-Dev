n = int(input())
i = 2
flag = False
while i < n:
    i*=i
    if(i == n):
        print('YES')
        flag = True
if(flag == False):
    print('NO')