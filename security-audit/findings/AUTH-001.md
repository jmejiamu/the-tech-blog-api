# AUTH-001 — Hardcoded JWT Secret

**Project:** the-tech-blog-api  
**Component:** authorization.js  
**Severity:** High (provisional)  
**Status:** Confirmed — Remediation Pending  
**Category:** CWE-798 — Use of Hard-coded Credentials

## Description

The authorization middleware contains a hardcoded JWT secret used to verify authentication tokens.

## Evidence

```javascript
const secret_key = "SECRET_KEY_THE_TECH_BLOG";

const verify = jwt.verify(token, secret_key);
```

## Security Impact

An attacker who obtains the source code can recover the JWT verification secret.

If this secret is also used to sign tokens, an attacker may be able to forge valid authentication tokens and impersonate other users.

## Root Cause

The JWT secret is embedded directly in the application source code rather than being managed through secure configuration.

## Recommended Remediation

- Remove the hardcoded secret.
- Use a strong, randomly generated JWT secret stored outside the source code.
- Rotate the exposed secret.
- Restrict accepted JWT signing algorithms.
- Upgrade the vulnerable jsonwebtoken dependency.
- Verify that invalid and forged tokens are rejected.

## Verification Plan

1. Confirm the application rejects tokens signed with an incorrect secret.
2. Confirm expired tokens are rejected.
3. Confirm tokens using unexpected algorithms are rejected.
4. Confirm valid tokens continue to work after remediation.
5. Confirm the secret is no longer present in tracked source files.

## Remediation Status

Pending implementation in security/fixes.
