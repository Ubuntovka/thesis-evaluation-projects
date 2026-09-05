# UIQLab validation

Validated on 5 September 2026 from the same dirty working-tree snapshot (`9942c3e`, branch `profile-based-pages`). Screenshots were captured at 1440 × 900 CSS pixels, DPR 1, light colour scheme, with animation disabled. M5, M6 and M10 used the screenshot assessment endpoint; M13 used the URL endpoint against the same local application.

Materiality is `|ΔM5| >= 0.03` or `|relative M5| >= 10%`, `|ΔM10| >= 0.5` or `|relative M10| >= 10%`, and one M13 node. M13 below is the affected-node count used by the profile, not the number of axe rules.

## Final validation table

| Baseline → candidate | Profile / direction | M5 baseline → candidate; Δ (relative) | M10 baseline → candidate; Δ (relative) | M13 baseline → candidate; Δ (relative) | Material decisions | Outcome | Representative result IDs |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `/v/k7m2qx` → `/v/v3h9dp` | layout-density / more-compact | 0.659773 → 0.563769; -0.096005 (-14.55%) | 10.689785 → 11.971984; +1.282199 (+11.99%) | 11 → 11; 0 (0%) | M5 decrease; M10 increase | **aligned** | `7abebbd2-3bfc-430f-bdb9-1ee8a983ca2c`, `bfa09802-73f1-4b24-b62d-d79e1970b197` |
| `/v/k7m2qx` → `/v/n8t4cw` | layout-density / more-compact | 0.659773 → 0.936966; +0.277193 (+42.01%) | 10.689785 → 10.010550; -0.679234 (-6.35%) | 11 → 11; 0 (0%) | M5 increase; M10 decrease (absolute threshold) | **opposed** | `7abebbd2-3bfc-430f-bdb9-1ee8a983ca2c`, `27deb8da-0daa-4401-a81d-fceb5a46ba5f` |
| `/v/r8m2xd` → `/v/c2x7pk` | layout-density / more-spacious | 0.541340 → 0.663174; +0.121834 (+22.51%) | 13.923478 → 13.217984; -0.705493 (-5.07%) | 19 → 19; 0 (0%) | M5 increase; M10 decrease (absolute threshold) | **aligned** | `f9df4ad8-ab8e-4f11-b859-1c5bdbbe5e4c`, `7b86da44-9f14-4518-87ed-86c3cd1f0973` |
| `/v/r8m2xd` → `/v/l5q9au` | layout-density / more-spacious | 0.541340 → 0.494721; -0.046619 (-8.61%) | 13.923478 → 15.628287; +1.704809 (+12.24%) | 19 → 19; 0 (0%) | M5 decrease (absolute threshold); M10 increase | **opposed** | `f9df4ad8-ab8e-4f11-b859-1c5bdbbe5e4c`, `ee3a4e80-fad6-41de-b408-e8f034bc92c7` |
| `/v/k7m2qx` → `/v/f6z1jr` | accessibility / reduce-issues | 0.659773 → 0.659773; 0 (0%) | 10.689785 → 10.689785; 0 (0%) | 11 → 5; -6 (-54.55%) | M13 decrease | **aligned** | `f04d74db-e012-43cd-b07e-9538a5124fbd`, `895787e0-1e53-4cb7-b726-42aef10be4d2` |
| `/v/k7m2qx` → `/v/y3b7se` | accessibility / reduce-issues | 0.659773 → 0.659773; 0 (0%) | 10.689785 → 10.689785; 0 (0%) | 11 → 11; 0 (0%) | no material change | **unchanged** | `f04d74db-e012-43cd-b07e-9538a5124fbd`, `13df5421-199a-40e4-8a23-17add4904c18` |
| `/v/r8m2xd` → `/v/w7j4bn` | accessibility / reduce-issues | 0.541340 → 0.541340; 0 (0%) | 13.923478 → 13.923478; 0 (0%) | 19 → 13; -6 (-31.58%) | M13 decrease | **aligned** | `a762d5f8-9a16-4a7f-bf4f-7c2c02d41409`, `94485029-8a21-47a3-b346-93780f0f0815` |
| `/v/r8m2xd` → `/v/t9f6ms` | accessibility / reduce-issues | 0.541340 → 0.541340; 0 (0%) | 13.923478 → 13.923478; 0 (0%) | 19 → 19; 0 (0%) | no material change | **unchanged** | `a762d5f8-9a16-4a7f-bf4f-7c2c02d41409`, `138081e0-4e8e-41f0-af8e-272ea91baf90` |

