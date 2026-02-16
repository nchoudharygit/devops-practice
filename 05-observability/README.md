# 05 - Observability (Prometheus + Grafana)

## Scenario
If you cannot measure it, you are guessing. This lab adds metrics and dashboards.

## What you will build
- Prometheus scraping the API
- Grafana dashboards
- Basic SLIs:
  - request rate
  - error rate
  - latency (p95)

## Approach options
### Option A (recommended): Add `/metrics` endpoint to the API
- Use `prom-client` in Node to expose Prometheus metrics.

### Option B: Use reverse proxy metrics
- Put Nginx in front of the API and scrape Nginx metrics.
- Less code changes, but less visibility.

## Tasks
1. Start the monitoring stack:
```bash
docker compose up -d
```
2. Make your API expose metrics on `/metrics`.
3. Configure Prometheus to scrape it (starter config is included).
4. Import/create a Grafana dashboard.

## Acceptance criteria
- Grafana shows a dashboard with traffic, errors, latency.
- Prometheus has targets healthy.

## Notes
This folder provides the monitoring stack. You can point it at the app from lab 02/04.
