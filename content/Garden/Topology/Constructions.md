---
title: Constructions
draft: false
tags:
  - Pure_Mathematics
---

We will always begin with an initial space $(X,\mathcal{O})$. What would be the natural topology to consider in a subset $A\subseteq X$.

>[!defn] Definition (Subspace Topology)
>The subspace topology on $A\subseteq X$ is $\mathcal{O}=\{ U\cap A | U\in \mathcal{O} \}$.

^85d961

Note that the open subsets on the subspace topology are the intersection of the open sets in $X$. Also, <mark style="background: #FFB8EBA6;">the closed subsets are the intersection of the closed subsets in $X$ with $A$.</mark> 
>[!example]
>If we have a metric space $(X,d)$ and $A\subseteq X$ we may consider the following:
>- the space with the metric restricted to $A$, i.e., $(A,d|_{A})$ and the subspace topology. Then, the $\epsilon$-balls in $A$ will be the $\epsilon$-balls in $X$ intersected with $A$.

>[!rem] Remark
>If $A\subseteq X$ is open, then $U\subseteq A$ is open in $A\iff$ it is open in $X$. 
>If  $W\subseteq X$ is closed, then $V\subseteq W$ is closed in $W\iff$ it is closed in X.

>[!defn] Definition (Open cover)
>A collection $(A_{i})_{i\in I}$ of open subsets of a topological space $X$ is called an open cover if $\bigcup\limits_{i\in I}A_{i}=X$.

^9ca89c

>[!theo] Theorem (Continuity from covers)
>Let $f:X\to Y$ be a map, $(A_{i})_{i\in I}$ an [[Constructions#^9ca89c|open cover]] of $X$. Then, $f$ is continuous if and only if $f_{i}=f|_{A_{i}}$ is continuous $\forall i\in I$.

^5a77e0

>[!proof]-
>$(\implies)$ Suppose $f$ is continuous and let $\iota_{i}:A_{i}\to X$ be the inclusion maps. We know that the inclusion maps are continuous. Then, $f_{i}=f|_{A_{i}}=f\circ\iota_{i}:A_{i}\to Y$ is continuous.
>
>$(\impliedby)$ Suppose that $f|_{A_{i}}$ are continuous. And, let $U\subseteq X$ an open set, then 
>$$
>\begin{align*}
>f^{-1}(U)&=f^{-1}\left( \bigcup\limits_{i\in I} U\cap A_{i} \right)\\ \\
>&=\bigcup\limits_{i\in I}(f^{-1}(U)\cap f^{-1}(A_{i}))\\ \\
>&=\bigcup\limits_{i\in I}f^{-1}|_{A_{i}}(U)\\ \\
>&=\bigcup\limits_{i\in I}f^{-1}_{i}(U)
>\end{align*}
>$$
>which is open. Then, $f$ is continuous.
