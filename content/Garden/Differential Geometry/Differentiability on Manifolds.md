---
title: Differentiability on Manifolds
draft: false
tags:
  - Differential_Geometry
  - Pure_Mathematics
---
As mentioned in introducing the concept of manifolds, we want to translate concepts as differentiability of $\mathbb{R}^n$ to more general spaces. Therefore, we will "lift" the definition through the charts:

>[!defn] Definition (Differentiability)
 >Let $M$ and $N$ be $m$-dimensional and $n$-dimensional manifolds, $f:M\to N$ is called differentiable or smooth if for all charts $\phi:U\to \mathbb{R}^n$ on $M$ and $\eta:N\to \mathbb{R}^n$ on $N$, 
>$$
>\eta\circ f \circ \phi ^{-1}:\phi(U)\to \mathbb{R}^n
>$$
>is differentiable.

>[!rem] Remark 
 > - Differentiability in one point works likewise
 > - To test differentiability is enough to check sufficiently many charts so that al points on $M$ and $f(M)$ are covered.
 > - Differentiability on subsets follows from them being open submanifolds.
 > - If $f:M\to \mathbb{R}$ is a function, we can chose $id$ as chart on $\mathbb{R}$, so it is enough to check $f\circ\phi ^{-1}:\phi(U)\to \mathbb{R}$ for smoothness.
 
 >[!defn] Definition (Diffeomorphism)
 >A diffeomorphism is a smooth map with smooth inverse. 

>[!example] Example (Diffeomorphisms)
 >- Any chart is a diffeomorphism onto its image.
 >- $\phi:S^1\times S^1\to T^2, (x,y)\mapsto f(\text{arg } x,\text{arg } y)$ with $f$ from above is a diffeomorphism.
 >- Any finite dimensional $\mathbb{R}$-vector space is isomorphic to $R^n$ by requiring one of the isomorphisms to be a diffeomorphism, we can make them into a manifold as well.
 
 >[!defn] Definition (Ring of smooth functions)
 >$\mathcal{F}(M)$ denotes the (commutative) ring of smooth functions on $M$.
 >
 
