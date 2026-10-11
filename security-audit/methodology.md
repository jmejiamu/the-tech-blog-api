Assessment Methodology

The assessment uses manual, read-only source code review to identify security weaknesses and trace how requests move through API routes, middleware, controllers, and database operations.

1. Application Mapping
   Identify the backend’s technologies, dependencies, API endpoints, and sensitive operations. Record which routes apply authentication middleware.
2. Authentication Review
   Examine registration, password hashing, login, JWT signing, token expiration, and token verification. Review how authentication secrets are stored and used.
3. Authorization Review
   Trace create, update, and delete operations to determine whether they require authentication and enforce resource ownership. Examine whether client-supplied IDs or identity fields can affect another user’s records.
4. Input and Database Review
   Inspect request parameters and body fields for validation, type checks, and length restrictions. Review database queries and trace untrusted input into storage and sensitive operations.
5. Upload and Payment Review
   Examine upload authentication, filenames, storage paths, file type restrictions, and size limits. Review payment logic for validation and reliance on client-supplied values.
6. Configuration and Dependency Review
   Inspect CORS, error handling, secret management, and dependency declarations. Package age alone is not treated as evidence of a vulnerability; advisory verification remains pending.
7. Finding Documentation
   Record each finding’s affected endpoint, code location, observed weakness, potential impact, and recommended remediation. Distinguish code-supported observations from risks that require runtime confirmation.

The current phase does not include runtime exploitation or requests to live services. Any later validation will use an isolated environment with test accounts and synthetic data. Final severity ratings will consider exploitability, required access, affected data, and demonstrated impact.