The accessibility screenshots are byte-identical within each project (Alpha SHA-256 `f3b40cb1…3956`; Beta `596be94f…f46c`), so their M5/M10 values are the corresponding assessed baseline values. M13 warm-up also confirmed `/v/v3h9dp` and `/v/n8t4cw` remain 11, and `/v/l5q9au` and `/v/c2x7pk` remain 19.

## Accessibility detail

Alpha baseline, compact, spacious and ineffective states contain six `button-name` nodes plus five pre-existing `skip-link` nodes: M13 = 11 across two axe rules. Alpha success removes only `button-name`: M13 = 5 across one rule.

Beta baseline, compact, spacious and ineffective states contain six `button-name`, four pre-existing `color-contrast` and nine pre-existing `skip-link` nodes: M13 = 19 across three rules. Beta success removes only `button-name`: M13 = 13 across two rules. No unrelated rule or node was introduced by either accessibility candidate.

## Repetition stability and visual artifacts

One warm-up and three final repetitions produced identical scalar values and classifications in every required comparison. Final density run IDs by route (R1, R2, R3):

| Route | R1 | R2 | R3 |
| --- | --- | --- | --- |
| `/v/k7m2qx` | `b88c4f82-fa0b-43c6-aca8-28214163aefa` | `299d30f3-5120-42cf-8b1f-fdd017fe56d6` | `7abebbd2-3bfc-430f-bdb9-1ee8a983ca2c` |
| `/v/v3h9dp` | `aa133dfb-9f97-494a-bae0-d2ece3394887` | `313152f8-8bc5-42e7-89e4-3d91c91a8c4e` | `bfa09802-73f1-4b24-b62d-d79e1970b197` |
| `/v/n8t4cw` | `5793fcf3-ba91-4f8f-a6cd-7999d9e40351` | `94bf933d-cfa1-4a65-86d7-74f95728a72f` | `27deb8da-0daa-4401-a81d-fceb5a46ba5f` |
| `/v/r8m2xd` | `5f63889a-0ce0-43d8-985c-00c5dadd7ec8` | `3b65b755-7269-4d6f-8d86-ce4c4c6aa04e` | `f9df4ad8-ab8e-4f11-b859-1c5bdbbe5e4c` |
| `/v/l5q9au` | `16ec7ad3-a981-42e5-972d-9ab72c714528` | `b8cc70ae-1892-445f-b17c-395a8d1ae702` | `ee3a4e80-fad6-41de-b408-e8f034bc92c7` |
| `/v/c2x7pk` | `20e2b2c5-22b5-4cfc-8b13-46a66cb09806` | `a363920a-d548-4b14-bdce-802767e0174e` | `7b86da44-9f14-4518-87ed-86c3cd1f0973` |

Representative R3 UIED / M10 artifacts:

| Route | M6 segmentation | M10 map |
| --- | --- | --- |
| `/v/k7m2qx` | `47388b1b-d019-40fc-bcd0-de25670e2722.png` | `c664646d-a107-48a2-8983-f004724f3771.png` |
| `/v/v3h9dp` | `d7cc00ca-29f1-40fb-8932-51bd3e0a8520.png` | `f0332474-3ae6-4a28-8020-41ed461e0617.png` |
| `/v/n8t4cw` | `6b5ab596-2141-4070-bbe4-4e425007089d.png` | `2942f383-25af-42cf-a523-7689c62dc591.png` |
| `/v/r8m2xd` | `ff3ebe83-1b58-4a49-b890-4b25ed0582dc.png` | `d767aa79-19b0-4806-9218-28a38459c5a0.png` |
| `/v/l5q9au` | `eb474db7-8d67-4118-b033-9636c067cb68.png` | `ac98d0ce-0f6e-4a78-91a8-7a15246b2b3a.png` |
| `/v/c2x7pk` | `c2cf0bd6-2ef8-4470-886e-0e0bab209155.png` | `e266be3f-55f6-4032-8e99-e457a343a19f.png` |

Artifacts are served by the configured UIQLab asset service at `http://localhost:8001/results/<artifact>` and were visually inspected. The initial parallel repetition attempt exhausted the evaluator process pool; the final recorded passes were rerun sequentially with evaluator memory recycled between density passes. There was no scalar or classification variance in the completed controlled runs.
