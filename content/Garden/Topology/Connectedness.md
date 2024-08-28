---
title: Connectedness
draft: false
tags:
  - Pure_Mathematics
---

What is a good way to formalize the idea of connectedness?
>[!defn] Definition (Connected space)
>A topological space $X$ is connected if the only subsets that are both open and closed are $\emptyset$ and $X$ itself.

>[!prop] Proposition (Connectivity vs nontrivial sums)
>$X$ is connected if and only if not is (homeomorphic to) a sum $X_{0}+X_{1}$ of nonempty spaces.

^15a0f9
>[!proof]- 
 >$(\implies)$ Assume  $X\cong X_{0}+X_{1}$, with $X_{0},X_{1}\neq \emptyset$. In particular, both $X_{0}$ and $X_{1}$ are closed and open in $X$ %% insert link to the definition of this topology %%. Thus, $X$ is not connected. 
 >
>$(\impliedby)$ Now assume that $X$ is not connected. Let $X_{0}\not\in \{ \emptyset,X \}$ be closed and open in $X$. Then $X_{1}:=X\setminus X_{0}\not\in \{ \emptyset,X \}$ is closed and open as well. Now, $U\subseteq X$ is open in $X$ iff $U\cap X_{0}$ is open in $X_{0}$ and $U\cap X_{1}$ is open in $X_{1}$. Thus $X\cong X_{0}+X_{1}$, with $X_{0},X_{1}\neq \emptyset$. 

> [!theo] Theorem (Constant maps to discrete spaces)
> $X$ is connected iff every continuous map $X\to Y$ to a discrete space $Y$ is constant

^198a53
>[!proof]- 
 >$(\implies)$ Suppose that $X$ is connected, $f:X\to Y$ is continuous and $Y$ discrete. Let $y\in Y$. Since, $Y$ is discrete $\{ y \}$ is both open and closed. By continuity of $f$, the fiber $f^{-1}(y)$ is open and closed. But, $X$ is connected, $f^{-1}(y)$ is either $\emptyset$ or $X$. Thus, $f$ is constant.
 >
>$(\impliedby)$ Let's prove that if $X$ is not connected, then $f$ is not necessarily constant. Assume $X$ is not connected, hence $X\cong X_{0}+X_{1}$, both non-empty. Define the map 
>$$
>f:X\to Y=\{ 0,1 \},\hspace{12pt}x\mapsto \begin{cases}
>0 & \text{if } x\in X_{0} \\
>1 & \text{if } x\in X_{1}
>\end{cases}
>$$
>Then, $f$ is continuous but not constant.

>[!prop] Proposition (Unions of overlapping connected sets)
>Let $(A_{i})_{i\in I}$ be a cover of $X$ by connected subsets. If there is $j\in I$ with $A_{i}\cap A_{j}\neq \emptyset$, $\forall i\in I$, then $X$ is connected.
^fc2a59

