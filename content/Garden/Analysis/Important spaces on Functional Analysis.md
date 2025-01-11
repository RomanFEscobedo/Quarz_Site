1. Let $D$ be an arbitrary set. Then $(B(D;\mathbb{K}),\lVert \cdot \rVert_{\infty}),$ $$
B(D;\mathbb{K}) = \{ f | f:D\to \mathbb{K}, f \text{ bounded} \}, \quad \lVert f \rVert _{\infty} = \sup\limits_{ x \in D } \lvert f (x) \rvert   
$$
2. If $D$ is a Lebesgue measurable subset of $\mathbb{R}^n$ (this is the case for example if $D$ is open or closed), then for $1\leq p< \infty$ the space of functions $L^p(D;\mathbb{K})$ of functions which are Lebesgue integral to the $p-$th power; that is, those measurable functions for which $$
\lVert f \rVert _{p}=\left( \int_{D}\lvert f(x) \rvert ^p dx \right)^{1/p} < \infty
$$
### Spaces of sequences
1. Let's set the set $D= \mathbb{N}$. Then, $B(\mathbb{N};\mathbb{K})$ coincide with the space of all bounded sequences, denoted as $l^\infty(\mathbb{K})$, $$
l^\infty(\mathbb{K}) = \{ x |x=(x_{k})_{k\in \mathbb{N}}, x_{k}\in \mathbb{K}, \sup\limits_{ k\in \mathbb{N} } \lvert x_{k} \rvert  <\infty\}, \quad \lVert x \rVert _{\infty}=\sup\limits_{ k\in \mathbb{N} } \lvert x_{k} \rvert.
$$
2. Subsets of $l^\infty(\mathbb{K})$: $$
\begin{align}
c(\mathbb{K}) & =\{ x | x = (x_{k})_{k\in \mathbb{N}} \text{ is a convergent sequence in } \mathbb{K} \}, \\
c_{0}(\mathbb{K}) & = \{ x | x = (x_{k})_{k\in \mathbb{N}} \text{ converges to } 0 \text{ in } \mathbb{K}\}.
\end{align}
$$
3. The space $c_{e}(\mathbb{K})$ of all finite sequences: $$
c_{e}(\mathbb{K}) = \{ x | x = (x_{k})_{k\in \mathbb{N}}, \text{ there exists } N\in \mathbb{N} \text{ with } x_{k}=0, \forall k\geq N\}.
$$we have that $\overline{c_{e}(\mathbb{K})}=c_{0}(\mathbb{K})$
Let $x=(x_{k})_{k\in \mathbb{N}}$ be a sequence in $\mathbb{K}$. We define $$
\lVert x \rVert _{p}=\left( \sum\limits_{i=1}^{\infty} \lvert x_{k} \rvert ^p \right)^{1/p}, \quad 1\leq p<\infty.
$$
4. Then, we can define the space of sequences which are summable to the $p$-th power: $$
l^p(\mathbb{K})=\{ x|x=(x_{k})_{k\in \mathbb{N}},x_{k}\in \mathbb{K},\lVert x \rVert _{p}<\infty \}.
$$

