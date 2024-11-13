---
title: Sequences and Series of Functions
draft: false
tags:
  - Pure_Mathematics
  - Analysis
---
We will consider two types of convergence on the sequence of functions that lead to different but equally important results. Beginning with the more natural one, we will consider convergence as a "generalization" of a sequence of points viewed in metric space.

>[!defn] Definition (Pointwise Convergence)
 > Suppose that $(f_{n})$ is a sequence of functions $f_{n}:A\to \mathbb{R}$ and $f:A\to \mathbb{R}$. Then, $f_{n}\to f$ pointwise on $A$ if $f_{n}(x)\to f(x)$ as $n\to \infty$ for every $x \in A$.
 > We say that the sequence $(f_{n})$ converges pointwise if it converges pointwise to some function $f$, in which case >
 > $$
>f(x)=\lim_{ n \to \infty } f_{n}(x).
>$$

Although, looks and feel natural, this kind of convergence its not as well-behaved as we would like. For example,

>[!example] Example (Does not preserve continuity)
 > Suppose that $f_{n}:[0,1]\to \mathbb{R}$ is defined by $f_{n}(x)=x^n$. if $0\leq x<1$, then $x^n\to0$ as $n\to \infty$, while if $x=1$, then $x^n\to 1$ as $n\to \infty$. So $f_{n}\to f$ pointwise where
 > $$
>f(x)=\begin{cases}
>0 &\text{if }0\leq x<1;\\ \\
>1 & \text{if } x=1.
>\end{cases}
>$$
>Although each $f_{n}$ is continuous on $[0,1]$, their pointwise limit $f$ is not.


 
