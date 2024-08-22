What is a good way to formalize the idea of connectedness?
>[!def] Connected space
>A topological space $X$ is connected if the only subsets that are both open and closed are $\emptyset$ and $X$ itself.

>[!prp] Connectivity vs nontrivial sums
>$X$ is connected if and only if not is (homeomorphic to) a sum $X_{0}+X_{1}$ of nonempty spaces.

^15a0f9

`\begin{proof}`
$(\implies)$ Assume  $X\cong X_{0}+X_{1}$, with $X_{0},X_{1}\neq \emptyset$. In particular, both $X_{0}$ and $X_{1}$ are closed and open in $X$ %% insert link to the definition of this topology %%. Thus, $X$ is not connected. 
$(\impliedby)$ Now assume that $X$ is not connected. Let $X_{0}\not\in \{ \emptyset,X \}$ be closed and open in $X$. Then $X_{1}:=X\setminus X_{0}\not\in \{ \emptyset,X \}$ is closed and open as well. Now, $U\subseteq X$ is open in $X$ iff $U\cap X_{0}$ is open in $X_{0}$ and $U\cap X_{1}$ is open in $X_{1}$. Thus $X\cong X_{0}+X_{1}$, with $X_{0},X_{1}\neq \emptyset$. 
`\end{proof}`

> [!thm] Constant maps to discrete spaces
> $X$ is connected iff every continuous map $X\to Y$ to a discrete space $Y$ is constant

^198a53

`\begin{proof}`
$(\implies)$ Suppose that $X$ is connected, $f:X\to Y$ is continuous and $Y$ discrete. Let $y\in Y$. Since, $Y$ is discrete $\{ y \}$ is both open and closed. By continuity of $f$, the fiber $f^{-1}(y)$ is open and closed. But, $X$ is connected, $f^{-1}(y)$ is either $\emptyset$ or $X$. Thus, $f$ is constant.
$(\impliedby)$ Let's prove that if $X$ is not connected, then $f$ is not necessarily constant. Assume $X$ is not connected, hence $X\cong X_{0}+X_{1}$, both non-empty. Define the map 
$$
f:X\to Y=\{ 0,1 \},\hspace{12pt}x\mapsto \begin{cases}
0 & \text{if } x\in X_{0} \\
1 & \text{if } x\in X_{1}
\end{cases}
$$
Then, $f$ is continuous but not constant.
`\end{proof}`

>[!prp] Unions of overlapping connected sets
>Let $(A_{i})_{i\in I}$ be a cover of $X$ by connected subsets. If there is $j\in I$ with $A_{i}\cap A_{j}\neq \emptyset$, $\forall i\in I$, then $X$ is connected.

^48eb8f

