---
title: Principal Bundles
draft: false
tags:
  - Pure_Mathematics
---
We will first define what a bundle is to give you some intuition of the principal and fiber bundles concept.
>[!defn] Definition (Bundle)
 > A bundle is a triple $(E, p, B)$, where $p:E\to B$ is a map. The space $B$ is called the *base space*, the space $E$ is called the *total space*, and the map $p$ is called the projection of the bundle. For each $b\in B$, the space $p^{-1}(b)$ is called the *fiber* of the bundle over $b\in B$. 

Intuitively, one thinks of a bundle as a union of fibers $p^{-1}(b)$ for $b\in B$ parametrized by $B$ and “glued together" by the topology of the space $E$. But we can go further with the structure using a topological group $G$. In such a case, the bundle is called principal or fiber bundle. Roughly speaking, a fiber bundle $E$ on a base $B$ with fiber $F$ is a geometric way to express $E$ in terms of $B$ and $F$. That is, locally, we will express $E$ as the product of $B$ and $F$. In the principal bundle case, the fiber $F$ is a topological group.

We will start defining a principal bundle to better understand the more complex case of the fiber bundle.
>[!defn] Definition (Principal $G$-bundle)
 > Let $G$ be a topological group. A principal $G$-bundle consists of a continuous function $p:P\to X$ and a continuous right action $P\times G\to P$ such that there is an open cover $\mathcal{U}=\{U_\alpha\}_{\alpha\in I}$ of $X$ together with homeomorphisms $\psi_\alpha: U_\alpha\times G\to p^{-1}(U_\alpha)$ that satisfy:
 > - The following diagram is commutative:
 > 
><!-- https://q.uiver.app/#q=WzAsMyxbMCwwLCJVX1xcYWxwaGFcXHRpbWVzIEciXSxbMywwLCJwXnstMX0oVV9cXGFscGhhKSJdLFszLDIsIlVfXFxhbHBoYSJdLFswLDEsIlxccHNpX1xcYWxwaGEiXSxbMSwyLCJwfCJdLFswLDIsIlxccGkiLDJdXQ== --> <iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsMyxbMCwwLCJVX1xcYWxwaGFcXHRpbWVzIEciXSxbMywwLCJwXnstMX0oVV9cXGFscGhhKSJdLFszLDIsIlVfXFxhbHBoYSJdLFswLDEsIlxccHNpX1xcYWxwaGEiXSxbMSwyLCJwfCJdLFswLDIsIlxccGkiLDJdXQ==&embed" width="330" height="250" ></iframe>
>- $\psi_\alpha(x,g)=\psi_\alpha(x,e) g$ with the identity $e\in G$ and $g\in G$.

The open cover and the homeomorphisms $\psi_\alpha$ are called the \emph{local trivialization} and are generally not unique.

A simple example is the product principal $G$ bundle or simply the trivial principal bundle.

>[!example] Example (The trivial principal bundle)
 > The trivial $G$-principal bundle in the space $X$ consists of a continuous function $p:X\times G\to X$ such that $p(x,g)=x$, an action $(X\times G)\times G\to X\times G$ such that $(x,g)h=(x,gh)$ for $h\in G$ and an open cover $\mathcal{U}=\{X\}$. Obtaining,
> 
><!-- https://q.uiver.app/#q=WzAsMyxbMCwwLCJYXFx0aW1lcyBHIl0sWzIsMCwiWFxcdGltZXMgRyJdLFsyLDEsIlgiXSxbMCwxLCJcXHBzaT1cXHRleHR7SWR9X3tYXFx0aW1lcyBHfSJdLFsxLDIsInAiXSxbMCwyLCJcXHBpX1giLDJdXQ== --> <iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsMyxbMCwwLCJYXFx0aW1lcyBHIl0sWzIsMCwiWFxcdGltZXMgRyJdLFsyLDEsIlgiXSxbMCwxLCJcXHBzaT1cXHRleHR7SWR9X3tYXFx0aW1lcyBHfSJdLFsxLDIsInAiXSxbMCwyLCJcXHBpX1giLDJdXQ==&embed" width="350" height="200" style="border-radius: 8px; border: none;"></iframe>
>which satisfies the first condition of the definition. Moreover, 
>$$
>\psi(x,e) g=(x,e) g=(x, eg)=(x,g)=\psi(x,g).
>$$
>Satisfying the second condition. Therefore, we see that the trivial $G$-principal bundle is, in fact, a
>$G$-principal bundle.

Let us define some supplementary functions that will allow us to prove some of the key features of principal $G$-bundles.





