#Dictionary: ADT
Maintain set of items each witch a key
- insert(item) (overrite any existing key)
- delete(item)
- search(key) return item with given key
0(log(n)) via AVL
#Pythong: dict
D[key] ~search
D[key]=val ~ insert
del D[key] ~ delete
item = (key,value)
#Motivation
- docdist
- database
- compilers & interpreter
- network router
- substring search
- string common
- file and directory synchronization
- cryptography
#Simple approach
#####Direct-access table
- store items in array, indexed by key
**Badness**
1. keys may not be nonneg integer
2. gigantic memory hog
**Solution**
1. Prehash
- maps keys to nonneg integer
- in theory, keys are finite & discrete (string of bits)
- in Python, hash( x) is prehash of x
- 
- 
2. hashing
- reduce universe of all keys (integers) downto
resonable size m for table
- m = 0(n)

####Chanining 
linked list of collision elements in each slot of hashtable

####Simple uniform hashing
each key is equally likely to be hashed to any slot of the table
independent of where other keys hashing

####Hash functions
1. division method: h(k) = k mode n
2. multiply method: h(k) = [m(kA mod 1)] or [ak mode 2^m] >> 2^(r-m) where m=2^r
3. universal hashing //TODO

####How to choise m?

- want m = 0(n)
    -> a = 0(1)
    
**Idea:** start small: m = 8, grow/shrink s  nessesary

**Solution**:
If n > m: grow table
- m' = m+1: cost of n insert = 0(1+2+3+..+n) = 0(n^2)
- m' = m*2: cost of n insert = 0(1+2+4+8+...+n) = 0(n)

**TABLE DOUBLING**


#####Amortization
- operation take "T(n)" amotized
if k operation take <= kT(n)time
##QA
1. Simple uniform hashing?
2. Universal hashing?
3. Why it take constant time if we need to find key in linked list to delete?
**Answer:** 0(1+alpha) if alpha is constant, we can take constant time in all operator of hash table.
4. Amortization?
5. Why we need to rebuilt hash table if we increase m?