`\begin{proof}`
Let $f:X\to \{ 0,1 \}$ be a continuous map. According to the [[Connectedness#^198a53|previous result]], $X$ will be connected if and only if any continuous map to a discrete space is constant. Then, since each $A_{i}$ is connected, $f|_{A_{i}}:A_{i}\to \{ 0,1 \}$ is constant for all $i \in I$, so $f$ is constant on $X$. Note that this is possible since all cover elements share a common at least one point. Thus, $X$ is connected.
`\end{proof}`

---
### Intervals
>[!prp] Intervals are the connected subsets of $\mathbb{R}$
>A subset $A\subseteq \mathbb{R}$ is connected if and only if it is an interval.

`\begin{proof}`
$(\implies)$ Consider $A\subseteq \mathbb{R}$ a connected subset that is not an interval. Hence, there are $x,y,z\in \mathbb{R}$ such that $x<y<z$ but $y\not\in A$. Then, $A$ is a disjoint union of non-empty open sets $A=\{ a\in A|a<y \}\cup \{ a\in A|a>y \}$. Thus, $A$ [[Connectedness#^15a0f9|is not connected]].
($\impliedby$) Let $A\subseteq \mathbb{R}$ be an interval and suppose that $A$ is disconnected. Then, $A=U+V$. Consider $u\in U$ and $v\in V$ such that $u<v$. Let $s=sup(U\cap[u,v])$. Note that $U\cap[u,v]$ is closed, and this contains its supremum $s$, $s\neq v\in V$. Since $U\cap(u,v)$ is open, there is an $\epsilon>0$ such that $B_{\epsilon}(s)\subseteq U\cap(u,v)$. Thus, $s+\epsilon\in U\cap(u,v)$ which cannot be since $s$ is the supremum.
`\end{proof}`
>[!rmk] Connected sets have connected images
>If $f:X\to Y$ is continuous and $X$ is connected, then $\mathrm{Im}f\subseteq Y$ is connected. In fact, any decomposition $\mathrm{Im}f=A+B$ would yield a decomposition $X=f^{-1}(A)+f^{-1}(B)$.

^a89d81

>[!cor] Intermediate value theorem
>Let $X$ be connected, $f:X\to \mathbb{R}$ continuous. Then, $\mathrm{Im}f$ is an interval.

---
### Connectivity and Closure
>[!thm] Connected sets have connected closure
>If $A\subseteq X$ is connected, then its closure $\bar{A}$ is connected. More generally, any $B$ with $A\subseteq B\subseteq \bar{A}$ is connected.

^2284f0

`\begin{proof}`
Assume $B=B_{1}+B_{2}$. Note that $B_{1},B_{2}$ are open in $B$ %%put the reference to the definition of the topology%%. This means that there are open sets $U_{1},U_{2}\in X$ such that $B_{1}=B\cap U_{1}$ and $B_{2}=B\cap U_{2}$. Restricting to $A$, we also get $A=U_{1}\cap A+U_{2}\cap A$. Since $A$ is connected, we can assume without loss of generality that $U_{1}\cap A=\emptyset$. Then, $X\setminus U_{1}$ is a closed set containing $A$. Recall that $\bar{A}$ is the smallest closed set containing $A$ %%add a link to a proof%%. Hence, by hypothesis, $B\subseteq \bar{A}\subseteq X\setminus U_{1}$. Therefore, $B_{1}=B\cap U_{1}=\emptyset$. Thus, $B$ is connected.
`\end{proof}`

---
### Connected Components
>[!def] Connected component
>The union of all connected subsets $A\subseteq X$ with $x\in A$ is called the connected component of $x$ in $X$.

>[!rmk]
>- Since all  the connected subsets share $x$ as a common point, the connected component is connected and [[Connectedness#^2284f0|closed]]. 
>- The connected components form a partition of $X$.
>	- The singleton is connected, and then a connected component always exists.
>	- The connected components must be disjoint. Indeed, let $P,Q$ be two different connected components such that $P\cap Q\neq \emptyset$. Since they are connected, $P\cup Q$ [[Connectedness#^48eb8f|is connected]], too. Hence, $P\cup Q$ is the connected component since $P\subseteq P\cup Q$ and $Q\subseteq P\cup Q$.
>- Two points $x,y\in X$ are in the same component if and only if both are contained in the same connected set.
>-  Thus, for a connected subset $A\subseteq X$, we can also talk about the connected component of $A$.

^d874d5

>[!thm] Connectedness of products
>Let $X,Y$ be non-empty topological spaces. Then, $X\times Y$ is connected if and only if $X,Y$ are connected.

`\begin{proof}`
$(\implies)$ Suppose that $X\times Y$ is connected. Consider the continuous maps $pr_{X}:X\times Y\to X$ and $pr_{Y}:X\times Y\to Y$ which are surjective. Then, $X,Y$ [[Connectedness#^a89d81|are connected.]]
$(\impliedby)$ Suppose that $X$ and $Y$ are connected. Consider any two points $(x,y),(\hat{x},\hat{y})\in X\times Y$. The subspaces $\{ x \}\times Y\cong Y$ and $X\times \{ \hat{y} \}\cong X$ are connected. The point $(x,\hat{y})$ is an element of both spaces. Then, $X\times \{ \hat{y} \}\cap \{ x \}\times Y\neq \emptyset$. Hence, $X\times \{ \hat{y} \}\cup \{ x \}\times Y\neq \emptyset$ is connected, and it contains both $(x,y)$ and $(\hat{x},\hat{y})$. Moreover, the same is true for the [[Connectedness#^d874d5|connected component]] of this subset. Therefore, any point in $X\times Y$ lies in the same connected component, and since the connected components [[Connectedness#^d874d5|form a partition]], $X\times Y$ must be equal to this component. Therefore, $X\times Y$ is connected.
`\end{proof}`
>[!def] Totally disconnected
>A topological space $X$ such that all singletons $\{ x \}_{x\in X}$ are connected components is called totally disconnected.













