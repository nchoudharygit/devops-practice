# Runbook: DevOps Lab API Incident

## Symptoms
- What users see
- What monitoring shows

## Quick checks
- Service health endpoint: `/health`
- Recent deploys (commit / image tag)
- Error rate and latency graphs

## Triage steps (in order)
1. Confirm scope: one instance or all?
2. Check logs
3. Check dependencies (DB, network)
4. Roll back to last known good image
5. Verify recovery via `/health`

## Recovery validation
- `/health` OK for 5 minutes
- Error rate back to baseline
- Latency p95 within expected range

## Escalation
- Who to notify
- When to call incident
