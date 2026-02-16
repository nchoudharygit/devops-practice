# 04 - Kubernetes Deployment (local)

## Scenario
You will deploy the API to Kubernetes using kind or minikube.

## What you will build
- Deployment + Service
- ConfigMap + Secret
- Liveness + readiness probes
- Ingress
- HPA (autoscaling)

## Prereqs
- `kubectl`
- `kind` OR `minikube`
- Optional: `helm` for ingress controller install

## Tasks
1. Create a local cluster.
2. Build/push the image to a registry your cluster can pull (or load into kind).
3. Apply the manifests in `k8s/`.
4. Verify:
   - pods are healthy
   - service routes traffic
   - ingress works

## Acceptance criteria
- `kubectl apply -f k8s/` works.
- `/health` and `/version` respond through ingress.

## Notes
Manifests use an image placeholder: `YOUR_IMAGE_HERE`.
Replace it with your pushed image.
