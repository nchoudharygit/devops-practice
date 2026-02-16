# 01 - CI Basics

## Scenario
You own a tiny API that must not regress. Your job is to set up a clean CI pipeline that runs on every PR.

## What you will build
- A small Node/Express API with two endpoints:
  - `GET /health`
  - `GET /version`
- A GitHub Actions pipeline that runs:
  - lint
  - unit tests

## Tasks
1. Run the API locally.
2. Ensure tests pass.
3. Enable GitHub Actions CI.
4. Add a status badge to this README.

## Acceptance criteria
- PRs show green checks for lint and tests.
- `npm test` and `npm run lint` work locally.
- README documents how to run the app and tests.

## Run locally
```bash
npm ci
npm run lint
npm test
npm start
# open http://localhost:3000/health
```
