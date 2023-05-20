/*
There are a number of spherical balloons spread in two-dimensional space.
For each balloon, provided input is the  start  and  end  coordinates of the horizontal diameter.
Since it's horizontal, y-coordinates don't matter and hence the x-coordinates of start and end of the diameter suffice.

Start is always smaller than end. There will be at most 104 balloons.

An arrow can be shot up exactly vertically from different points along the x-axis.
A balloon with x(start) and x(end) bursts by an arrow shot at x if x(start) ≤ x ≤ x(end)
There is no limit to the number of arrows that can be shot. An arrow once shot keeps travelling up infinitely.
The problem is to find the minimum number of arrows that must be shot to burst all balloons.

### Example
[[10,16], [2,8], [1,6], [7,12]] -> 2
Explanation: One way is to shoot one arrow for example at x = 6 (bursting the balloons [2,8] and [1,6])
and another arrow at x = 11 (bursting the other two balloons).

*/

"use strict";

var findMinArrowShots = function(points) {
    if (points.length < 2) {
        return points.length;
    }

    points.sort((p1, p2)=> p1[0] - p2[0]);
    
    let count = 1;
    let end = points[0][1];
	// if end is Number.MIN_SAFE_INTEGER, count's intial value is 0
    
    for (let i = 1; i < points.length; ++i) {
        const point = points[i];
        
        if (end >= point[0]) {
            end = Math.min(end, point[1]);
        } else {
            count++;
            end = point[1];
        }
    }
    
    return count;
};

console.log(findMinArrowShots([[10,16], [2,8], [1,6], [7,12]]));