---
title: The Tangential Space
draft: false
tags:
---
For a smooth map $g:V\subseteq \mathbb{R}^n\to W\subseteq\mathbb{R}^m$ one can form its total differential $D_{q}g:\mathbb{R}^m\to \mathbb{R}^n$ in a given point $q\in V$. Then,
$$
D_{q}g(v)=\sum\limits_{ i =1 } ^m v_{i} \frac{ \partial g }{ \partial x_{i} } \biggr|_{q}
$$
is the directional derivative of $g$ in the direction of $v=(v_{1,\dots},v_{m})$. But neither needs $v$ be in $V$ (any vector $v\in \mathbb{R}^m$ will do) nor needs the directional derivative $D_{q}g(v)=\partial_v g|_{q}$ lie in $W$. Both vectors live "live" in other spaces than domain and image of $g$ and we will now construct those spaces for each point of a manifold. Note that the directional derivative $\partial_{v}g|_{q}$ of a function $g:V\to \mathbb{R}$ can be viewed either as a map $v \mapsto \partial_{v}g|_{q}$ or as a map $g\mapsto \partial_{v}g|_{q}$. In $q$ the vector $v$ operates as directional derivative on the space of all smooth functions $v:\mathcal{F}(V)\to \mathbb{R}$.

Now, given a manifold $M$ and a point $p \in M$ with a coordinate system $\phi:U\to \mathbb{R}^n$ then we can look at $f\circ\phi ^{-1}:\phi(U)\to \mathbb{R}$, with $f:M\to \mathbb{R}$ and define
$$
\partial_{i}f|_{p}:= \frac{ \partial f }{ \partial \phi_{i} }\biggr|_{p}:= \frac{ \partial (f\circ \phi ^{-1}) }{ \partial x_{i} }\biggr|_{q}.
$$
However, these partial derivatives of $f$ do depend on the choice of the chart $\phi$. Nonetheless, given $v=(v_{1},\dots,v_{n}) \in \mathbb{R}^n$ we can now define
$$
\partial_{v}f|_{p}=\sum\limits_{i=1}^{n}v_{i}\partial_{i}f|_{p}.
$$
as well. And again we can switch the roles of function and vector and interpret $v$ as a map on $\mathcal{F(M)}$. Our description of tangential vectors still depends on the choice of a chart. Therefore we will axiomatize their properties (and later see that we in fact did not change the scope with this).

>[!defn] Definition (Tangential vector)
 >Let $M$ be a manifold and $p \in M$. A tangential vector $v$ on $M$ in $p$ is a map $v:\mathcal{F}(M)\to \mathbb{R}$ with the following properties:
 >1. $v$ is linear: for all $\lambda,\mu \in \mathbb{R}$ and $f,g\in \mathcal{F}(M)$ the following holds: $v(\lambda f+\mu g)=\lambda v(f)+\mu v(g).$
 >2. $v$ satisfies the Leibniz rule: for all $f,g\in \mathcal{F}(M)$, $v(fg)=v(f)g(p)+f(p)v(g)$ holds.
>
 The set of all tangential vectors on $M$ in $p$ is called _Tangential space_ on $M$ in $p$ and it gets denotes by $T_{p}M$.

^9bea7c

 
 It is easy to see that $T_{p}M$ forms an $\mathbb{R}$-vector space (a subspace of the space of all functions on $\mathcal{F}(M)$).
 
 >[!lemma] Lemma (Gauss vectors)
 >The partial derivatives with respect to a chart are called Gauss vectors. They are in fact tangential vectors. 

