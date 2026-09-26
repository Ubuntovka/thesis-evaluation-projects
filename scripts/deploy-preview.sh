#!/bin/sh
# Deploys the current commit as a Vercel preview and prints only its URL.
# Needs VERCEL_TOKEN, VERCEL_ORG_ID and VERCEL_PROJECT_ID as CI/CD variables.
set -e
npx --yes vercel@latest deploy --yes --token "$VERCEL_TOKEN" 2>vercel-deploy.log | tail -n 1
