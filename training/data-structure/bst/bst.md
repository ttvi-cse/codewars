##Runway Reservations System
 - Airport with a single runway
 - Reservations for future landings
 - Reserve requests specifies landing time t
 - Add t to the set R of landing time fi no other landings are scheduled
within k minutes
 - Remove from set R after plane landed
###Example:
 k = 3
      41.2 49   56.4
 -|----}----}----}--->
  now 37              time
  53 ok
  44 not allowed
  20 not allowed(past)
###Sol:
 - Unsorted list/array
     + 0(1) to insert but 0(n) to find position
 - Sorted array
     + Find smallest i such that r[i] >= t in 0(log(n)) time
     + Compare r[i] and r[i-1] against in 0(1) time
     + Actual insertion (shifting) -> 0(n) time
 - Sorted list
 - Heaps: min/max
     + element that is < k or > k from t take 0(n) time

=> find the way to fast insert element to sorted array => bst

##Binary Search Trees
      30
   17     40
14     20
note x key(x)
###pointers:
- parent(x)
- left(x)
- right(x)
unlike the heap
###Invariant: For all nodes x, if y is in the left of subtree of x key(y) <= key(x)
y is the right .... key(y) >= key(x)
###Insert
  insert 49  49
  insert 79  49
                 79
  insert 46   49
            46   79
  insert 41   49
            46  79
          41
find_min()
next_layer(x)
##New requirement
  + rank(t): how many plances are scheduled to land at time <= t
Argument the bst structure
           49(5+1)
    46(1+1)       79(3)
43(1)        64(1)      83(1)
  insert or delete modify "size" numbers - subtree size

What lands before t? 0(h)
    1. Walk down tree to find deserved time
    2. Add m the nodes  that are smaller
    3. Add m the subtrees size to the left
  
  
