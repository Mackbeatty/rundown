# Architecture Decision Records

## ADR-001: Monorepo Structure

**Status:** Accepted

**Context:** Rundown consists of a Node.js API backend and a SwiftUI iOS client. We need a repository structure that keeps both components together while maintaining clear boundaries.

**Decision:** Use a monorepo with top-level `api/` and `ios/` directories.

**Consequences:** Shared visibility across the stack, single PR workflow, simpler CI configuration.
