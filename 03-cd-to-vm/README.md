# 03 - CD to a VM (SSH Deploy)

## Scenario
You have a server (a VM) and you want GitHub Actions to deploy your API on every merge to `main`.

This lab is intentionally "classic DevOps": simple, transparent, and easy to debug.

## What you will build
- Build a Docker image in CI
- Push it to a registry (GHCR recommended)
- SSH into a VM
- Pull and restart with Docker Compose
- Rollback if health check fails

## Prereqs
- A Linux VM with:
  - Docker and docker compose installed
  - Port 80 or 3000 open (security group / firewall)
- A domain is optional but nice.
- GitHub Secrets set:
  - `VM_HOST`
  - `VM_USER`
  - `VM_SSH_KEY` (private key)
  - `REGISTRY_TOKEN` (if required for registry access)

## Tasks
1. Copy `server/docker-compose.yml` to your VM (first time).
2. Configure the GitHub Actions workflow in `.github/workflows/cd.yml`.
3. On merge to main:
   - CI builds and pushes image
   - VM pulls and restarts
4. Add rollback behavior:
   - keep previous image tag
   - if `/health` fails after deploy, revert

## Acceptance criteria
- A merge to main triggers a deploy.
- `/health` returns OK after deployment.
- A broken image triggers rollback.

## Notes
You can reuse the app from lab 02 or 01. This folder focuses on the deployment mechanics, not app code.
