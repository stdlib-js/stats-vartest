// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{primitives as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number-array@v0.0.8-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-typed-array-like@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-f-cdf@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-f-quantile@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-variance@v0.0.10-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-min@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.0.8-esm/index.mjs";import{isPrimitive as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import{isPrimitive as h}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import{isPrimitive as p}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nan@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import{isPrimitive as v}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-roundn@esm/index.mjs";function b(t){var e,s,i;if(s=4,e=!0,arguments.length>0){if(!m(t))throw new TypeError(a("0fr3X",t));if(c(t,"digits")){if(!j(t.digits))throw new TypeError(a("0fr3b","digits",t.digits));s=t.digits}if(c(t,"decision")){if(!v(t.decision))throw new TypeError(a("0fr30","decision",t.decision));e=t.decision}}switch(i="",i+=this.method,i+="\n\n",i+="Alternative hypothesis: ",i+="True ratio in variances is ",this.alternative){case"less":i+="less than ";break;case"greater":i+="greater than ";break;default:i+="not equal to "}return i+=this.nullValue,i+="\n\n",i+="    pValue: "+g(this.pValue,-s)+"\n",i+="    statistic: "+g(this.statistic,-s)+"\n",i+="    variance of x: "+g(this.xvar,-s),i+=" (df of x: "+g(this.dfX,-s)+")\n",i+="    variance of y: "+g(this.yvar,-s),i+=" (df of y: "+g(this.dfY,-s)+")\n",i+="    "+100*(1-this.alpha)+"% confidence interval: ["+g(this.ci[0],-s)+","+g(this.ci[1],-s)+"]",i+="\n\n",e&&(i+="Test Decision: ",this.rejected?i+="Reject null in favor of alternative at "+100*this.alpha+"% significance level":i+="Fail to reject null in favor of alternative at "+100*this.alpha+"% significance level",i+="\n"),i}function u(j,v,g){var u,w,x,y,E,T,k,V,P,X,q,A,F,R,Y;if(!e(j)&&!t(j))throw new TypeError(a("0fr8j",j));if(!e(v)&&!t(v))throw new TypeError(a("0frAa",v));if(T={},g&&(A=function(t,e){return m(e)?c(e,"alpha")&&(t.alpha=e.alpha,!l(t.alpha)||f(t.alpha))?new TypeError(a("0fr8h","alpha",t.alpha)):c(e,"alternative")&&(t.alternative=e.alternative,!p(t.alternative))?new TypeError(a("0fr2i","alternative",t.alternative)):c(e,"ratio")&&(t.ratio=e.ratio,!h(t.ratio)||f(t.ratio))?new TypeError(a("0fr4Q","ratio",t.ratio)):null:new TypeError(a("0fr2h",e))}(T,g),A))throw A;if(x=T.ratio||1,(w=void 0===T.alpha?.05:T.alpha)<0||w>1)throw new RangeError(a("invalid option. `%s` option must be a number on the interval: [0, 1]. Option: `%f`.","alpha",w));switch(R=j.length-1,Y=v.length-1,P=n(j.length,1,j,1),X=n(v.length,1,v,1),k=i(V=(u=P/X)/x,R,Y),q=T.alternative||"two-sided"){case"two-sided":k=2*o(k,1-k),E=[u/r(1-(y=w/2),R,Y),u/r(y,R,Y)];break;case"greater":k=1-k,E=[u/r(1-w,R,Y),d];break;case"less":E=[0,u/r(w,R,Y)];break;default:throw new Error(a("0fr3t","alternative",["two-sided","less","greater"].join('", "'),q))}return s(F={},"rejected",k<=w),s(F,"alpha",w),s(F,"pValue",k),s(F,"statistic",V),s(F,"ci",E),s(F,"alternative",q),s(F,"xvar",P),s(F,"yvar",X),s(F,"dfX",R),s(F,"dfY",Y),s(F,"method","F test for comparing two variances"),s(F,"nullValue",x),s(F,"print",b),F}export{u as default};
//# sourceMappingURL=index.mjs.map
