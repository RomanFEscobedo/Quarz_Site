---
title: Vector Bundles and the Tangential Bundle
draft: false
tags:
  - Differential_Geometry
  - Pure_Mathematics
---
The tangential bundle of a manifold $M$ is the disjoint union of the tangential spaces: $TM=\bigcup_{p \in M}T_{p}M$ furnished with a manifold structure. On a conceptual level this is a special case of a vector bundle:

>[!defn] Definition (Vector Bundle)
>
 >A $k$-vector bundle $(E,\pi)$ (or just $E$) over a manifold $M$ is a manifold $E$ together with a smooth map $\pi:E\to M$ such that:
 >1. For all $p \in M, \pi ^{-1}(p)$ is a $k$-dimensional $\mathbb{R}$-vector space.
 >2. For all $p \in M$ there exists an open neighborhood $U\subset M$, $p \in U$ and a diffeomorphism $\Phi:U\times \mathbb{R}^k\to \pi ^{-1}(U)\subset E$ such that for all $q \in U$, $v\mapsto \Phi(q,v)$ is a linear isomorphism $\mathbb{R}^k\to \pi ^{-1}(q)$.
 >
 >We call $M$ the base manifold, $E$ the total space, $\pi$ the projection, $\pi ^{-1}(p)$ the fiber over $p$, and $\Phi$ bundle chart.

The second condition is equivalent to say that each fiber is a finite dimensional vector space.
Now, we should define properly the concept of a tangential bundle and prove that is in fact a vector bundle.

>[!defn] Definition (Tangential Bundle)
>Let $M$ be a $n$-dimensional manifold. Then, $TM=\bigcup_{p \in M}T_{p}M=\{ (p,v)|p \in M, v \in T_{p}M \}$ is called the tangential bundle of $M$.

>[!lemma] Lemma 
 >In a canonical way $TM$ is a $n$-vector bundle over $M$.
 >

>[!proof]- 
 >Idea: Let $\phi:U\subset M\to \mathbb{R}^n$ be chart on $M$. Set $\Phi:\pi ^{-1}(U)\to \mathbb{R}^n\times \mathbb{R}^n$, $(p,v)=\left( p,\sum v_{i}\partial_{i} \right)\mapsto(\phi(p),v_1,\dots,v_{n})$. The $\Phi$ are one-to-one and onto and these maps cover $TM$. Now, one can show that asking $V\subset TM$ to be open $\iff \Phi(V\cap \pi ^{-1}(U))$ is open in $\mathbb{R}^n\times \mathbb{R}^n$ for all charts $\phi$ on $M$, defines a Hausdorff topology with countable basis on $TM$. Moreover one can easily show that the charts $\Phi$ are compatible and are in fact bundle charts.
 
 >[!defn] Definition (Sections, Trivial vector bundles, Tangential vector field)
 > 1. If $E$ is $k$-vector bundle over $M$ then a (smooth) map $X:M\to E$ is called a (smooth) section in $E$ iff $\pi \circ X=id_{M}$.
 > 2. The set of all smooth sections in $E$ is denoted by $\Gamma(E)$.
 > 3. A $k$-vector bundle is called trivial iff there are $k$ linear independent never-vanishing sections.
 > 4. A smooth section in $TM$ is called tangential vector field on $M$.
 > 5. A vector field along a map $f:M\to N$ is a map $X:M\to TN$ with $\pi \circ X=f$.
 
 
 
 
 
