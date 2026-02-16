# 06 - Chaos + Incident Drill

## Scenario
Things fail. Your job is to fail gracefully, detect it fast, and recover predictably.

## What you will build
- A failure injection method
- Alerts (basic)
- A runbook
- A postmortem template

## Failure ideas
Pick 2:
- Random 500s for 2 minutes
- Add 2s latency to 30% of requests
- Break DB connectivity
- Crash loop (exit process on a trigger)

## Tasks
1. Implement a failure toggle (env var or endpoint protected by a token).
2. Trigger a failure and confirm:
   - the alert fires (or at least metrics show it)
   - the runbook steps restore health
3. Write a postmortem for the simulated incident.

## Acceptance criteria
- Runbook exists and is usable by someone else.
- Postmortem has timeline + root cause + action items.
