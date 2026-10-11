Assessment Scope

The assessment covers the source code of The Tech Blog API, focusing on security controls implemented within its Node.js and Express backend.
In scope:

- User registration, login, JWT generation, and token verification.
- Authentication and authorization across API routes.
- Ownership checks for blog posts, book records, and profile updates.
- Input validation and database operations implemented through Knex.
- Profile image upload handling, including filenames and upload restrictions.
- Payment endpoint logic and its integration with Stripe.
- Secret management, CORS configuration, and error handling.
- Dependency declarations and lockfile review.
  Out of scope:
- Frontend applications and browser rendering behavior.
- Production servers, network infrastructure, and deployment configuration.
- Direct testing of live databases, customer data, or payment transactions.
- Security testing of third-party services, including Stripe.
- Denial-of-service testing, load testing, and social engineering.

  Assessment boundaries:

  The current assessment is limited to read-only source code inspection. No application files are modified, and no requests are sent to live services. Runtime testing and dependency vulnerability verification remain pending.
  Findings describe controls visible in this repository. External protections, such as an API gateway or reverse proxy, have not been assessed and may affect actual exposure.
