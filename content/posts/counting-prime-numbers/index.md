---
title: Counting Prime Numbers
description: Counting prime numbers is a common problem in computer science. In this post, we'll explore different approaches to count prime numbers and compare their performance.
date: '2024-02-15'
draft: false
slug: '/blogs/counting-prime-numbers'
tags:
  - Python
  - Algorithms
  - Prime Numbers
  - Sieve of Eratosthenes
  - Number Theory
  - Performance
  - Benchmarking
---

Prime numbers are a fundamental concept in number theory and have applications in various fields, including cryptography, computer science, and mathematics. Counting prime numbers is a common problem in computer science, and there are several approaches to solve it. One of the most significant use of prime numbers is in the field of cryptography. In cryptography, prime numbers are used to generate public and private keys for secure communication. In this post, we'll explore different approaches to count prime numbers and compare their performance.

## Brute Force Approach

The brute force approach to count prime numbers involves iterating through each number from 2 to the given limit and checking if it is a prime number. A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. The brute force approach checks each number for divisibility by all numbers less than itself to determine if it is prime.

```python
def is_prime(n):
    if n <= 1:
        return False
    for i in range(2, n):
        if n % i == 0:
            return False
    return True

```

The `is_prime` function takes an integer `n` as input and returns `True` if `n` is a prime number and `False` otherwise. This approach is straightforward but not efficient for large numbers, as it has a time complexity of O(n).

## Sieve of Eratosthenes

The Sieve of Eratosthenes is an ancient algorithm for finding all prime numbers up to a specified limit. It does so by iteratively marking the multiples of each prime number starting from 2. The algorithm consists of the following steps:

1. Create a list of consecutive integers from 2 through n: (2, 3, 4, ..., n).
2. Initially, let p equal 2, the first prime number.
3. Starting from p, enumerate its multiples and mark them as non-prime.
4. Find the next number in the list that is not marked and set it as the new value of p.
5. Repeat steps 3 and 4 until p^2 is greater than n, where p^2 represents the square of the current prime number.

```python
def sieve_of_eratosthenes(n):
    primes = [True] * (n + 1)
    primes[0], primes[1] = False, False
    p = 2
    while p ** 2 <= n:
        if primes[p]:
            for i in range(p * p, n + 1, p):
                primes[i] = False
        p += 1
    return [i for i in range(n + 1) if primes[i]]
```

The `sieve_of_eratosthenes` function takes an integer `n` as input and returns a list of prime numbers up to `n`. This approach has a time complexity of O(n log log n) and is much more efficient than the brute force approach.

## Performance Comparison

To compare the performance of the brute force and Sieve of Eratosthenes approaches, we can use the `timeit` module in Python to measure the execution time of each approach for different input sizes.

```python
import timeit

def test_brute_force():
    return is_prime(1000)

```

### Coming Soon