>[!proof]+ 
 >Let $M$ be a [[Manifolds#^4ead5b|manifold]], $p \in M$ and $\phi$ a coordinate system in $p$, We have to show, that the $\partial_{i}$ are $\mathbb{R}$-linear and Leibniz. Now, for $f,g\in \mathcal{F}, \lambda,\mu \in \mathbb{R}$, and $q=\phi(p)$ we see that:
 > $$
>\begin{align*}
>\partial_{i}(\lambda f+\mu g)|_{p}&=\frac{ \partial ((\lambda f+\mu g)\circ \phi ^{-1}) }{ \partial x_{i} } \biggr|_{q}\\
>&=\lambda \frac{ \partial (f\circ \phi ^{-1}) }{ \partial x_{i} } \biggr|_{q}+\mu \frac{ \partial (g\circ \phi ^{-1}) }{ \partial x_{i} }\biggr|_{q} \\
> & =\lambda \partial_{i}f|_{p}+\mu \partial_{i}g|_{p}    
>\end{align*}
>$$
>and
> $$
>\begin{align*}
> \partial_{i}(fg)|_{p} & =\frac{ \partial ((fg)\circ \phi ^{-1}) }{ \partial x_{i} }\biggr|_{q} \\
> & =  \frac{ \partial (f\circ \phi ^{-1}) }{ \partial x_{i} } \biggr|_{q}[g\circ \phi ^{-1}](q)+[f\circ \phi ^{-1}](q) \frac{ \partial (g\circ \phi ^{-1}) }{ \partial x_{i} } \biggr|_{q} \\
> & =\partial_{i}f|_{q}g(p)+f(p)\partial_{i}g|_{p}  
>\end{align*}
>$$

>[!rem] Remark (Tangential vectors over constant functions)
 >If $f=c$ is a constant function then $v(f)=0$ for all $v\in T_{p}M$. Indeed, consider $g=c=1$. Then,
 >$$
>v(g)=v(g^2)=v(g)g(p)+g(p)v(g)=2v(g)
>$$
>And thus $v(g)=0$. Therefore, writing $f=cg$ it follows that,
>$$
>v(f)=v(cg)=cv(g)=0.
>$$

As we mentioned, $T_{p}M$ is a vector space, and the Gauss vectors are elements of this space. Thus, the directional derivatives are also tangential vectors since they are linear combinations of the Gauss vectors. However, not only the directional derivatives are of this form:
>[!theo] Theorem (The Gauss basis)
 >If $M$ is a $n$-dimensional manifold and $p \in M$ then $T_{p}M$ is an $n$-dimensional $\mathbb{R}$-vector space. If $\phi$ is a coordinate system in $p$ then the Gauss vectors (the partial derivatives with respect to $\phi$) form a basis, the so-called Gauss basis of $T_{p}M$.
 >

>[!proof]+ 
 >Let $\phi$ be a coordinate system in $p$. We will argue locally in the coordinate system and show afterwards that it still works globally. Consider $\phi=(\phi_{1},\dots,\phi_{n})$ as functions on $M\to \mathbb{R}$, despite the fact that they are only defined on an open subset of $M$.
 >First we show that the $\partial_{i}$ are linear independent. Indeed, consider the linear combination $\sum \lambda_{i}\partial_{i}=0$. Then,
 > $$
>0=\left( \sum\limits_{i}\lambda_{i}\partial_{i}  \right)(\phi_{j})=\sum\limits_{i}\lambda_{i}\frac{ \partial (\phi_{j}\circ \phi ^{-1}) }{ \partial x_{i} } \biggr|_{\phi(p)}=\sum\limits_{i}\lambda_{i}\frac{ \partial x_{j} }{ \partial x_{i} } \biggr|_{\phi(p)}=\lambda_{j},  
>$$
>holds for all $j\in \{ 1,\dots,n \}$. Therefore all $\lambda_{j}$ vanish and the linear combination was trivial. This shows that the $\partial_{i}$ are linear independent.
>Next, we show that the Gauss vectors $\partial_{i}$ form a generating set. Note that for any function $g:\mathbb{R}^n\to \mathbb{R}$ and in a small neighborhood of zero:
> $$
>g(q)= g(0)+ \int_{0}^{1} D_{tq} g(q) = g(0)+\int_{0}^{1} \sum\limits_{i=1}^{n} \partial_{i}g|_{tq}q_{i}  \, dt = g(0) + \sum\limits_{i=1}^{n} q_{i}\int_{0}^{1} \partial_{i}g|_{tq}  \, dt    
>$$
>holds. Without loss of generality we can assume that $\phi(p)=0$. Then it follows for $f\circ\phi ^{-1}$ that:
> $$
> f \circ \phi ^{-1}(q)=f(\phi ^{-1}(0))+\sum\limits_{i=1}^{n} \int_{0}^{1} \frac{ \partial (f\circ \phi ^{-1}) }{ \partial x_{i} } \biggr|_{tq} \, dtq_{i} 
>$$
>or with $q_{i}=\phi_{i}(\phi ^{-1}(q))$ and $f_{i}=\int_{0}^{1} \frac{ \partial (f\circ\phi ^{-1}) }{ \partial x_{i} }\biggr|_{t\phi} \, dt$,
> $$
> f = f(p) + \sum\limits_{i=1}^{n} f_{i}\phi_{i}. 
>$$
>Now in $p$
> $$
> \partial_{j}f = \partial_{j}\left( f(p) + \sum\limits_{i=1}^{n} f_{i}\phi_{i} \right) = \sum\limits_{i=1}^{n} (\partial_{j}f_{i}\phi_{i}(p) + f_{i}(p)\partial_{j}\phi_{i}) = f_{i},    
>$$
> since $\phi_{i}(p)=0$ and $\partial_{j}\phi_{i}= \delta_{ij}$. Thus, we can write
> $$
> v(f) = 0 + \sum\limits_{i=1}^{n} (v(f_{i})\phi_{i}(p)+ f_{i}(p)v(\phi_{i}))=\sum\limits_{i=1}^{n} v(\phi_{i})\partial_{i}(f)
>$$
>for any tangential vector $v\in T_{p}M$. Since this holds true for any $f$ we have show that $v$ is indeed a linear combination of the $\partial_{i}$.

---
### Partitions of Unity

We still need to show that the local argument is valid. For this, we will make use of what is usually known as "bump functions". So, we will make a little digression to define and show some results that will help us.

>[!defn] Definition (Support of a function)
 > The support $\text{supp}f$ of a function $f:M\to \mathbb{R}$ is the closure over the set $\{ p \in M|f(p)\neq0 \}$.
 > 
 
If $U\subset M$ is open and $p \in U$ then there exists a "bump function" $f:M\to \mathbb{R}$ with the following properties
1. $0 \leq f \leq 1$
2. $\text{supp} f \subset U$
3. $f = 1$ in a neighborhood of $p$.
To show this we use the fact that the function $h:\mathbb{R}\to \mathbb{R}$,
$$
h(x)=\begin{cases}
e^{-1/x^2} & \text{if} & x\geq 0; \\
0 &  & \text{otherwise}
\end{cases}
$$
in $C^\infty$. We set
$$
\tilde{h}(t)=\int_{0}^{t} h(x)h(1-x) \, dx.
$$
This gives a function which is strictly monotonic between $0$ and $1$ and which is constant otherwise and gives a function
$$
r(t)=\frac{\tilde{h}\left( 1-\frac{t-\epsilon}{\epsilon} \right)}{\tilde{h}(1)}
$$
which is constant 1 between 0 and $\epsilon$, falls strictly monotonic between $\epsilon$ and $2\epsilon$ to 0, and is constant 0 otherwise. If now $U$ is open containing $p$ and if $\phi$ is a coordinate system in $p$, we can choose $\epsilon$ such that all $x \in \mathbb{R}^n$ with $\lVert \phi(p)-x^2 \rVert\leq3\epsilon$ lie in $\phi(U)$. Thus,
$$
f(q):= \lVert \phi(p)-\phi(q) \rVert ^2
$$

is a function with the desired properties.

Functions of this type can be used to smoothly extend a locally defined function $f$ from a neighborhood $U$ to all of $M$ (assuming that we are interested in its values only in a small neighborhood). This is done via the following procedure: extend $f$ arbitrarily and multiply it with a suitable function of above type to make it smoothly fall off to 0. In particular, we can do this with our coordinate functions in the last proof to make them globally defined.

Finally we have to ensure that such modifications do not alter our results. Fortunately, it holds that if two functions $f,g \in \mathcal{F}(M)$ coincide on a neighborhood $U$ of $p$, then for all tangential vectors $v \in T_{p}M$, $v(f)=v(g)$ holds. To see this, first note that for a function $h$ with $\text{supp }h\subset U$ and $h(p)=1, (f-g)h=0$ on $M$ satisfy that 
$$
0 = v((f-g)h) = v(f-g)h(p) + (f-g)(p)v(h) = v(f-g) =v(f)-v(g).
$$
Thus, $v(f)=v(g)$.
Bump functions like the ones above are important when one wants to glue together locally defined quantities into something globally defined. The tool for this are so-called _**partitions of unity**_. They extend the concept we just used - make something locally defined a global object - to: take many locally defined things and glue them globally.

>[!defn] Definition (Partition of Unity)
 >A partition of unity is a set of functions $P\subset \mathcal{F}(M)$ with the following properties:
 >1. $0\leq f(p)\leq 1$ for all $f \in P$ and $p \in M$.
 >2. $\sum_{f\in P}f(p)=1$ for all $p \in M$.
 >3. $\{ \text{supp}f|f \in P \}$ is locally finite (meaning, for all points $p \in M$ there exists a neighborhood that has non-empty intersection with the supports of only finite many functions $f$).
 
 Note that the second condition already ensures that each point from $M$ is contained in at least one support. Then $\{ \text{supp}f|f \in P \}$ is a [[Constructions#^123f5f|closed cover]] of $M$. One way of thinking the partitions of unity that each $f$ is a "weight" such that sums to 1 allowing us to glue smoothly other functions.

Usually it is not enough that there is a partition of unity. One needs more: They should "fit" into given [[Constructions#^9ca89c|open covers]]. Fortunately for manifolds this always possible (assuming second countability as we do). The following theorem and its corollary shows this:

>[!prop] Proposition (Basis of regular coordinate balls)
 >Every manifold has a countable basis of regular coordinate balls.
 >

>[!prop] Proposition (Locally compactness of manifolds)
 >Every manifold (with or without boundary) is locally compact.
 >

>[!defn] Definition (Exhaustion by compact sets)
 >If $X$ is a topological space, a sequence $(K_{i})_{i=1}^\infty$ of compact subsets of $X$ is called an exhaustion of $X$ by compact sets if $X=\bigcup K_{i}$ and $K_{i}\subseteq (K_{i+1})^\circ$.

>[!prop] Proposition (Exhaustion and manifolds)
 >A second countable, locally compact Hausdorff space admits an exhaustion by compact sets. 

>[!theo] Theorem
 >Given a manifold $M$ with a countable basis, then any open cover has a locally finite refinement.
 
 >[!proof]+ 
 >
 > Let $\{ U_{i} \}_{i \in \mathbb{N}}$ be a countable basis where  
 
%% Review the proofs and results on Lee's chapter paracompactness.%%

>[!col] Corollary 
 >For any open cover $D$ of a manifold $M$ (with countable basis) there exists a subordinate partition of unity $P$ (meaning for all $f\in P$, $\text{supp}f\subset U$ for some $U\in D$). 

---
### Differentials on Manifolds

Back to tangential vectors: $T_{p}M$ is $n$-dimensional $\mathbb{R}-$vector space (and as such, a manifold). We will now transfer the fact that smooth $f:\mathbb{R}^n\to \mathbb{R}^m$ the differential $D_{p}f:\mathbb{R}^n\to \mathbb{R}^m$ is a linear map.

>[!defn] Definition (Differential on manifolds)
 >Let $\Psi:M\to N$ be smooth. The differential of $\Psi$ in $p \in M$ is the linear map $d_{p}\Psi:T_{p}M\to T_{\Psi(p)}N$ for which for all $v \in T_{p}M$ and $f \in \mathcal{F}(N)$
 > $$
> d_{p}\Psi(v)(f)=v(f\circ \Psi)
>$$ 
>holds.

>[!rem] Remark (Differential as a tangential vector)
 >It is easy to see that $d\Psi$ is linear but we have to show that $d_{p}\Psi(v)$ really is in $T_{\Psi(p)}N$. Let's see if satisfies Leibniz product rule:
 > $$
>\begin{align*}
> d_{p}\Psi(v)(fg) & = v((fg)\circ \Psi)\\
> & = v((f\circ \Psi)(g\circ \Psi)) \\
> & = v(f\circ \Psi)g(\Psi(p)) + f(\Psi(p))v(g \circ \Psi) \\
> & = d_{p}\Psi(v)(f)g(\Psi(p)) + f(\Psi(p))d_{p}\Psi(v)(g)
>\end{align*}
>$$
>Thus, $d_{p}\Psi(v)$ is indeed a [[The Tangential Space#^9bea7c|tangential vector]] in $\Psi(p)$.

>[!example] Example 
 >Let $f:\mathbb{R}^m\to \mathbb{R}$ be a smooth function. Given $v \in \mathbb{R}^m, \partial_{v}(\cdot)|_{p}, f\mapsto \braket{ \text{grad}f(p) | v } = D_{p}f(v)$ is a tangential vector in $p$. So we identify $T_{p}\mathbb{R}^m$ and $\mathbb{R}^m$ (by fixing $f$). If $g:\mathbb{R}^n\to \mathbb{R}^m$ is smooth then $D_{p}g:\mathbb{R}^n\to \mathbb{R}^m$ is a linear map and with the above identification we have:
 > $$
> \begin{align*}
> d_{p}g(v)(f) & = v(f\circ g)|_{p}\\
>  & = \braket{ \text{grad}f\circ g|_{p} |v  } & (\text{linear combination})\\
>  & = D_{p}(f\circ g)(v)\\
>  & = D_{g(p)}f(D_{p}g(v)) & (\text{chain rule})\\
>  & = \braket{ \text{grad}f|_{g(p)} | D_{p}g(v) } \\
>  & = D_{p}g(v)(f)
>\end{align*}
>$$

>[!example] Example (Tangential vectors of curves)
 > If $I\subset \mathbb{R}$ is an open interval and $M$ is a manifold then a smooth map $\gamma:I\to M$ is called a curve (on $M$). Obviously one has $\partial_{1}\gamma|_{t_{0}}=\frac{d}{dt}\gamma(t)|_{t_{0}} \in T_{p}M$. For a smooth function $f \in \mathcal{F}(M)$ we can form $f\circ\gamma:I\to \mathbb{R}$ and get $\frac{d}{dt}(f\circ\gamma)|_{t_{0}}=d_{\gamma(t_{0})}f(\partial_{1}\gamma|_{t_{0}})$. Thus we could have introduced tangential vectors by means of curves and their derivatives as well.
 
 >[!example] Example (Matrix spaces)
 >
 >Consider the set $GL(n,\mathbb{R})=\{ A\in \mathcal{M}_{n\times n}(\mathbb{R})|\text{det}A\neq 0 \}$ which is an open subset of $\mathcal{M}_{n\times n}(\mathbb{R})\cong\mathbb{R}^{n^2}$- and therefore it is an open submanifold. Moreover, $\det:GL(n,\mathbb{R})\to \mathbb{R}$ is smooth and $\det(E+tB)=1+t \mathrm{Tr}(B)+\mathcal{O}(t^2)$ and $\frac{d}{dt}\det(E+tB)=\mathrm{Tr}(B)$ hold.
 >

Note that if $f:M\to \mathbb{R}$ is smooth with $df\neq0$ then $N=\{ p \in M|f(p)=c \}$ is a (sub-)manifold: The implicit function theorem guarantees that $N$ can locally be written as a graph. The dimension of $N$ is $\text{dim}(N)=\text{dim}(M)-1$.

>[!example] Example 
 >The set $SL(n,\mathbb{R})=\{ A \in GL(n,\mathbb{R})|\det A=1 \}$ is a $(n^2-1)$- dimensional manifold.
 
 More general, one defines:
 
>[!defn] Definition (Submanifold)
 >Let $M$ be a manifold. A manifold $N\subset M$ is called submanifold of $M$ if $N$ is a topological subspace (with the induced topology), the inclusion map $\iota:N\hookrightarrow M$ is smooth and $d\iota$ is one-to-one.
 
 >[!example] Example 
 >
 >Note that open submanifolds are submanifolds. Moreover, $T^2\subset \mathbb{R}^3$ is a submanifold, $S^n\subset \mathbb{R}^{n+1}$ is a submanifold. 
 
 