# Statistics and Data Resources

Verified: **2026-07-25**

> [!NOTE]
> Each unit inherits ten explicit selections through a level bundle. The
> **Required focus** column is binding: use the named chapters, modules, or
> search topic rather than treating a broad book or platform as assigned in full.

## Discipline catalog

| ID | Resource | Edition/year | Format and use | Canonical link |
|---|---|---|---|---|
| `STA.RES.001` | David M. Diez, Christopher D. Barr, and Mine Çetinkaya-Rundel, OpenIntro Statistics | 4th ed., 2019 | Open introductory textbook | [Official or authoritative record](https://www.openintro.org/book/os/) |
| `STA.RES.002` | Peter G. M. de Jong, A First Course in Probability and Statistics | 2019 | Cambridge bridge text | [Official or authoritative record](https://www.cambridge.org/highereducation/) |
| `STA.RES.003` | George Casella and Roger L. Berger, Statistical Inference | 2nd ed., 2002 | Cengage advanced reference | [Official or authoritative record](https://www.cengage.com/) |

Shared selections resolve through the [shared resource catalog](../resource-catalog.md).

## Resource bundles

| Bundle | T | B | A | L | V | U | F | E | R | N |
|---|---|---|---|---|---|---|---|---|---|---|
| `STA.BUNDLE.CORE` | `STA.RES.001` | `STA.RES.002` | `STA.RES.003` | `GLB.RES.001` | `GLB.RES.027` | `GLB.RES.001` | `GLB.RES.008` | `GLB.RES.005` | `STA.RES.003` | `GLB.RES.011` |
| `STA.BUNDLE.ADVANCED` | `STA.RES.003` | `STA.RES.002` | `STA.RES.003` | `GLB.RES.001` | `GLB.RES.027` | `GLB.RES.001` | `GLB.RES.008` | `GLB.RES.005` | `STA.RES.003` | `GLB.RES.011` |

Category order: **T** textbook, **B** beginner book, **A** advanced book,
**L** lecture notes, **V** video course, **U** university course, **F** free
resource, **E** exercises, **R** reference, **N** encyclopedia.

## Unit resource matrix

| Unit | Bundle | Required focus |
|---|---|---|
| `STA-B01` Data, variables, cases, measurement, and data-generating processes | `STA.BUNDLE.CORE` | Questions, cases, variables, values; Categorical/quantitative and discrete/continuous data; Units, coding, metadata, and provenance |
| `STA-B02` Sampling, bias, missingness, observational studies, and experiments | `STA.BUNDLE.CORE` | Target population and frame; Random, stratified, cluster, convenience samples; Nonresponse and missingness |
| `STA-B04` Distributions, summary statistics, visualization, and robust description | `STA.BUNDLE.CORE` | Frequency and distribution shape; Center, spread, quantiles; Histograms, boxplots, scatterplots, and tables |
| `STA-B03` Chance, conditional probability, independence, and Bayes' rule | `STA.BUNDLE.CORE` | Sample spaces and events; Addition/multiplication rules; Conditional probability and independence |
| `STA-I01` Random variables, expectation, variance, covariance, and common distributions | `STA.BUNDLE.CORE` | Discrete/continuous random variables; CDF, density, mass; Expectation, variance, covariance |
| `STA-I02` Laws of large numbers, central limit theorem, and simulation | `STA.BUNDLE.CORE` | Sampling distributions; LLN and stabilization; CLT and standard error |
| `STA-I03` Estimation, uncertainty intervals, testing, effect size, and power | `STA.BUNDLE.CORE` | Estimands and estimators; Bias, variance, consistency; Confidence intervals |
| `STA-I04` Linear, generalized linear, and multilevel regression | `STA.BUNDLE.CORE` | Linear model and least squares; Diagnostics, transformations, interactions; Logistic/count models |
| `STA-I05` Bayesian modeling, priors, likelihoods, posteriors, and prediction | `STA.BUNDLE.CORE` | Prior, likelihood, posterior; Conjugacy and computation; Credible intervals and posterior prediction |
| `STA-I06` Data cleaning, provenance, formats, querying, and reproducible analysis | `STA.BUNDLE.CORE` | Tidy/relational structures and schemas; Parsing, types, joins, reshape; Missing, duplicate, inconsistent, anomalous values |
| `STA-A01` Causal inference: potential outcomes, graphs, identification, and designs | `STA.BUNDLE.ADVANCED` | Counterfactuals and estimands; DAGs, backdoors, colliders; Randomization and natural experiments |
| `STA-A02` Time series, spatial, survival, and longitudinal data | `STA.BUNDLE.ADVANCED` | Dependence and repeated measures; Trend, seasonality, ARIMA/state space; Spatial autocorrelation and geostatistics |
| `STA-A03` Nonparametric, resampling, robust, and high-dimensional methods | `STA.BUNDLE.ADVANCED` | Rank and distribution-free methods; bootstrap and permutation; robust estimators |
| `STA-A04` Statistical learning, regularization, validation, and decision rules | `STA.BUNDLE.ADVANCED` | Prediction loss and generalization; train/validation/test and cross-validation; ridge, lasso, elastic net |
| `STA-A05` Survey, administrative, sensor, text, image, and network data | `STA.BUNDLE.ADVANCED` | Survey weights and complex samples; administrative linkage; sensor/stream data |
| `STA-A06` Privacy, fairness, uncertainty communication, and statistical ethics | `STA.BUNDLE.ADVANCED` | Confidentiality, reidentification, minimization; disclosure control and differential privacy; fairness definitions and trade-offs |
| `STA-E01` Mathematical statistics and asymptotic theory | `STA.BUNDLE.ADVANCED` | Sufficiency, completeness, exponential families; decision theory and optimality; likelihood and estimating equations |
| `STA-E02` Original statistical methodology and domain collaboration | `STA.BUNDLE.ADVANCED` | Domain problem and estimand; literature and methodological gap; new model/estimator |

## Use and maintenance

- Begin with B or V when diagnostic work shows a gap; otherwise use T as the spine.
- Complete E without solution-copying, then consult L or U for a second explanation.
- Use A and R for disputed, technical, or research-level questions.
- Verify living resources annually and edition-sensitive resources before replacement.
