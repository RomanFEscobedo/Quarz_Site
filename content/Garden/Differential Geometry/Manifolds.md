---
title: Manifolds
draft: false
tags:
  - Pure_Mathematics
  - Differential_Geometry
---
The idea behind a manifold is giving particular structure to topological spaces such that we can translate concepts such differentiability that we are used to on $\mathbb{R}^n$. That is, being able to see locally such spaces as copies of $\mathbb{R}^n$, i.e., assigning a coordinate system locally on each point of space.

>[!defn] Definition (Charts)
 >Let $(M,T)$ be a topological space and let $U\subseteq M$ be open.
 >- A map $\phi:U\to \mathbb{R}^n$ is called a chart (or coordinate system) if $\phi(U)$ is open and $\phi$ is a homeomorphism (onto its image). We say that $n$ is the dimension of the chart.
 >- Two charts of the same dimension $\phi:U\to \mathbb{R}^n$ and $\eta:V\to \mathbb{R}^n$ are said to overlap smoothly or to be compatible if $\phi \circ\eta ^{-1}$ and $\eta \circ\phi ^{-1}$ are smooth (wherever defined).
 
 >[!rem] Remark 
 > - For the case of $\phi,\eta$ defined before, if $U\cap V=\emptyset$, we should thought that both charts are trivially compatible.
 >  - Otherwise, we should ask of differentiability on the maps 
>$$
>\begin{align*}
> \phi \circ \eta ^{-1}: \eta(U\cap V)\to \phi(U\cap V); \\
>\eta \circ \phi ^{-1}:\phi(U\cap V)\to \eta(U\cap V).
>\end{align*}
>$$

>[!defn] Definition (Atlas)
 >Let $(M,T)$ be a topological space.
 > - An atlas on $M$ is a set of compatible charts such that each point $p \in M$ lies in the domain of at least one chart.
 > - An atlas $A$ is called _complete_ if any chart that is compatible with all charts from $A$ is already contained in $A$.

The notion of a complete atlas is of rather technical nature and usually it will suffice to know of its existence. The following lemma ensure its existence. 

>[!lemma] Lemma
>
 >Every atlas is contained in a unique complete atlas.
 >

>[!proof]- 
 >Let $A$ be an atlas. Denote by $\tilde{A}$ the set of all charts compatible with all charts in $A$. If $\tilde{A}$ is an atlas, then is the unique complete atlas containing A: 
 >- Let's prove first the uniqueness. Assume $\hat{A}$ is another complete atlas containing A. Then every chart in $\hat{A}$ must be compatible with al charts from $A\subseteq \hat{A}$ and thus must be contained in $\tilde{A}$. The same holds the other way around, giving $\hat{A}=\tilde{A}$.
 >- Now we need to show that $\tilde{A}$ is in fact an atlas. In particular we need to show that any two charts $\phi:U\to \mathbb{R}^n$ and $\eta:V\to \mathbb{R}^n$ from $\tilde{A}$ are compatible. If $U\cap V=\emptyset$ there is nothing to show, otherwise pick an arbitrary point $p \in U\cap V$. Then, there is a chart $\nu:W\to \mathbb{R}^n$ from $A$ with $p \in W$. $\nu$ is compatible with $\phi$ and $\eta$, so $\phi \circ \nu^{-1}$ and $\nu \circ\eta^{-1}$ are smooth . So $\phi\circ\eta^{-1}=\phi \circ \nu^{-1}\circ \nu \circ\eta^{-1}$ is smooth at least in $\eta(p)$. But since $p$ was chosen arbitrarily we find smoothness of the map. The same holds for $\eta \circ\phi^{-1}$.
 
>[!defn] Definition (Smooth Manifold)
 >A smooth manifold is a topological Hausdorff space with a complete atlas. The dimension of the manifold shall be the dimension of its charts.
 >

^4ead5b

>[!rem] Remark 
>For a topological manifold one has to replace smooth/differentiable by continuous in the above definitions.

>[!example] Example (Manifolds)
 > - The set $\{id:\mathbb{R}^n\to \mathbb{R}^n\}$ is an atlas on $\mathbb{R}^n$. So, $\mathbb{R}^n$ is a $n$-dimensional manifold.
 > - Let $S^n=\{ x \in \mathbb{R}^{n+1}:\lVert x \rVert=1 \}$ be the $n$-dimensional unit sphere. Define 
 >  $$
> \pi_{i}:\mathbb{R}^{n+1}\to \mathbb{R}^n;\quad (x_{1},\dots,x_{n+1})\mapsto (x_{1},\dots,\hat{x}_{i},\dots,x_{n+1});
>$$
 > where the hat indicates that $x_{i}$ is omitted.
  Then $\phi_{i}^+=\pi_{i}|_{S^n\cap \{ (x_{1},x_{2},\dots,x_{n+1}|x_{i}>0) \}}$ and $\phi_{i}^-=\pi_{i}|_{S^n\cap \{ (x_{1},x_{2},\dots,x_{n+1})|x_{i}<0 \}}$ with $i\in \{ 1,\dots,n+1 \}$ are charts for $S^n$. It is easy to see that they form an atlas. These are already quite a few charts but one can do with less: Define $\sigma\pm:S^n\setminus \{ (0,\dots,0,\pm1) \}\to \mathbb{R}$, given by
  > $$
>\sigma_{\pm}(x)=\pi_{n+1}\left(4\frac{x-(0,\dots,0,\pm 1)}{\lVert x-(0,\dots,0,\pm 1) \rVert ^2}+(0,\dots,0,\pm 1)\right)
>$$
> then $\{ \sigma_{+},\sigma_{-} \}$ forms an atlas for $S^n$. It has the same complete atlas as the first one.
  
>[!rem] Remark 
>Let $M$ be a manifolds, $p \in M$, and let $\phi:U\to \mathbb{R}^n$ be a chart with $p \in U$. Then $U$ is sometimes called a _coordinate neighborhood_ and $\phi$ is called a _coordinate system_ in $p$.

>[!rem] Remark 
>Many authors consider the space $M$ being a [[Concepts#^d1501a|second countable]] space in order to define a manifold. We have not included this necessity in order to consider a more general case. However, it will become important shortly, so now we will consider manifolds being second countable unless stated explicitly. 

>[!defn] Definition (Open submanifold)
 >Let $M$ is a $n$-dimensional manifolds and $U \in M$ open then all charts of $M$, which have domain completely inside $U$ make $U$ itself into a $n$-dimensional manifold. Then, $U$ is called an _open submanifold_ of $M$. 
 
 >[!prop] Proposition (Products of Manifolds)
 >
 >If $M$ and $N$ are $m$- and $n$-dimensional manifolds respectively. Then $M\times N$ is itself a $(m+n)$-dimensional manifold.
 >

>[!proof]- 
 > One chooses the product topology on $M\times N$. If $\phi:U\to \mathbb{R}^n$ and $\eta:V\to \mathbb{R}^n$ are charts on $M$ and $N$ resp. Then, $U\times V$ is open in $M\times N$ and $(\phi,\eta):U\times V\to \mathbb{R}^n\times \mathbb{R}^m$ becomes a chart on $M\times N$.

>[!example] Example (Some product of manifolds)
 >- $\mathbb{R}^n=\mathbb{R}\times\cdots\times \mathbb{R}$ holds even when read as manifolds.
 >- $S^1\times S^1$ is a 2-dimensional manifold.
 
