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
>- If $A\subseteq X$ is open, then $U\subseteq A$ is open in $A\iff$ it is open in $X$. 
>- If  $W\subseteq X$ is closed, then $V\subseteq W$ is closed in $W\iff$ it is closed in X.

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

>[!rem] Remark (Continuity from closed covers)
 >Analogously, we have the same result for closed covers.
 >

Note that the critical point in this natural construction is that the inclusion mappings are trivially continuous. We can generalize this idea to a general map.

>[!defn] Definition (Induced topology)
 >Let $(X,\mathcal{O})$ be a topological space and $f:Y\to X$ a set map. Then, we define the topology on $Y$ as $\mathcal{O}_{f}=\{ f^{-1}(U)\subseteq Y|U\in \mathcal{O} \}$, which is the topology induced by $f$ on $Y$.
 >

As we will see, the main general constructions that we will present have a universal property. Let's state the one for the induced topology.

>[!theo] Theorem (Universal property of the induced topology)
 >Let $(X,\mathcal{O})$ be a topological space and $f:Y\to X$ a set map. Then,
 >1. $\mathcal{O}_{f}$ is the coarsest topology on $Y$ such that $f$ is continuous.
 >2. For any topological space $Z$ and a map $g:Z\to Y$, $g$ is continuous for the topology $\mathcal{O}_{f}$ on $Y$ if and only if $f\circ g:Z\to X$ is continuous.
><!-- https://q.uiver.app/#q=WzAsMyxbMCwwLCJZIl0sWzIsMCwiWCJdLFswLDEsIloiXSxbMiwwLCJnIl0sWzAsMSwiZiJdLFsyLDEsImdcXGNpcmMgZiIsMl1d --> <iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsMyxbMCwwLCJZIl0sWzIsMCwiWCJdLFswLDEsIloiXSxbMiwwLCJnIl0sWzAsMSwiZiJdLFsyLDEsImdcXGNpcmMgZiIsMl1d&embed" width="350" height="200" style="border-radius: 8px; border: none;"></iframe>
 >3. $\mathcal{O}_{f}$ is the only topology satisfying 2.
 
 >[!proof]- 
 >1. Given $f: Y\to X$, and an open set in $X$. The preimage of all such open sets will be open, no more, no less. Hence $f$ is continuous, and the topology is the coarsest topology that satisfies this.
 >2. The following are equivalent: for any map $g:Z\to Y$ is continuous iff $g^{-1}(V)$ is open for any open subset $V\subseteq Y$ iff $g^{-1}(f^{-1}(U))$ is open for any open subset $U\subseteq X$ iff $f\circ g$ is continuous.
 >3. Let $\mathcal{R,S}$ be two arbitrary topologies on $Y$ satisfying (2). Recall that $id_{Y}:(Y,\mathcal{R})\to(Y,\mathcal{R})$ is continuous. Thus, $f\circ id_{Y}=f:(Y,\mathcal{R})\to(X,\mathcal{O})$ is continuous, too. Consider $g=id_{Y}:(Y,\mathcal{R})\to(Y,S)$. Hence, $f\circ g=f:(Y,\mathcal{R})\to(X,\mathcal{O})$ is continuous. Therefore, $g$ is continuous and $\mathcal{S}\subseteq \mathcal{R}$ %%put the reference to the result%%. Symmetrically, we also get $\mathcal{R}\subseteq \mathcal{S}$.
 
 