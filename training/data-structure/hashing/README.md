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

##Rolling hashing ADT
- r.append(c):
    - add char c to end of x
- r.skip(c): delete first char of x (assuming it is c)
- r maintains a string x
    - r(): hash value of x=h(x)
### How to build?
- division method:  h(k) = k mode m. m is random prime number and m > |s|
- treat x as multidigit number a
```angular2html
r.append(c)
    c-> u.a+ ord(c)
    r-> r.a+ord(c) mod m
r.skip:
    u->u-c.a
```
###Karp-Rabin algorithm
```
for c in s: rs.append(c)
for c in t[len(s)] rt.appenn(c)
if (rs==rt):
for i in range(len(s),len(t)):
    rt.skip(t[i-len(s)]
    rt.append(t[i]])
    if(rs()==rt()):
    check whether s == t[i-len(s)+1:i+1]
    if equal: 
        found match
    else:
        happens with probality <= 1/s   
```
**=> 0(1) expected time**

**0(|s|+|t|+#match.|s|)**     
 

 
 
--------------------------------------------------
# Hashing III
- Open addressing
- Uniform hashing analysis
- Cryptographic hashing

##Open addressing
###Probing
- Hash function specifies order of  slot to probe
for a key (for insert/search/delete)
- h : Ux{0,1,..,m-1}
- h(k,1), h(k,2), ...h(k,m-1) to be a permutation of 0,1,..,m-1
####Hash-Insert(T,k)
```angular2html
i=0
repeat
    j = h(k,i)
    if T[j] == NIL
        T[j] = k
        return j
    else i = i + 1
util i == m
error "hash table overflow"    
```
####Hash-Search(T,k)
```angular2html
i = 0
repeat
    j = h(k,i)
    if T[j] == k
        return j
    i = i +1
util T[j] == NIL or i == m
return NIL    
```
##QA
1. Simple uniform hashing?
2. Universal hashing?
3. Why it take constant time if we need to find key in linked list to delete?
**Answer:** 0(1+alpha) if alpha is constant, we can take constant time in all operator of hash table.
4. Amortization?
5. Why we need to rebuilt hash table if we increase m?
6. Why we use two hash in rolling hashing?

