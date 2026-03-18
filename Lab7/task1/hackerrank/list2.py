if __name__ == '__main__':
    N = int(input())
    my_list = [] 
    
    for _ in range(N):
        command_args = input().split()
        cmd = command_args[0]
        
        if cmd == "insert":
            idx = int(command_args[1])
            e = int(command_args[2])
            my_list.insert(idx, e)
        elif cmd == "print":
            print(my_list)
        elif cmd == "remove":
            e = int(command_args[1])
            my_list.remove(e)
        elif cmd == "append":
            e = int(command_args[1])
            my_list.append(e)
        elif cmd == "sort":
            my_list.sort()
        elif cmd == "pop":
            my_list.pop()
        elif cmd == "reverse":
            my_list.reverse()