>[!proof]- 
 >Let $f:X\to \{ 0,1 \}$ be a continuous map. According to the [[Connectedness#^198a53|previous result]], $X$ will be connected if and only if any continuous map to a discrete space is constant. Then, since each $A_{i}$ is connected, $f|_{A_{i}}:A_{i}\to \{ 0,1 \}$ is constant for all $i \in I$, so $f$ is constant on $X$. Note that this is possible since all cover elements share a common at least one point. Thus, $X$ is connected.

---
### Intervals
>[!prop] Proposition (Intervals are the connected subsets of the real line)
 > 
>A subset $A\subseteq \mathbb{R}$ is connected if and only if it is an interval.

>[!proof]- 
 >$(\implies)$ Consider $A\subseteq \mathbb{R}$ a connected subset that is not an interval. Hence, there are $x,y,z\in \mathbb{R}$ such that $x<y<z$ but $y\not\in A$. Then, $A$ is a disjoint union of non-empty open sets $A=\{ a\in A|a<y \}\cup \{ a\in A|a>y \}$. Thus, $A$ [[Connectedness#^15a0f9|is not connected]].
 >
>($\impliedby$) Let $A\subseteq \mathbb{R}$ be an interval and suppose that $A$ is disconnected. Then, $A=U+V$. Consider $u\in U$ and $v\in V$ such that $u<v$. Let $s=sup(U\cap[u,v])$. Note that $U\cap[u,v]$ is closed, so it contains its supremum $s$, $s\neq v\in V$. Since $U\cap(u,v)$ is open, there is an $\epsilon>0$ such that $B_{\epsilon}(s)\subseteq U\cap(u,v)$. Thus, $s+\epsilon\in U\cap(u,v)$ which cannot be since $s$ is the supremum.

>[!rem] Remark (Connected sets have connected images)
>If $f:X\to Y$ is continuous and $X$ is connected, then $\mathrm{Im}f\subseteq Y$ is connected. In fact, any decomposition $\mathrm{Im}f=A+B$ would yield a decomposition $X=f^{-1}(A)+f^{-1}(B)$.

^a89d81

>[!col] Corollary (Intermediate value theorem)
>Let $X$ be connected, $f:X\to \mathbb{R}$ continuous. Then, $\mathrm{Im}f$ is an interval.

---
### Connectivity and Closure
>[!theo] Theorem (Connected sets have connected closure) ^2284f
>If $A\subseteq X$ is connected, then its closure $\bar{A}$ is connected. More generally, any $B$ with $A\subseteq B\subseteq \bar{A}$ is connected.


>[!proof]- 
 >Assume $B=B_{1}+B_{2}$. Note that $B_{1},B_{2}$ are open in $B$ %%put the reference to the definition of the topology%%. This means that there are open sets $U_{1},U_{2}\in X$ such that $B_{1}=B\cap U_{1}$ and $B_{2}=B\cap U_{2}$. Restricting to $A$, we also get $A=U_{1}\cap A+U_{2}\cap A$. Since $A$ is connected, we can assume without loss of generality that $U_{1}\cap A=\emptyset$. Then, $X\setminus U_{1}$ is a closed set containing $A$. Recall that $\bar{A}$ is the smallest closed set containing $A$ %%add a link to a proof%%. Hence, by hypothesis, $B\subseteq \bar{A}\subseteq X\setminus U_{1}$. Therefore, $B_{1}=B\cap U_{1}=\emptyset$. Thus, $B$ is connected.

---
### Connected Components
>[!defn] Definition (Connected component) 
>The union of all connected subsets $A\subseteq X$ with $x\in A$ is called the connected component of $x$ in $X$.

^b88834

>[!rem] Remark
>- Since all  the connected subsets share $x$ as a common point, the connected component is connected and [[Connectedness#^2284f|closed]]. 
>- The connected components form a partition of $X$.
>	- The singleton is connected, and then a connected component always exists.
>	- The connected components must be disjoint. Indeed, let $P,Q$ be two different connected components such that $P\cap Q\neq \emptyset$. Since they are connected, $P\cup Q$ [[Connectedness#^fc2a59|is connected]], too. Hence, $P\cup Q$ is the connected component since $P\subseteq P\cup Q$ and $Q\subseteq P\cup Q$.
>- Two points $x,y\in X$ are in the same component if and only if both are contained in the same connected set.
>-  Thus, for a connected subset $A\subseteq X$, we can also talk about the connected component of $A$.

^d874d5

>[!theo] Theorem (Connectedness of products)
>Let $X,Y$ be non-empty topological spaces. Then, $X\times Y$ is connected if and only if $X,Y$ are connected.

>[!proof]- 
 >$(\implies)$ Suppose that $X\times Y$ is connected. Consider the continuous maps $\text{pr}_{X}:X\times Y\to X$ and $\text{pr}_{Y}:X\times Y\to Y$ which are surjective. Then, $X,Y$ [[Connectedness#^a89d81|are connected.]]
 >
>$(\impliedby)$ Suppose that $X$ and $Y$ are connected. Consider any two points $(x,y),(\hat{x},\hat{y})\in X\times Y$. The subspaces $\{ x \}\times Y\cong Y$ and $X\times \{ \hat{y} \}\cong X$ are connected. The point $(x,\hat{y})$ is an element of both spaces. Then, $X\times \{ \hat{y} \}\cap \{ x \}\times Y\neq \emptyset$. Hence, $X\times \{ \hat{y} \}\cup \{ x \}\times Y\neq \emptyset$ is connected, and it contains both $(x,y)$ and $(\hat{x},\hat{y})$. Moreover, the same is true for the [[Connectedness#^d874d5|connected component]] of this subset. Therefore, any point in $X\times Y$ lies in the same connected component, and since the connected components [[Connectedness#^d874d5|form a partition]], $X\times Y$ must be equal to this component. Therefore, $X\times Y$ is connected.

>[!theo] Theorem (Connectedness of arbitrary products)
>Let $\{ X_{i} \}_{i\in I}$ be a family of non-empty topological spaces. Then, $\prod\limits_{i\in I}X_{i}$ is connected iff all $X_{i}$ are connected.

>[!proof]- 
 >$(\implies)$ Suppose that $\prod_{i\in I}X_{i}$ is connected. Now, consider the projection maps $\text{pr}_{i}:\prod_{i\in I}X_{i}\to X_{i}$. Since, each $\text{pr}_{i}$ is continuous and surjective, $\mathrm{Im}(\text{pr}_{i})=X_{i}$ [[Connectedness#^a89d81|is connected]] for all $i\in I$.
 >
 >$(\impliedby)$ Suppose that all $X_{i}$ are connected. The idea is to prove that there is a connected subspace that is [[Concepts#^6145f4 |dense]], then $\prod_{i\in I}X_{i}$ will be connected. Fix the component $\hat{x}_{i}\in X_{i}$ for all $i\in I$, and for $J\subseteq I$finite, consider the following:
 >$$
 >Y_{J}=\left\{  (x_{i})_{i\in I}\in \prod\limits_{i\in I}X_{i}\biggr|\text{pr}_{j}((x_{i})_{i\in I})=\hat{x}_{j}, \forall j\in I \setminus J  \right\}.
 >$$
 >Then, 
 > $$
> Y_{J}\cong\prod\limits_{j\in I \setminus J}\{ \hat{x}_{i} \}\times \prod\limits_{j\in J}X_{j}\subseteq \prod\limits_{i\in I}X_{i}
>$$
>Therefore, since $J$ is finite, $\prod_{j\in J}X_{j}$ is connected. Now, consider $Y=\bigcup_{J\subseteq I}Y_{J}$. Let's see if it's connected and dense. First, $Y$ is connected. Indeed, by definition, the point $(\hat{x}_{i})_{i\in I}\in \bigcap_{J\subseteq I}Y_{J}$. Then, $Y$ [[Connectedness#^fc2a59|is connected]] since each $Y_{J}$ are connected. Lastly, let us prove that $Y$ is dense. Indeed, consider the point $x\in \prod_{i\in I}X_{i}$ and let $V\in \mathcal{N}_{x}$. Then, there is $U\subseteq V$ open set. Hence, $U=\prod_{i\in I}U_{i}$ with $U_{k}=X_{k}$ for $k\in I \setminus K$, $K\subseteq I$ finite. Thus, the point $(\bar{x}_{j})_{j\in i}\in U$ defined as
> $$
> \bar{x}_{j}=\begin{cases}
>x_{j} &\text{if } j\in K,\\
>\hat{x}_{j} &\text{if }j\in I \setminus K
>\end{cases}
>$$
>where $x_{j}\in U_{j}$ with $j\in K$. Hence, $(\bar{x}_{j})_{j\in I}\in Y$, i.e., $Y_{j}\cap V\neq \emptyset$ or $Y\cap V$. Since, $V$ was an arbitrary neighborhood of an arbitrary point of $\prod_{i\in I}X_{i}$, we have $\overline{Y}=X$. Therefore, $\prod_{i\in I}X_{i}$ is connected.

>[!defn] Definition (Totally disconnected)
>A topological space $X$ such that all singletons $\{ x \}_{x\in X}$ are connected components is called totally disconnected.

>[!lemma] Lemma (Finitely many components sum)
 > If $X$ has finitely many component components, then they are open, and $X$ is their topological sum.
 
 >[!proof]-
>Each component is the complement of the union of finitely many other components. These are closed. By DeMorgan's Law, the complement of a union is the intersection of complements. Thus, each component is the intersection of finitely many open sets, and hence itself is open.

---
### Paths and Path Connectedness

>[!defn] Definition (Path connected, path component)
>- A path in a space $X$ is a continuous map $[a,b]\subseteq \mathbb{R}\to X$
>- $X$ is path connected if for every $x,y\in X$ there exists a path $\gamma:[a,b]\to  X$ such that $\gamma(a)=x, \gamma(b)=y$. We write $\gamma:x\leadsto y$.
>- The path component of $x\in X$ is the set of all $y\in X$ such that there exists $\gamma:x\leadsto y$.
 > 
 
 >[!theo] Theorem (Path connected implies connected)
 >
 >Any path-connected space $X$ is connected.
 >

^75b65c

>[!proof]- 
 >Suppose that $X$ is path connected, but $X=A+B$ with $x\in A,y\in B$. As $X$ is path connected, there is a path $\gamma:[0,1]\to X$, $x\leadsto y$. But $\gamma^{-1}(A)\sqcup\gamma^{-1}(B)=\gamma^{-1}(X)=[0,1]$. Both, $\gamma^{-1}(A),\gamma^{-1}(B)$ are non-empty and also open, by continuity of $\gamma$. But, then $[0,1]=\gamma^{-1}(A)+\gamma^{-1}(B)$, which cannot be.

---
### Local Notions of Connectedness

>[!defn] Definition (Locally (path-)connected)
 >A topological space $X$ is locally (path-)connected if for all $x\in X$, every neighborhood of $x$ contains a (path-)connected open neighborhood of $x$ as a subset.
 >

>[!rem] Remark 
>Equivalently:
>- For all $x\in X$, the (path-)connected open neighborhoods of $x$ form a [[Concepts#^f76270|neighborhood basis]] of $x$.
>- The (path-)connected open sets form a basis of $X$.

 >[!theo] Theorem (Locally connected spaces have open components)
 >
 >Any (path-)component of a locally (path-)connected space is open.

>[!proof]- 
 >Let $K$ be a (path-)component of $x\in X$. Let $V$ be a (path-)connected open neighborhood of $y\in K$. Both $V$ and $K$ are (path-)connected and [[Connectedness#^d874d5|contain the point]] $y$. Then, $V\cup K$ is also (path-)connected and contains the point $y$. [[Connectedness#^b88834|Thus]], $V\subseteq K$, and $K$ is also a neighborhood of $y$.Therefore, $K$ is open.

>[!theo] Theorem (From local to global path connected)
>Let $X$ be locally path connected. 
>- Then, for any every $x\in X$, the connected component of $x$ is its path component.
>- In particular, $X$ is connected if and only if its path connected.

>[!proof]- 
 > Let $K$ be the connected component of $x$, and $P$ its path component. [[Connectedness#^75b65c|Then]], $P\subseteq K$. Consider $Q=K\setminus P\neq \emptyset$. Thus, $Q$ is the union of its path components, which are open sets (look to the previous result). Hence, $Q$ and $P$ are open, disjoint, and cover $K$, i.e., $K=Q+P$. This cannot be, then $Q=\emptyset$. We conclude that $K=P$.
 
 
  







