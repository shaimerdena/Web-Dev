import math
AB = int(input())
BC = int(input())
AC = math.sqrt(AB**2 + BC**2)
angleC = math.atan(AB/BC)
angle_degrees = round(math.degrees(angleC))
print(f"{round(angle_degrees)}{chr(176)}")
