# DevOps Practice Labs (6 mini-projects)

This repo is a hands-on practice track to build real DevOps muscle memory: CI, containers, CD, Kubernetes, observability, and incident habits.

## How to use
Each folder is a self-contained lab with:
- `README.md` (problem statement, tasks, acceptance criteria)
- starter code (where useful)

Recommended flow: do labs in order.

## Prereqs (local)
- Git
- Docker + Docker Compose
- GitHub account (for Actions)
- Optional for K8s labs: `kubectl`, `kind` or `minikube`, `helm`

## Labs
1. **01-ci-basics**: CI pipeline for a simple API (lint + test + build).
2. **02-docker-compose**: Add Postgres, migrations, compose orchestration.
3. **03-cd-to-vm**: Deploy via SSH to a VM with rollback and health checks.
4. **04-kubernetes**: Deploy to Kubernetes with probes, ingress, HPA.
5. **05-observability**: Prometheus + Grafana, custom metrics, dashboards.
6. **06-chaos-runbook**: Failure injection, alerts, runbooks, postmortems.

## Licensing
MIT. Use it, fork it, break it, fix it.
