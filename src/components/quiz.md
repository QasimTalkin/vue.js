quiz

## In data normalization, which normal form requires eliminatinf of transitive dependencies?

a) 1NF
b) 2NF
c) 3NF
d) This is not required in data normalization

Answer: c 
3NF because it requires eliminating transitive dependencies.

## Whihc is not a benifit for foreign key constraints?

1) They can specift what happens when a record is deleted
2) They force only valid Id to be entered
3) they let you create table in any order you like

Answer: 3
They let you create tables in any order you like, is not a benefit of foreign key constraints.

## What is central Limit Theorem and why is it important?

Answer: The central limit theorem states that the sampling distribution of the sample mean approaches a normal distribution as the sample size increases. It is important because it allows us to make inferences about the population based on the sample.

## Whihc of the following is classification in machine learning?

a) Date does not include columns to train the model
b) Predict label or category on the input Data
c) predict continuous value on the input data
d) using data to include a target conlumn to train model

Answer : b 
Predict label or category on the input Data is classification in machine learning

## it is important to split data into training and test set because:

a) NOt all data is suitable for training 
b) Reducing dimensionality of data allows model to easily find impotant patterns and corealtions 
c) It is not important, the more data the better
d) genralized model should perform well on data that is not seen during training

Answer: d
It is important to split data into training and test set because genralized model should perform well on data that is not seen during training


## When model performs well on training data but not on test data, it is called:

a) Overfitting
b) Underfitting
c) Bias
d) A liner Regression

Answer: a
When model performs well on training data but not on test data, it is called Overfitting

## When there ar no label or target column in the data, it is called, this model would be best suited for the task 

a) Liner Regression
b) Logistic Regression
c) K Means Clustering
d) K-Nearest Neighbors

Answer: c
When there ar no label or target column in the data, it is called, this model would be best suited for the task K Means Clustering

# data for Supervised training is diffrent from unsupervised training because:

* Unsupervised model does not need to target columns 
* There is no difference in the data
* Supervised model works with non-numerical data
* Supervised model works with numerical data

Answer: Unsupervised model does not need to target columns

# preceptron  model utilizes combination of weights and bias to make predictions, which of the following is not a benefit of preceptron model?

# SQL

## Table schema for Products 

| ID | NAME | PRICE | STOCK | PRODUCER | Co

## Result query should contain 

| ID | NAME | STOCK|

Question: What is the query to get of item that needs to be restocked if there are less than 2 or less left in stock and PRODUCER is Company-A

```sql
SELECT ID, NAME, STOCK
FROM Products
WHERE STOCK <= 2 AND PRODUCER = 'Company-A'
```


# Python

# Question: Write a sortArry function that takes an array of integers and returns a sorted version of that array in ascending order do not use built in sort method

```python
# method 1 : selection sort
def selectionSort(arr):
    for i in range(len(arr)):
        minIndex = i
        for j in range(i+1, len(arr)):
            if arr[j] < arr[minIndex]:
                minIndex = j
        arr[i], arr[minIndex] = arr[minIndex], arr[i]
    return arr
# method 2 : bubble sort
def bubbleSort(arr):
    for i in range(len(arr)):
        for j in range(len(arr)-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr
# method 3 : insertion sort
def insertionSort(arr):
    for i in range(1, len(arr)):
        j = i
        while j > 0 and arr[j] < arr[j-1]:
            arr[j], arr[j-1] = arr[j-1], arr[j]
            j -= 1
    return arr
# method 4 : merge sort
def mergeSort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = mergeSort(arr[:mid])
    right = mergeSort(arr[mid:])
    return merge(left, right)

def merge(left, right):
    result = []
    leftIndex = 0
    rightIndex = 0
    while leftIndex < len(left) and rightIndex < len(right):
        if left[leftIndex] < right[rightIndex]:
            result.append(left[leftIndex])
            leftIndex += 1
        else:
            result.append(right[rightIndex])
            rightIndex += 1
    return result + left[leftIndex:] + right[rightIndex:]
# method 5 : quick sort
def quickSort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quickSort(left) + middle + quickSort(right)
```

# Python 

Write a function `calculate_column_name()` that takes in two arguments:
* a list of dictionaries and
* a key name
it should return the arithmetic mean of the values associated with that key name across all the dictionaries in the list.

Assumption: the values associated with the key name are all numeric.
the list may be of any length, including zero.

Make sure the execution of your function does not exceed 30 seconds

```python
def calculate_column_name(list_of_dict, key_name):
    sum = 0
    for dict in list_of_dict:
        sum += dict[key_name]
    return sum / len(list_of_dict)
```
