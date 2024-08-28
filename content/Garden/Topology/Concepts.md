---
title: Concepts
draft: false
tags:
  - Pure_Mathematics
---
### Topological Spaces

>[!defn] Definition (Topology)
 >A topology on a set $X$ is a collection $\mathcal{O}$ of subsets of $X$, called **open** sets, satisfying
 >- $\emptyset, X\in \mathcal{O}$.
 >- $\mathcal{O}$ is closed under pairwise intersection:
 >	for $U,V\in \mathcal{O}$, we have $U\cap V\in \mathcal{O}$.
 >- $\mathcal{O}$ is closed under arbitrary unions:
 >	for each subset $S\subseteq \mathcal{O}$, we have $\bigcup\limits_{U\in S}U\in \mathcal{O}$.
 >The pair $(X, \mathcal{O})$ is called a topological space.
 >- We call $A\subseteq X$ **closed** if $X\setminus A$ is open.

>[!example] Example (Some topological spaces)
 >- Metric spaces with topology induced by the metric:
 >      - Different metrics may yield the same topology (e.g., metrics induced by equivalent norms).
 >- For each set $X$, setting $\mathcal{O}=P(X)$ (the power set of $X$) yields the **discrete topology**.
 >- Setting $\mathcal{O}=\{ \emptyset,X \}$ (the smallest possible choice) yields the **coarse topology**.
 >- The collection of open intervals $\mathcal{O}=\{ (-\infty,a)|a\in \mathbb{R} \}\cup \{ \emptyset,\mathbb{R} \}$ defines a topology on $\mathbb{R}$ different from the standard one:
 >	   - the bounded intervals $(a,b)$ for $a,b\in \mathbb{R}$ are not open sets here.
>- The **co-finite topology** on a set $X$ is
> $$
>\mathcal{O}=\{ X\setminus F| F\subseteq X \text{ is finite} \}\cup \{ \emptyset \}
>$$



>[!defn] Definition (Neighborhood basis)
>A collection $\mathcal{B}_{x}$ of neighborhoods of $x\in X$ is called a neighborhood basis of $x$ if every neighborhood $U$ of $x$ has a subset $B\subseteq U$ with $B\in\mathcal{B}_{x}$.
^f76270

---
### Interior, Boundary, and Closure
>[!defn] Definition (Interior/Boundary/Closure/Limit and Isolated point)
>Let $X$ be a topological space and $A\subseteq X$ a subset. We call $x\in X$
>- **interior point** of $A$ if $A\in \mathcal{N}_{x}$
>- **boundary point** of $A$ if both $A,(X\setminus A)\notin \mathcal{N}_{x}$.
>- **closure point** of $A$ if for any $V\in N_{x}$ we have $(V\cap A)\neq \emptyset$.
>- **limit point** of $A$ if for any $V\in \mathcal{N}_{x}$ we have $(V\cap A)\setminus \{ x \}\neq \emptyset$.
>- **isolated point** of $A$ if there is a $V\in \mathcal{N}_{x}$ such that $V\cap A=\{ x \}$.

We use the following notation:
- $\bar{A}$ denotes the **closure** of $A$ (the set of all closure points).
- $A^\circ$ denotes the **interior** of $A$ (the set of all interior points). 
- $\partial A$ denotes the **boundary** of $A$ (the set of all boundary points).
  
 

>[!defn] Definition (Dense subset) 
 >A subset $A\subseteq X$ of a topological space $X$ is called dense if $\bar{A}=X$ and *nowhere dense* if $(\bar{A})^\circ=\emptyset$.   
^6145f4


