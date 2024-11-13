---
title: Lipschitz continuous
draft: false
tags:
---
Let us define what is the Lipschitz continuity:
>[!defn] Definition (Lipschitz continuity)
 > A function between the metric spaces $(X,d_{X}), (Y,d_{Y})$, namely $f:(X,d_{X})\to(Y,d_{y})$ is **Lipschitz continuous** if there exists a constant $L\geq 0$  such that for all $x_{1},x_{2}\in X$,
> $$
> d_{Y}(f(x_{1}),f(x_{2}))\leq L d_{X}(x_{1},x_{2}).
>$$
>The  constant $L$ is called the **Lipschitz constant**. Also, a function that satisfies this property can be called $L-$Lipschitz.

>[!rem] Remark 
 >Note that if the Lipschitz constant $L=0$. Then, for all pairs $x_{1},x_{2}\in X$ we have that
> $$
> d_{Y}(f(x_{1}),f(x_{2}))=0
>$$
>Therefore, the function is constant.

Lipchitz continuity is a stronger form of continuity, i.e., if a function is $L-$Lipschitz, then, is also continuous. This result is stated and proved in the following proposition. 

>[!prop] Proposition (Lipschitz implies continuity)
>If a function $f:X\to Y$ between metric spaces $(X,d_{X})$ and $(Y,d_{Y})$ is **Lipschitz continuous**, then it is **continuous**.

>[!proof]- 
>Let $f:X\to Y$ be Lipschitz continuous with Lipschitz constant $L\geq 0$. Thus, we for all $x_{1},x_{2}\in X$ we have the following inequality:
>$$
> d_{Y}(f(x_{1}),f(x_{2}))\leq Ld_{X}(x_{1},x_{2})
>$$
>Now, consider an arbitrary but fixed $\epsilon>0$ and $x\in X$. We want to find $\delta>0$ such that if 
>$$
>d_{X}(x,x')<\delta\implies d_{Y}(f(x_1),f(x_{2}))<\epsilon
>$$
>Let $\delta>0=\epsilon/L$, and consider $x'\in X$ such that satisfies $d_{X}(x,x')<\delta$. Hence,
>$$
>d_{Y}(f(x_{1}),f(x_{2}))\leq Ld_{X}(x_{1},x_{2})< L\delta=\frac{L\epsilon}{L} =\epsilon
>$$
>We conclude that $f$ is continuous.




 
