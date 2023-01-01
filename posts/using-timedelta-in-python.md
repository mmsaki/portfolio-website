---
title: "Using `timedelta` can make it easier to work with time."
date: "2023-01-01"
author: "Meek Msaki"
---

## Example: Calculate how long ago since the last bus left the station give a bus schedule and the current time

Given a string array `schedule` that contains all the bus times. Find how long ago the last bus left given a current `time`.

Input: schedule = ["00:00", "08:30", "12:00", "14:30", "18:45"], time = "14:00"

Output: 120 minutes

Explanation: The last bus left at 12:00pm, which was 2 hours ago

One way to solve this problem is to brute force and use modulo 60 while subtracting time differences. However this would take a lot of time and you can easily introduce bugs. Using `timedelta` can make it easier to work with time.

## Approach

One way to solve this problem is to brute force and use modulo 60 to find remaining minutes while subtracting time differences. However this would take a lot of time and you can easily introduce bugs. Using `timedelta` can make it easier to work with time.

Here's my approach. First you should convert our schedule from string format to a datetime format importing `timedelta` from `datetime`. Timedelta is useful when calculating time. After this step, you would need a condition statement to check if the current `time` is greater than the schedule bus times. When the condition is broken, you can return the differences between the current time and last bus scheduled time.

```bython
>>> from datetime import timedelta
>>> schedule = schedule = ["00:00", "08:30", "12:00", "14:30", "18:45"]
>>> time = "14:00"
>>> s = []
>>> for i in schedule:
...     s.append(i.split(":"))
...     
... 
>>> s
[['00', '00'], ['08', '30'], ['12', '00'], ['14', '30'], ['18', '45']]
>>> tdelta = []
>>> for i in range(len(s)-1):
...     hr, m = s[i]
...     tdelta.append(timedelta(hours=int(hr), minutes=int(m)))
...     
... 
>>> tdelta
[datetime.timedelta(0), datetime.timedelta(seconds=30600), datetime.timedelta(seconds=43200
), datetime.timedelta(seconds=52200)]
>>> hour, minute = time.split(":")
>>> time = timedelta(hours=int(hour), minutes=int(minute))
>>> time
datetime.timedelta(seconds=50400)
>>> prev_bus_diff = [] 
>>> for t in tdelta:
...     if time > t:
...         prev_bus_diff.append(time-t)
...         
...     
... 
>>> ans = min(prev_bus_diff).seconds
>>> ans
7200
>>> int(ans) / 60 # Convert to minutes
120.0
```
